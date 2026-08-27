import { useMemo, useState, type MouseEvent, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { GLOSSARY, KEYWORDS } from '../data/csharpGlossary'

type TokenType = 'keyword' | 'comment' | 'string' | 'char' | 'number' | 'identifier' | 'text' | 'punct'

interface Token {
  type: TokenType
  value: string
}

function isWordChar(ch: string): boolean {
  return /[A-Za-z0-9_]/.test(ch)
}

function tokenizeCode(code: string): Token[] {
  const tokens: Token[] = []
  let i = 0
  const n = code.length

  while (i < n) {
    const ch = code[i]

    if (ch === '/' && code[i + 1] === '/') {
      let j = i
      while (j < n && code[j] !== '\n') j++
      tokens.push({ type: 'comment', value: code.slice(i, j) })
      i = j
      continue
    }
    if (ch === '/' && code[i + 1] === '*') {
      const end = code.indexOf('*/', i + 2)
      const j = end === -1 ? n : end + 2
      tokens.push({ type: 'comment', value: code.slice(i, j) })
      i = j
      continue
    }
    if (ch === '"' && code[i + 1] === '"' && code[i + 2] === '"') {
      const end = code.indexOf('"""', i + 3)
      const j = end === -1 ? n : end + 3
      tokens.push({ type: 'string', value: code.slice(i, j) })
      i = j
      continue
    }
    if (ch === '@' && code[i + 1] === '"') {
      let j = i + 2
      while (j < n) {
        if (code[j] === '"') {
          if (code[j + 1] === '"') {
            j += 2
            continue
          }
          j++
          break
        }
        j++
      }
      tokens.push({ type: 'string', value: code.slice(i, j) })
      i = j
      continue
    }
    if (ch === '"') {
      let j = i + 1
      let escaped = false
      while (j < n) {
        const c = code[j]
        if (escaped) escaped = false
        else if (c === '\\') escaped = true
        else if (c === '"') {
          j++
          break
        }
        j++
      }
      tokens.push({ type: 'string', value: code.slice(i, j) })
      i = j
      continue
    }
    if (ch === "'") {
      let j = i + 1
      let escaped = false
      while (j < n) {
        const c = code[j]
        if (escaped) escaped = false
        else if (c === '\\') escaped = true
        else if (c === "'") {
          j++
          break
        }
        j++
      }
      tokens.push({ type: 'char', value: code.slice(i, j) })
      i = j
      continue
    }
    if (/[0-9]/.test(ch)) {
      let j = i
      while (j < n && /[0-9._]/.test(code[j])) j++
      while (j < n && /[a-zA-Z]/.test(code[j])) j++
      tokens.push({ type: 'number', value: code.slice(i, j) })
      i = j
      continue
    }
    if (/[A-Za-z_]/.test(ch)) {
      let j = i
      while (j < n && isWordChar(code[j])) j++
      const word = code.slice(i, j)
      tokens.push({ type: KEYWORDS.has(word) ? 'keyword' : 'identifier', value: word })
      i = j
      continue
    }
    if (/\s/.test(ch)) {
      let j = i
      while (j < n && /\s/.test(code[j])) j++
      tokens.push({ type: 'text', value: code.slice(i, j) })
      i = j
      continue
    }
    tokens.push({ type: 'punct', value: ch })
    i++
  }

  return tokens
}

interface Tooltip {
  text: string
  x: number
  y: number
}

export default function CodeBlock({ code }: { code: string }) {
  const tokens = useMemo(() => tokenizeCode(code), [code])

  const usedTerms = useMemo(() => {
    const seen = new Set<string>()
    const list: string[] = []
    for (const t of tokens) {
      if (t.type === 'keyword' && GLOSSARY[t.value] && !seen.has(t.value)) {
        seen.add(t.value)
        list.push(t.value)
      }
    }
    return list
  }, [tokens])

  const [activeTerm, setActiveTerm] = useState<string | null>(null)
  const [tip, setTip] = useState<Tooltip | null>(null)

  const moveTooltip = (e: MouseEvent, term: string) => {
    setActiveTerm(term)
    const g = GLOSSARY[term].description
    const EST_W = 340
    const EST_H = 90
    let x = e.clientX + 12
    let y = e.clientY + 16
    if (x + EST_W > window.innerWidth - 8) x = Math.max(8, e.clientX - EST_W - 8)
    if (y + EST_H > window.innerHeight - 8) y = Math.max(8, e.clientY - EST_H - 8)
    setTip({ text: g, x, y })
  }
  const clearTooltip = () => {
    setActiveTerm(null)
    setTip(null)
  }

  const renderToken = (t: Token, idx: number): ReactNode => {
    if (t.type === 'keyword' && GLOSSARY[t.value]) {
      const active = activeTerm === t.value
      return (
        <span
          key={idx}
          className={`kw ${active ? 'hl' : ''}`}
          onMouseMove={(e) => moveTooltip(e, t.value)}
          onMouseLeave={clearTooltip}
        >
          {t.value}
        </span>
      )
    }
    if (t.type === 'comment') return <span key={idx} className="cm">{t.value}</span>
    if (t.type === 'string' || t.type === 'char') return <span key={idx} className="st">{t.value}</span>
    if (t.type === 'number') return <span key={idx} className="nu">{t.value}</span>
    if (t.type === 'identifier') return <span key={idx} className="id">{t.value}</span>
    return <span key={idx}>{t.value}</span>
  }

  return (
    <div className="code-block">
      <div className="code-header">
        <span className="code-lang">C#</span>
        <span className="code-hint">Pasa el cursor sobre una palabra clave</span>
      </div>
      <pre className="code-content">
        <code>{tokens.map(renderToken)}</code>
      </pre>

      {tip &&
        createPortal(
          <div className="code-tooltip" style={{ left: tip.x, top: tip.y }}>
            <span className="tooltip-term">{activeTerm}</span>
            {tip.text}
          </div>,
          document.body,
        )}

      {usedTerms.length > 0 && (
        <div className="code-dictionary">
          <div className="dict-header">
            <span className="dict-title">Diccionario del tema</span>
            <span className="dict-sub">{usedTerms.length} términos</span>
          </div>
          <div className="dict-list">
            {usedTerms.map((term) => (
              <div
                key={term}
                className={`dict-item ${activeTerm === term ? 'active' : ''}`}
                onMouseEnter={() => setActiveTerm(term)}
                onMouseLeave={() => setActiveTerm(null)}
              >
                <code className="dict-term">{term}</code>
                <div className="dict-body">
                  <span className="dict-cat">{GLOSSARY[term].category}</span>
                  <span className="dict-desc">{GLOSSARY[term].description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
