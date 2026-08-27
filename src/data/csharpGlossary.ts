export interface GlossaryEntry {
  term: string
  description: string
  category: string
}

export const GLOSSARY: Record<string, GlossaryEntry> = {
  class: {
    term: 'class',
    description: 'Define un modelo o "plano" (blueprint) a partir del cual se crean objetos. Agrupa propiedades y métodos.',
    category: 'POO',
  },
  interface: {
    term: 'interface',
    description: 'Define un contrato que las clases deben implementar. Solo declara métodos y propiedades, sin implementación.',
    category: 'POO',
  },
  abstract: {
    term: 'abstract',
    description: 'Marca una clase que no se puede instanciar o un método sin implementación que las derivadas DEBEN implementar.',
    category: 'POO',
  },
  virtual: {
    term: 'virtual',
    description: 'Marca un método de la clase base que puede (y suele) ser sobrescrito en las clases derivadas. Es la base del polimorfismo.',
    category: 'POO',
  },
  override: {
    term: 'override',
    description: 'Sobrescribe la implementación de un método virtual o abstracto heredado. Junto a virtual permite el polimorfismo: un mismo nombre, distinto comportamiento según el tipo.',
    category: 'POO',
  },
  sealed: {
    term: 'sealed',
    description: 'Impide que una clase pueda heredarse (no puede tener clases hijas) o que un método se sobrescriba.',
    category: 'POO',
  },
  static: {
    term: 'static',
    description: 'Pertenece a la clase y no a las instancias. Se accede sin crear un objeto: Clase.Miembro.',
    category: 'Modificadores',
  },
  readonly: {
    term: 'readonly',
    description: 'Campo que solo puede asignarse en el momento de declararlo o dentro del constructor. No cambia después.',
    category: 'Modificadores',
  },
  const: {
    term: 'const',
    description: 'Declara una constante: un valor fijo que no puede modificarse y debe asignarse en su declaración.',
    category: 'Modificadores',
  },
  public: {
    term: 'public',
    description: 'Modificador de acceso: hace el miembro accesible desde cualquier parte del programa.',
    category: 'Acceso',
  },
  private: {
    term: 'private',
    description: 'Modificador de acceso: hace el miembro visible solo dentro de la propia clase (encapsulamiento).',
    category: 'Acceso',
  },
  protected: {
    term: 'protected',
    description: 'Modificador de acceso: accesible dentro de la clase y en sus clases derivadas.',
    category: 'Acceso',
  },
  internal: {
    term: 'internal',
    description: 'Modificador de acceso: accesible desde cualquier código dentro del mismo ensamblado.',
    category: 'Acceso',
  },
  new: {
    term: 'new',
    description: 'Crea una instancia de una clase y devuelve la referencia al objeto, llamando a su constructor.',
    category: 'POO',
  },
  this: {
    term: 'this',
    description: 'Hace referencia a la instancia actual de la clase. Se usa para distinguir campos de parámetros con el mismo nombre.',
    category: 'POO',
  },
  base: {
    term: 'base',
    description: 'Hace referencia a la clase base (padre). Se usa para llamar a su constructor o a sus métodos no sobrescritos.',
    category: 'POO',
  },
  enum: {
    term: 'enum',
    description: 'Define un conjunto de constantes nombradas (por ejemplo días de la semana, estados, colores).',
    category: 'Tipos',
  },
  struct: {
    term: 'struct',
    description: 'Define un tipo de valor (se copia al pasarlo, vive en la pila). Ideal para datos pequeños como puntos o colores.',
    category: 'Tipos',
  },
  delegate: {
    term: 'delegate',
    description: 'Define un tipo que referencia métodos con una firma compatible. Base de eventos y lambdas.',
    category: 'Tipos',
  },
  event: {
    term: 'event',
    description: 'Mecanismo de notificación entre objetos. Un publicador avisa a los suscriptores cuando ocurre algo.',
    category: 'Tipos',
  },
  dynamic: {
    term: 'dynamic',
    description: 'Tipo resuelto en tiempo de ejecución: puede guardar cualquier cosa y se validan sus miembros al ejecutar.',
    category: 'Tipos',
  },
  var: {
    term: 'var',
    description: 'Deja que el compilador infiera el tipo de la variable a partir del valor asignado.',
    category: 'Tipos',
  },
  void: {
    term: 'void',
    description: 'Indica que un método no devuelve ningún valor.',
    category: 'Métodos',
  },
  return: {
    term: 'return',
    description: 'Devuelve un valor desde un método y termina su ejecución.',
    category: 'Métodos',
  },
  params: {
    term: 'params',
    description: 'Permite pasar un número variable de argumentos a un método, como un array.',
    category: 'Métodos',
  },
  ref: {
    term: 'ref',
    description: 'Pasa el argumento por referencia: el método puede modificar la variable original.',
    category: 'Métodos',
  },
  out: {
    term: 'out',
    description: 'Parámetro de salida: el método DEBE asignarle un valor antes de terminar.',
    category: 'Métodos',
  },
  'in': {
    term: 'in',
    description: 'Pasa el argumento por referencia pero de solo lectura: el método no puede modificarlo.',
    category: 'Métodos',
  },
  if: {
    term: 'if',
    description: 'Evalúa una condición booleana y ejecuta un bloque de código si es verdadera.',
    category: 'Control',
  },
  else: {
    term: 'else',
    description: 'Complementa a if: ejecuta otro bloque cuando la condición anterior es falsa.',
    category: 'Control',
  },
  switch: {
    term: 'switch',
    description: 'Compara una expresión contra múltiples casos (case) y ejecuta el que coincida.',
    category: 'Control',
  },
  case: {
    term: 'case',
    description: 'Representa cada posible valor que se compara dentro de un switch.',
    category: 'Control',
  },
  default: {
    term: 'default',
    description: 'En switch ejecuta el bloque cuando ningún caso coincide; también es el valor por defecto de un tipo.',
    category: 'Control',
  },
  for: {
    term: 'for',
    description: 'Bucle que repite código un número conocido de iteraciones (inicialización, condición, paso).',
    category: 'Control',
  },
  while: {
    term: 'while',
    description: 'Bucle que repite el bloque mientras la condición sea verdadera, evaluándola antes de cada vuelta.',
    category: 'Control',
  },
  do: {
    term: 'do',
    description: 'Inicia un bucle do-while que ejecuta el bloque al menos una vez y luego verifica la condición.',
    category: 'Control',
  },
  foreach: {
    term: 'foreach',
    description: 'Recorre cada elemento de una colección o array sin necesidad de índice.',
    category: 'Control',
  },
  break: {
    term: 'break',
    description: 'Sale inmediatamente de un bucle o de un switch.',
    category: 'Control',
  },
  continue: {
    term: 'continue',
    description: 'Salta a la siguiente iteración del bucle, omitiendo el resto del bloque.',
    category: 'Control',
  },
  try: {
    term: 'try',
    description: 'Agrupa código que puede lanzar una excepción, para manejarla con catch.',
    category: 'Excepciones',
  },
  catch: {
    term: 'catch',
    description: 'Captura la(s) excepción(es) lanzada(s) dentro de un try y la maneja.',
    category: 'Excepciones',
  },
  finally: {
    term: 'finally',
    description: 'Bloque que se ejecuta SIEMPRE (haya error o no), típicamente para limpiar recursos.',
    category: 'Excepciones',
  },
  throw: {
    term: 'throw',
    description: 'Lanza una excepción para señalar que ocurrió un error.',
    category: 'Excepciones',
  },
  when: {
    term: 'when',
    description: 'Filtra la excepción capturada en un catch: solo entra si se cumple la condición.',
    category: 'Excepciones',
  },
  async: {
    term: 'async',
    description: 'Marca un método como asíncrono; permite usar await y no bloquea el hilo principal.',
    category: 'Async',
  },
  await: {
    term: 'await',
    description: 'Pausa la ejecución del método asíncrono hasta que la tarea termine, sin bloquear el hilo.',
    category: 'Async',
  },
  get: {
    term: 'get',
    description: 'Accesor de lectura de una propiedad: devuelve el valor cuando se lee.',
    category: 'Propiedades',
  },
  set: {
    term: 'set',
    description: 'Accesor de escritura de una propiedad: asigna un valor cuando se escribe.',
    category: 'Propiedades',
  },
  init: {
    term: 'init',
    description: 'Accesor de escritura de una propiedad que SOLO se puede asignar al construir el objeto.',
    category: 'Propiedades',
  },
  using: {
    term: 'using',
    description: 'Importa un espacio de nombres o gestiona automáticamente el ciclo de vida de un recurso (Dispose).',
    category: 'Otros',
  },
  namespace: {
    term: 'namespace',
    description: 'Agrupa tipos relacionados para organizar el código y evitar conflictos de nombres.',
    category: 'Otros',
  },
  where: {
    term: 'where',
    description: 'Agrega restricciones a los parámetros genéricos (que implementen una interfaz, sean de referencia, etc.).',
    category: 'Genéricos',
  },
  is: {
    term: 'is',
    description: 'Verifica si un objeto es de cierto tipo y, en pattern matching, extrae el valor al mismo tiempo.',
    category: 'Patrones',
  },
  as: {
    term: 'as',
    description: 'Conversión de tipo segura: devuelve null si la conversión no es posible en lugar de lanzar error.',
    category: 'Patrones',
  },
  null: {
    term: 'null',
    description: 'Representa la ausencia de valor. Aplicable a tipos de referencia y a tipos nullable.',
    category: 'Patrones',
  },
  true: {
    term: 'true',
    description: 'Valor booleano de verdadero.',
    category: 'Otros',
  },
  false: {
    term: 'false',
    description: 'Valor booleano de falso.',
    category: 'Otros',
  },
  operator: {
    term: 'operator',
    description: 'Permite sobrecargar operadores (+, -, *, ...) para tipos definidos por el usuario.',
    category: 'Otros',
  },
  partial: {
    term: 'partial',
    description: 'Divide una clase, struct o método en varias partes, cada una en un archivo.',
    category: 'Otros',
  },
  object: {
    term: 'object',
    description: 'Tipo raíz del que derivan todos los demás tipos en C# (System.Object).',
    category: 'Tipos',
  },
}

export const GLOSSARY_ENTRIES: GlossaryEntry[] = Object.values(GLOSSARY)

export const KEYWORDS = new Set<string>(Object.keys(GLOSSARY))
