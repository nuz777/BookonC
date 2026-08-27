import { useEffect, useState } from 'react'
import { csharpData } from './data/csharpTopics'
import CodeBlock from './components/CodeBlock'
import './App.css'

const icons: Record<string, string> = {
  book: 'M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z',
  'git-branch': 'M6 3v12 M18 9a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3 M6 21a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3',
  cpu: 'M9 3v2 M15 3v2 M9 19v2 M15 19v2 M3 9h2 M3 15h2 M19 9h2 M19 15h2 M6 7h12v10H6z',
  box: 'M21 8l-9-5-9 5v8l9 5 9-5z M3 8l9 5 M12 13l9-5',
  layers: 'M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5',
  filter: 'M22 3H2l8 9.46V19l4 2v-8.54L22 3z',
  zap: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
  'alert-triangle': 'M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z M12 9v4 M12 17h.01',
  database: 'M12 2C6.48 2 2 4.48 2 7.5v9C2 19.52 6.48 22 12 22s10-2.48 10-5.5v-9C22 4.48 17.52 2 12 2z M2 7.5C2 4.48 6.48 2 12 2s10 2.48 10 5.5 M12 22v-9 M12 13C6.48 13 2 10.52 2 7.5',
  type: 'M4 7V4h16v3 M9 20h6 M12 4v16',
  settings: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z',
  'chevron-right': 'M9 18l6-6-6-6',
  hash: 'M4 9h16 M4 15h16 M10 3l-2 18 M16 3l-2 18',
  code: 'M16 18l6-6-6-6 M8 6l-6 6 6 6',
  'plus-square': 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M12 8v8 M8 12h8',
}

const Icon = ({ d, size = 18 }: { d: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
)

function App() {
  const [activeCategory, setActiveCategory] = useState(csharpData[0].id)
  const [activeTopic, setActiveTopic] = useState(csharpData[0].topics[0].id)
  const [search, setSearch] = useState('')
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showCloseConfirm, setShowCloseConfirm] = useState(false)

  useEffect(() => {
    const onFsChange = () => setIsFullscreen(Boolean(document.fullscreenElement))
    document.addEventListener('fullscreenchange', onFsChange)
    return () => document.removeEventListener('fullscreenchange', onFsChange)
  }, [])

  const toggleFullscreen = async () => {
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen()
      } else {
        await document.documentElement.requestFullscreen()
      }
    } catch {
      // El modo pantalla completa puede no estar disponible (iframes, permisos, etc.)
    }
  }

  const restoreWindow = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {})
    }
  }

  const confirmClose = () => {
    window.close()
  }

  const currentCategory = csharpData.find((c) => c.id === activeCategory) || csharpData[0]
  const currentTopic = currentCategory.topics.find((t) => t.id === activeTopic) || currentCategory.topics[0]

  const filteredCategories = search
    ? csharpData
        .map((cat) => ({
          ...cat,
          topics: cat.topics.filter(
            (t) =>
              t.title.toLowerCase().includes(search.toLowerCase()) ||
              t.content.toLowerCase().includes(search.toLowerCase()),
          ),
        }))
        .filter((cat) => cat.topics.length > 0)
    : csharpData

  const handleCategoryClick = (catId: string) => {
    setActiveCategory(catId)
    const cat = csharpData.find((c) => c.id === catId)
    if (cat && cat.topics.length > 0) {
      setActiveTopic(cat.topics[0].id)
    }
  }

  return (
    <div className="app">
      <div className="titlebar">
        <div className="titlebar-left">
          <button
            className="sidebar-toggle"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            title={sidebarOpen ? 'Ocultar panel' : 'Mostrar panel'}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              {sidebarOpen
                ? <path d="M3 6h18 M3 12h18 M3 18h18" />
                : <><path d="M3 6h18 M3 12h18 M3 18h18" /></>}
            </svg>
          </button>
          <div className="titlebar-icon">C#</div>
          <span className="titlebar-filename">BookonC - Referencia C#</span>
        </div>
        <div className="titlebar-actions">
          <button className="titlebar-btn" title="Restaurar" onClick={restoreWindow}>─</button>
          <button
            className={`titlebar-btn maximize ${isFullscreen ? 'active' : ''}`}
            title={isFullscreen ? 'Salir de pantalla completa' : 'Pantalla completa'}
            onClick={toggleFullscreen}
          >
            {isFullscreen ? '❐' : '☐'}
          </button>
          <button className="titlebar-btn close" title="Cerrar" onClick={() => setShowCloseConfirm(true)}>✕</button>
        </div>
      </div>

      {showCloseConfirm && (
        <div className="confirm-overlay" onClick={() => setShowCloseConfirm(false)}>
          <div className="confirm-modal" onClick={(e) => e.stopPropagation()}>
            <div className="confirm-title">
              <div className="confirm-titlebar-icon">C#</div>
              <span>Salir de BookonC</span>
            </div>
            <div className="confirm-body">
              <p>¿Estás seguro de que quieres cerrar esta pestaña?</p>
              <p className="confirm-hint">
                Nota: si el navegador no permite cerrarla por seguridad, usa la X del propio navegador.
              </p>
            </div>
            <div className="confirm-actions">
              <button className="confirm-btn" onClick={() => setShowCloseConfirm(false)}>Cancelar</button>
              <button className="confirm-btn danger" onClick={confirmClose}>Salir</button>
            </div>
          </div>
        </div>
      )}

      <div className="main-layout">
        <nav className={`sidebar ${!sidebarOpen ? 'hidden' : ''}`}>
          <div className="sidebar-search">
            <input
              type="text"
              placeholder="Buscar..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="sidebar-search-input"
            />
          </div>
          <div className="sidebar-topics">
            {filteredCategories.map((cat) => (
              <div key={cat.id} className="sidebar-category">
                <button
                  className={`sidebar-cat-btn ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => handleCategoryClick(cat.id)}
                >
                  <Icon d={icons[cat.icon] || icons.book} size={16} />
                  <span>{cat.label}</span>
                </button>
                {activeCategory === cat.id && (
                  <div className="sidebar-subtopics">
                    {cat.topics.map((topic) => (
                      <button
                        key={topic.id}
                        className={`sidebar-topic-btn ${activeTopic === topic.id ? 'active' : ''}`}
                        onClick={() => setActiveTopic(topic.id)}
                      >
                        {topic.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>

        <div className="content-area">
          <div className="topic-anim-wrap" key={currentTopic.id}>
            <div className="topic-header">
              <h1 className="topic-title">{currentTopic.title}</h1>
              <span className="topic-category-badge">{currentCategory.label}</span>
            </div>
            <div className="topic-content">
              <p className="topic-definition">{currentTopic.content}</p>
              {currentTopic.code && <CodeBlock code={currentTopic.code} />}
            </div>
          </div>
        </div>
      </div>

      <div className="statusbar">
        <div className="statusbar-left">
          <span className="statusbar-item">{currentCategory.label} → {currentTopic.title}</span>
        </div>
        <div className="statusbar-right">
          <span className="statusbar-item">{csharpData.reduce((acc, c) => acc + c.topics.length, 0)} temas</span>
          <span className="statusbar-item">{csharpData.length} categorías</span>
        </div>
      </div>
    </div>
  )
}

export default App
