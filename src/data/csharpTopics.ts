export interface CSharpTopic {
  id: string
  title: string
  content: string
  code?: string
}

export interface CSharpCategory {
  id: string
  label: string
  icon: string
  topics: CSharpTopic[]
}

export const csharpData: CSharpCategory[] = [
  {
    id: 'fundamentos',
    label: 'Fundamentos',
    icon: 'book',
    topics: [
      {
        id: 'variables',
        title: 'Variables y Tipos de Datos',
        content:
          'Una variable es un contenedor que almacena un valor en memoria. En C#, las variables deben declararse con un tipo de dato antes de usarse. Los tipos principales se dividen en tipos de valor (value types) y tipos de referencia (reference types).',
        code: `// Tipos de datos numéricos
int edad = 25;
double salario = 3500.50;
float pi = 3.14f;
decimal precio = 99.99m;
byte capacidad = 255;

// Tipos de texto
string nombre = "Carlos";
char letra = 'A';

// Tipos lógicos
bool activo = true;

// Tipo dinámico
dynamic dato = "puede cambiar";

// Inferencia de tipos
var automatico = 10; // int por inferencia`,
      },
      {
        id: 'constantes',
        title: 'Constantes',
        content:
          'Las constantes son valores que no pueden ser modificados después de su declaración. Se definen con la palabra clave "const" y deben asignarse en el momento de la declaración. Son útiles para valores fijos como.PI matemáticos o configuraciones.',
        code: `const double PI = 3.14159265;
const string EMPRESA = "TechCorp";
const int MAX_USUARIOS = 100;

// PI = 3.14; // Error: no se puede modificar una constante`,
      },
      {
        id: 'operadores',
        title: 'Operadores',
        content:
          'Los operadores son símbolos que realizan operaciones sobre operandos. C# incluye operadores aritméticos, de comparación, lógicos, de asignación y más.',
        code: `// Aritméticos
int suma = 10 + 5;      // 15
int resta = 10 - 5;     // 5
int mul = 10 * 5;       // 50
int div = 10 / 3;       // 3 (entero)
double divReal = 10.0 / 3; // 3.333...
int mod = 10 % 3;       // 1

// Comparación
bool igual = (5 == 5);   // true
bool mayor = (5 > 3);    // true
bool menor = (5 < 3);    // false

// Lógicos
bool y = true && false;  // false
bool o = true || false;  // true
bool no = !true;         // false

// Asignación
int x = 10;
x += 5;   // x = x + 5
x -= 3;   // x = x - 3
x *= 2;   // x = x * 2`,
      },
      {
        id: 'conversion',
        title: 'Conversión de Tipos',
        content:
          'La conversión de tipos permite transformar un valor de un tipo a otro. Puede ser implícita (automática, sin pérdida de datos) o explícita (requiere casting manual). Convert.ToString y.Parse son métodos comunes.',
        code: `// Conversión implícita (no requiere cast)
int entero = 42;
double decimal = entero; // int → double (seguro)

// Conversión explícita (requiere cast)
double valor = 3.99;
int resultado = (int)valor; // 3 (trunca decimales)

// Métodos de conversión
string texto = "123";
int num = int.Parse(texto);
int num2 = Convert.ToInt32(texto);
string deNumero = 42.ToString();

// TryParse (seguro, no lanza excepción)
if (int.TryParse("abc", out int val))
{
    Console.WriteLine(val);
}
else
{
    Console.WriteLine("No es un número válido");
}`,
      },
    ],
  },
  {
    id: 'control',
    label: 'Control de Flujo',
    icon: 'git-branch',
    topics: [
      {
        id: 'condicionales',
        title: 'Condicionales',
        content:
          'Las estructuras condicionales permiten ejecutar código diferente según una condición. if/else evalúa una expresión booleana, switch compara un valor contra múltiples casos, y el operador ternario ofrece una forma concisa.',
        code: `// if / else if / else
int hora = 14;

if (hora < 12)
    Console.WriteLine("Buenos días");
else if (hora < 18)
    Console.WriteLine("Buenas tardes");
else
    Console.WriteLine("Buenas noches");

// switch
string dia = "Lunes";
switch (dia)
{
    case "Lunes":
    case "Martes":
    case "Miércoles":
    case "Jueves":
    case "Viernes":
        Console.WriteLine("Día laboral");
        break;
    case "Sábado":
    case "Domingo":
        Console.WriteLine("Fin de semana");
        break;
    default:
        Console.WriteLine("Día no válido");
        break;
}

// Switch expression (C# 8+)
string tipo = dia switch
{
    "Sábado" or "Domingo" => "Fin de semana",
    _ => "Día laboral"
};

// Operador ternario
string mensaje = hora < 12 ? "Mañana" : "Tarde";`,
      },
      {
        id: 'bucles',
        title: 'Bucles',
        content:
          'Los bucles permiten repetir código múltiples veces. for se usa cuando se conoce el número de iteraciones, while evalúa la condición antes de cada ciclo, do-while ejecuta al menos una vez, y foreach recorre colecciones.',
        code: `// for
for (int i = 0; i < 5; i++)
{
    Console.WriteLine($"Iteración {i}");
}

// while
int contador = 0;
while (contador < 5)
{
    Console.WriteLine($"Contador: {contador}");
    contador++;
}

// do-while (se ejecuta al menos una vez)
int num = 10;
do
{
    Console.WriteLine($"Número: {num}");
    num--;
} while (num > 0);

// foreach
string[] frutas = { "Manzana", "Pera", "Naranja" };
foreach (string fruta in frutas)
{
    Console.WriteLine(fruta);
}

// break y continue
for (int i = 0; i < 10; i++)
{
    if (i == 3) continue; // salta el 3
    if (i == 7) break;    // termina en 7
    Console.WriteLine(i);
}`,
      },
    ],
  },
  {
    id: 'metodos',
    label: 'Métodos',
    icon: 'cpu',
    topics: [
      {
        id: 'metodos-declaracion',
        title: 'Declaración de Métodos',
        content:
          'Un método es un bloque de código reutilizable que realiza una tarea específica. Se define con un modificador de acceso, tipo de retorno, nombre y parámetros opcionales. Los métodos promueven la reutilización y modularidad.',
        code: `// Método simple (sin retorno)
void Saludar(string nombre)
{
    Console.WriteLine($"Hola, {nombre}!");
}

// Método con retorno
int Sumar(int a, int b)
{
    return a + b;
}

// Expresión-bodied (una línea)
int Multiplicar(int a, int b) => a * b;

// Métodos con valores por defecto
void Configurar(string host, int puerto = 80, bool ssl = false)
{
    Console.WriteLine($"{host}:{puerto} SSL={ssl}");
}

// Uso
Saludar("Ana");
int resultado = Sumar(3, 5);
Configurar("localhost");             // puerto=80, ssl=false
Configurar("localhost", 443, true);  // puerto=443, ssl=true`,
      },
      {
        id: 'parametros',
        title: 'Parámetros y Argumentos',
        content:
          'C# soporta varios tipos de parámetros: por valor (default), por ref (referencia), out (salida), in (solo lectura), y params (array variable). Estos controlan cómo se pasan los datos a los métodos.',
        code: `// Por valor (copia)
void Incrementar(int x) { x++; }

// Por ref (referencia)
void IncrementarRef(ref int x) { x++; }

// Out (salida, debe asignarse dentro)
void Dividir(int a, int b, out int cociente, out int residuo)
{
    cociente = a / b;
    residuo = a % b;
}

// Params (array variable)
int Sumar(params int[] numeros)
{
    int total = 0;
    foreach (int n in numeros) total += n;
    return total;
}

// Uso
int val = 5;
Incrementar(val);      // val sigue siendo 5
IncrementarRef(ref val); // val ahora es 6

Dividir(10, 3, out int c, out int r);
// c = 3, r = 1

int suma = Sumar(1, 2, 3, 4, 5); // 15`,
      },
      {
        id: 'sobrecarga',
        title: 'Sobrecarga de Métodos',
        content:
          'La sobrecarga permite definir múltiples métodos con el mismo nombre pero diferentes parámetros (cantidad, tipo u orden). El compilador determina cuál usar según los argumentos proporcionados.',
        code: `// Sobrecarga por cantidad de parámetros
int Sumar(int a, int b) => a + b;
int Sumar(int a, int b, int c) => a + b + c;

// Sobrecarga por tipo de parámetros
void Mostrar(int valor) => Console.WriteLine($"Entero: {valor}");
void Mostrar(double valor) => Console.WriteLine($"Decimal: {valor}");
void Mostrar(string valor) => Console.WriteLine($"Texto: {valor}");

// Uso
Sumar(1, 2);       // llama a la versión de 2 parámetros
Sumar(1, 2, 3);    // llama a la versión de 3 parámetros
Mostrar(42);       // Entero: 42
Mostrar(3.14);     // Decimal: 3.14
Mostrar("Hola");   // Texto: Hola`,
      },
    ],
  },
  {
    id: 'poo',
    label: 'POO',
    icon: 'box',
    topics: [
      {
        id: 'clases',
        title: 'Clases y Objetos',
        content:
          'Una clase es un plano (blueprint) que define propiedades y comportamientos. Un objeto es una instancia de una clase. Las clases encapsulan datos (campos/propiedades) y métodos que operan sobre esos datos.',
        code: `public class Persona
{
    // Campos
    private string nombre;

    // Propiedades
    public string Nombre
    {
        get => nombre;
        set => nombre = value ?? "Sin nombre";
    }

    public int Edad { get; set; }
    public string Email { get; set; }

    // Propiedad de solo lectura
    public string Info => $"{Nombre}, {Edad} años";

    // Constructor
    public Persona(string nombre, int edad)
    {
        Nombre = nombre;
        Edad = edad;
    }

    // Método
    public void Presentarse()
    {
        Console.WriteLine($"Hola, soy {Nombre} y tengo {Edad} años");
    }
}

// Uso
Persona persona = new Persona("Carlos", 30);
persona.Presentarse();
Console.WriteLine(persona.Info);`,
      },
      {
        id: 'constructores',
        title: 'Constructores',
        content:
          'Un constructor es un método especial que se ejecuta al crear un objeto. Puede tener parámetros y se usa para inicializar el estado del objeto. C# permite constructores estáticos, de copia y encadenados.',
        code: `public class Producto
{
    public string Nombre { get; set; }
    public decimal Precio { get; set; }
    public DateTime FechaCreacion { get; }

    // Constructor principal
    public Producto(string nombre, decimal precio)
    {
        Nombre = nombre;
        Precio = precio;
        FechaCreacion = DateTime.Now;
    }

    // Constructor encadenado (llama a otro constructor)
    public Producto(string nombre) : this(nombre, 0m) { }

    // Constructor estático (se ejecuta una sola vez)
    static Producto()
    {
        Console.WriteLine("Clase Producto cargada");
    }
}

// Uso
Producto p1 = new Producto("Laptop", 999.99m);
Producto p2 = new Producto("Mouse");`,
      },
      {
        id: 'herencia',
        title: 'Herencia',
        content:
          'La herencia permite crear una clase hija que reutiliza el código de una clase padre. Usa la palabra clave ":" para heredar. La clase hija hereda propiedades, métodos y puede agregar nuevos o sobrescribir los existentes con "override".',
        code: `// Clase base
public class Animal
{
    public string Nombre { get; set; }
    public int Edad { get; set; }

    public Animal(string nombre, int edad)
    {
        Nombre = nombre;
        Edad = edad;
    }

    public virtual void HacerSonido()
    {
        Console.WriteLine($"{Nombre} hace un sonido");
    }
}

// Clase derivada
public class Perro : Animal
{
    public string Raza { get; set; }

    public Perro(string nombre, int edad, string raza)
        : base(nombre, edad)  // llama al constructor padre
    {
        Raza = raza;
    }

    public override void HacerSonido()
    {
        Console.WriteLine($"{Nombre} dice: Guau!");
    }

    public void Buscar()
    {
        Console.WriteLine($"{Nombre} está buscando...");
    }
}

// Uso
Animal animal = new Perro("Rex", 5, "Labrador");
animal.HacerSonido(); // "Rex dice: Guau!" (polimorfismo)`,
      },
      {
        id: 'polimorfismo',
        title: 'Polimorfismo',
        content:
          'El polimorfismo permite que un mismo método se comporte de forma diferente según el tipo de objeto que lo invoque. Se logra con "virtual" en la clase base y "override" en las derivadas. También existe el polimorfismo de sobrecarga.',
        code: `public class Forma
{
    public virtual string Dibujar() => "Dibujando forma genérica";
}

public class Circulo : Forma
{
    public double Radio { get; set; }
    public override string Dibujar() => $"Dibujando círculo (r={Radio})";
}

public class Rectangulo : Forma
{
    public double Ancho { get; set; }
    public double Alto { get; set; }
    public override string Dibujar() =>
        $"Dibujando rectángulo ({Ancho}x{Alto})";
}

// Polimorfismo en acción
Forma[] formas = {
    new Circulo { Radio = 5 },
    new Rectangulo { Ancho = 10, Alto = 4 },
    new Forma()
};

foreach (Forma forma in formas)
{
    Console.WriteLine(forma.Dibujar());
}
// Dibujando círculo (r=5)
// Dibujando rectángulo (10x4)
// Dibujando forma genérica`,
      },
      {
        id: 'interfaces',
        title: 'Interfaces',
        content:
          'Una interfaz define un contrato que las clases deben implementar. Contiene declaraciones de métodos, propiedades o eventos sin implementación. Una clase puede implementar múltiples interfaces pero solo heredar de una clase.',
        code: `// Definición de interfaces
public interface IDibujable
{
    void Dibujar();
    string Tipo { get; }
}

public interface IAnimable
{
    void Animar();
}

// Implementación múltiple
public class Circulo : IDibujable, IAnimable
{
    public string Tipo => "Círculo";

    public void Dibujar()
    {
        Console.WriteLine("Dibujando círculo");
    }

    public void Animar()
    {
        Console.WriteLine("Animando círculo");
    }
}

// Uso con tipo de interfaz
IDibujable forma = new Circulo();
forma.Dibujar();

// Verificación de interfaz
if (forma is IAnimable animable)
{
    animable.Animar();
}`,
      },
      {
        id: 'abstractas',
        title: 'Clases Abstractas',
        content:
          'Una clase abstracta no puede instanciarse directamente y sirve como base para otras clases. Puede contener métodos abstractos (sin implementación) que las clases derivadas DEBEN implementar, además de métodos concretos normales.',
        code: `public abstract class Animal
{
    public string Nombre { get; set; }

    // Constructor (sí se puede tener)
    protected Animal(string nombre)
    {
        Nombre = nombre;
    }

    // Método abstracto (sin implementación)
    public abstract void HacerSonido();

    // Método concreto (con implementación)
    public void Comer()
    {
        Console.WriteLine($"{Nombre} está comiendo");
    }
}

public class Gato : Animal
{
    public Gato(string nombre) : base(nombre) { }

    public override void HacerSonido()
    {
        Console.WriteLine($"{Nombre} dice: Miau!");
    }
}

// Animal a = new Animal("X"); // Error: no se puede instanciar
Gato gato = new Gato("Michi");
gato.HacerSonido(); // Michi dice: Miau!
gato.Comer();       // Michi está comiendo`,
      },
      {
        id: 'encapsulamiento',
        title: 'Encapsulamiento',
        content:
          'El encapsulamiento oculta los detalles internos de una clase y expone solo lo necesario. Se controla con modificadores de acceso: public, private, protected, internal y protected internal.',
        code: `public class CuentaBancaria
{
    // private: solo accesible dentro de la clase
    private decimal saldo;

    // protected: accesible en clases derivadas
    protected string moneda = "EUR";

    // internal: accesible dentro del mismo ensamblado
    internal string titular;

    // public: accesible desde cualquier lugar
    public decimal Saldo => saldo;

    public CuentaBancaria(string titular, decimal saldoInicial)
    {
        this.titular = titular;
        saldo = saldoInicial;
    }

    // Método público que controla el acceso
    public bool Retirar(decimal cantidad)
    {
        if (cantidad > 0 && cantidad <= saldo)
        {
            saldo -= cantidad;
            return true;
        }
        return false;
    }
}

// Uso
CuentaBancaria cuenta = new CuentaBancaria("Ana", 1000);
cuenta.Retirar(200);       // OK
// cuenta.saldo = 999999;  // Error: saldo es private
Console.WriteLine(cuenta.Saldo); // 800`,
      },
    ],
  },
  {
    id: 'tipos-avanzados',
    label: 'Tipos Avanzados',
    icon: 'layers',
    topics: [
      {
        id: 'enums',
        title: 'Enums',
        content:
          'Un enum (enumeración) define un conjunto de constantes nombradas. Útil para representar un grupo fijo de opciones como días de la semana, estados, colores, etc.',
        code: `// Enum básico
public enum DiaSemana
{
    Lunes,    // 0
    Martes,   // 1
    Miércoles,// 2
    Jueves,   // 3
    Viernes,  // 4
    Sábado,   // 5
    Domingo   // 6
}

// Enum con valores personalizados
public enum Estado
{
    Pendiente = 1,
    EnProgreso = 2,
    Completado = 3,
    Cancelado = 4
}

// Uso
DiaSemana hoy = DiaSemana.Martes;
Console.WriteLine((int)hoy); // 1

Estado estado = Estado.EnProgreso;
if (estado == Estado.EnProgreso)
    Console.WriteLine("En progreso");

// Obtener todos los valores
foreach (Estado e in Enum.GetValues<Estado>())
{
    Console.WriteLine($"{e} = {(int)e}");
}`,
      },
      {
        id: 'structs',
        title: 'Structs',
        content:
          'Un struct es un tipo de valor que se usa para datos pequeños e inmutables. A diferencia de las clases (tipos de referencia), los structs se copian por valor y se asignan en la pila (stack). Ideal para puntos, colores, fechas simples.',
        code: `public struct Punto
{
    public double X { get; }
    public double Y { get; }

    public Punto(double x, double y)
    {
        X = x;
        Y = y;
    }

    public double DistanciaHasta(Punto otro)
    {
        double dx = X - otro.X;
        double dy = Y - otro.Y;
        return Math.Sqrt(dx * dx + dy * dy);
    }

    public override string ToString() => $"({X}, {Y})";
}

// Uso
Punto a = new Punto(0, 0);
Punto b = new Punto(3, 4);

// Se copia por valor
Punto c = a;
c.X = 10; // a.X sigue siendo 0

Console.WriteLine(a.DistanciaHasta(b)); // 5
Console.WriteLine(a); // (0, 0)`,
      },
      {
        id: 'delegados',
        title: 'Delegados',
        content:
          'Un delegado es un tipo que referencia métodos con una firma compatible. Es la base de los eventos y expresiones lambda. Action<T> y Func<T> son delegados genéricos predefinidos.',
        code: `// Delegado personalizado
public delegate int Operacion(int a, int b);

// Métodos compatibles
int Sumar(int a, int b) => a + b;
int Restar(int a, int b) => a - b;

// Uso
Operacion op = Sumar;
Console.WriteLine(op(10, 5)); // 15

op = Restar;
Console.WriteLine(op(10, 5)); // 5

// Delegados genéricos predefinidos
Action<string> imprimir = msg => Console.WriteLine(msg);
imprimir("Hola con Action");

Func<int, int, int> multiplicar = (a, b) => a * b;
Console.WriteLine(multiplicar(3, 4)); // 12

Predicate<int> esPar = n => n % 2 == 0;
Console.WriteLine(esPar(4)); // true`,
      },
      {
        id: 'eventos',
        title: 'Eventos',
        content:
          'Los eventos son mecanismos de comunicación entre objetos. Un objeto (publicador) notifica a otros (suscriptores) cuando algo ocurre. Se basan en delegados y usan las palabras clave "event", "add" y "remove".',
        code: `public class Monitor
{
    // Delegado del evento
    public delegate void AlertaHandler(string mensaje);

    // Evento basado en el delegado
    public event AlertaHandler OnAlerta;

    // Método que dispara el evento
    public void DetectarAlerta(string tipo)
    {
        Console.WriteLine($"Detectado: {tipo}");
        OnAlerta?.Invoke($"Alerta de {tipo}");
    }
}

// Suscripción al evento
Monitor monitor = new Monitor();
monitor.OnAlerta += mensaje => Console.WriteLine($"Suscriptor 1: {mensaje}");
monitor.OnAlerta += mensaje => Console.WriteLine($"Suscriptor 2: {mensaje}");

monitor.DetectarAlerta("fuego");
// Detectado: fire
// Suscriptor 1: Alerta de fire
// Suscriptor 2: Alerta de fire`,
      },
      {
        id: 'genericos',
        title: 'Genéricos',
        content:
          'Los genéricos permiten crear clases, métodos y tipos que funcionan con cualquier tipo de dato sin perder type-safety. Se definen con <T> y se resuelven en tiempo de compilación.',
        code: `// Clase genérica
public class Contenedor<T>
{
    private T item;

    public Contenedor(T item)
    {
        this.item = item;
    }

    public T Obtener() => item;
    public void Establecer(T nuevo) => item = nuevo;
}

// Método genérictico
public T ObtenerMayor<T>(T a, T b) where T : IComparable<T>
{
    return a.CompareTo(b) > 0 ? a : b;
}

// Uso
Contenedor<int> contenedorInt = new Contenedor<int>(42);
Contenedor<string> contenedorStr = new Contenedor<string>("Hola");

Console.WriteLine(contenedorInt.Obtener()); // 42
Console.WriteLine(contenedorStr.Obtener()); // Hola

int mayor = ObtenerMayor(10, 20); // 20
string mayorStr = ObtenerMayor("abc", "xyz"); // xyz

// Restricciones where
public class Lista<T> where T : class, IComparable<T>
{
    // T debe ser tipo de referencia e implementar IComparable
}`,
      },
    ],
  },
  {
    id: 'linq',
    label: 'LINQ',
    icon: 'filter',
    topics: [
      {
        id: 'linq-consulta',
        title: 'Consultas LINQ',
        content:
          'LINQ (Language Integrated Query) permite consultar datos de forma declarativa. Puede usarse con sintaxis de consulta (como SQL) o con métodos de extensión (fluent API). Funciona con cualquier colección IEnumerable.',
        code: `// Datos de ejemplo
List<int> numeros = new List<int> { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

// Sintaxis de consulta (query syntax)
var paresQuery =
    from n in numeros
    where n % 2 == 0
    orderby n descending
    select n;

// Sintaxis de métodos (method syntax)
var paresMethod = numeros
    .Where(n => n % 2 == 0)
    .OrderByDescending(n => n);

// Resultado ambos: {10, 8, 6, 4, 2}

// Select y transformación
var cuadrados = numeros.Select(n => n * n);
// {1, 4, 9, 16, 25, 36, 49, 64, 81, 100}

// First, Last, Single
int primero = numeros.First();          // 1
int ultimo = numeros.Last();            // 10
int primeroMayor5 = numeros.First(n => n > 5); // 6

// Any, All, Count
bool hayPares = numeros.Any(n => n % 2 == 0); // true
bool todosPositivos = numeros.All(n => n > 0); // true
int cantidad = numeros.Count(); // 10`,
      },
      {
        id: 'linq-objetos',
        title: 'LINQ con Objetos',
        content:
          'LINQ es especialmente potente para trabajar con colecciones de objetos. Permite filtrar, ordenar, agrupar y transformar datos de colecciones complejas de forma elegante.',
        code: `public class Producto
{
    public string Nombre { get; set; }
    public string Categoria { get; set; }
    public decimal Precio { get; set; }
}

var productos = new List<Producto>
{
    new() { Nombre = "Laptop", Categoria = "Electrónica", Precio = 999 },
    new() { Nombre = "Mouse", Categoria = "Electrónica", Precio = 25 },
    new() { Nombre = "Silla", Categoria = "Muebles", Precio = 150 },
    new() { Nombre = "Teclado", Categoria = "Electrónica", Precio = 75 },
};

// Filtrar y ordenar
var electronicos = productos
    .Where(p => p.Categoria == "Electrónica")
    .OrderBy(p => p.Precio)
    .Select(p => new { p.Nombre, p.Precio });

foreach (var p in electronicos)
    Console.WriteLine($"{p.Nombre}: {p.Precio}€");
// Mouse: 25€
// Teclado: 75€
// Laptop: 999€

// Agrupar
var porCategoria = productos
    .GroupBy(p => p.Categoria)
    .Select(g => new
    {
        Categoria = g.Key,
        Total = g.Count(),
        PrecioMedio = g.Average(p => p.Precio)
    });`,
      },
    ],
  },
  {
    id: 'async',
    label: 'Async/Await',
    icon: 'zap',
    topics: [
      {
        id: 'tareas',
        title: 'Tareas Asíncronas',
        content:
          'C# soporta programación asíncrona con async/await. Permite ejecutar operaciones de larga duración (red, disco, etc.) sin bloquear el hilo principal. Task representa una operación asíncrona.',
        code: `// Método asíncrono
public async Task<string> DescargarDatosAsync(string url)
{
    using HttpClient client = new HttpClient();
    // await pausa el método sin bloquear el hilo
    string contenido = await client.GetStringAsync(url);
    return contenido;
}

// Múltiples tareas en paralelo
public async Task ProcesarMultiplesAsync()
{
    Task<int> tarea1 = CalcularAsync(1);
    Task<int> tarea2 = CalcularAsync(2);
    Task<int> tarea3 = CalcularAsync(3);

    // Espera todas las tareas
    int[] resultados = await Task.WhenAll(tarea1, tarea2, tarea3);

    foreach (int r in resultados)
        Console.WriteLine(r);
}

async Task<int> CalcularAsync(int id)
{
    await Task.Delay(1000); // simula trabajo
    return id * 10;
}

// Manejo de excepciones
try
{
    string datos = await DescargarDatosAsync("https://api.ejemplo.com");
}
catch (HttpRequestException ex)
{
    Console.WriteLine($"Error de red: {ex.Message}");
}
catch (TaskCanceledException)
{
    Console.WriteLine("La operación fue cancelada");
}`,
      },
    ],
  },
  {
    id: 'excepciones',
    label: 'Excepciones',
    icon: 'alert-triangle',
    topics: [
      {
        id: 'try-catch',
        title: 'Try/Catch/Finally',
        content:
          'Las excepciones manejan errores en tiempo de ejecución. try contiene el código que puede fallar, catch maneja el error, finally se ejecuta siempre (limpieza), y throw lanza una excepción.',
        code: `// Estructura básica
try
{
    int[] numeros = { 1, 2, 3 };
    Console.WriteLine(numeros[10]); // IndexOutOfRangeException
}
catch (IndexOutOfRangeException ex)
{
    Console.WriteLine($"Índice fuera de rango: {ex.Message}");
}
catch (Exception ex)
{
    // Exception general (captura cualquier error)
    Console.WriteLine($"Error: {ex.Message}");
}
finally
{
    // Se ejecuta siempre, haya error o no
    Console.WriteLine("Limpieza completada");
}

// Excepciones específicas con when
try
{
    int resultado = 10 / int.Parse("0");
}
catch (DivideByZeroException ex) when (ex.Message.Contains("zero"))
{
    Console.WriteLine("División por cero controlada");
}

// throw y throw ex
void ValidarEdad(int edad)
{
    if (edad < 0)
        throw new ArgumentException("La edad no puede ser negativa", nameof(edad));
    if (edad > 150)
        throw new ArgumentOutOfRangeException(nameof(edad));
}`,
      },
      {
        id: 'excepciones-custom',
        title: 'Excepciones Personalizadas',
        content:
          'Puedes crear tus propias excepciones para representar errores específicos de tu dominio. Deben heredar de Exception e incluir constructores estándar.',
        code: `// Excepción personalizada
public class SaldoInsuficienteException : Exception
{
    public decimal SaldoActual { get; }
    public decimal CantidadSolicitada { get; }

    public SaldoInsuficienteException(decimal saldo, decimal cantidad)
        : base($"Saldo insuficiente: tiene {saldo}€ y solicitó {cantidad}€")
    {
        SaldoActual = saldo;
        CantidadSolicitada = cantidad;
    }
}

// Uso
void Retirar(decimal saldo, decimal cantidad)
{
    if (cantidad > saldo)
        throw new SaldoInsuficienteException(saldo, cantidad);

    Console.WriteLine($"Retiro exitoso: {cantidad}€");
}

// Manejo
try
{
    Retirar(100m, 500m);
}
catch (SaldoInsuficienteException ex)
{
    Console.WriteLine(ex.Message);
    Console.WriteLine($"Faltan {ex.CantidadSolicitada - ex.SaldoActual}€");
}`,
      },
    ],
  },
  {
    id: 'colecciones',
    label: 'Colecciones',
    icon: 'database',
    topics: [
      {
        id: 'arrays',
        title: 'Arrays',
        content:
          'Un array es una colección de tamaño fijo que almacena elementos del mismo tipo. Se indexa desde 0. Pueden ser unidimensionales, multidimensionales o de arreglos.',
        code: `// Array unidimensional
int[] numeros = new int[5]; // 5 elementos, default 0
int[] init = { 1, 2, 3, 4, 5 };
string[] nombres = new string[] { "Ana", "Bob", "Carlos" };

// Acceso y modificación
Console.WriteLine(init[0]);   // 1
init[2] = 10;                // {1, 2, 10, 4, 5}
Console.WriteLine(init.Length); // 5

// Array multidimensional
int[,] matriz = new int[3, 3]
{
    { 1, 2, 3 },
    { 4, 5, 6 },
    { 7, 8, 9 }
};
Console.WriteLine(matriz[1, 2]); // 6

// Array de arrays (jagged)
int[][] jagged = new int[3][];
jagged[0] = new int[] { 1, 2 };
jagged[1] = new int[] { 3, 4, 5 };
jagged[2] = new int[] { 6 };

// Métodos útiles
Array.Sort(nombres);
Array.Reverse(nombres);
int idx = Array.IndexOf(nombres, "Bob");
Array.Clear(nombres);`,
      },
      {
        id: 'list',
        title: 'List<T>',
        content:
          'List<T> es una colección genérica de tamaño dinámico (array que crece). Es la colección más usada en C#. Soporta agregar, eliminar, buscar, ordenar y más.',
        code: `// Crear lista
List<string> frutas = new List<string>();
List<int> numeros = new List<int> { 1, 2, 3, 4, 5 };

// Agregar
frutas.Add("Manzana");
frutas.Add("Pera");
frutas.AddRange(new[] { "Naranja", "Uva" });
frutas.Insert(0, "Plátano"); // en posición 0

// Eliminar
frutas.Remove("Pera");
frutas.RemoveAt(0);          // por índice
frutas.RemoveAll(f => f.StartsWith("N")); // por condición

// Buscar
bool tiene = frutas.Contains("Uva");     // true
int idx = frutas.IndexOf("Naranja");     // índice o -1
string primero = frutas.Find(f => f.Length > 3);
List<string> largas = frutas.FindAll(f => f.Length > 4);

// Ordenar y procesar
numeros.Sort();
numeros.Reverse();
numeros.ForEach(n => Console.Write($"{n} "));
Console.WriteLine();

// Propiedades
Console.WriteLine(numeros.Count);   // cantidad
Console.WriteLine(numeros.Capacity); // capacidad actual

// Convertir
string[] array = frutas.ToArray();
List<int> desdeArray = new List<int>(new int[] { 1, 2, 3 });`,
      },
      {
        id: 'dictionary',
        title: 'Dictionary<TKey, TValue>',
        content:
          'Dictionary es una colección de pares clave-valor. Permite acceso rápido por clave (O(1)). Las claves deben ser únicas. Ideal para búsquedas por identificador o nombre.',
        code: `// Crear diccionario
Dictionary<string, int> edades = new Dictionary<string, int>
{
    { "Ana", 25 },
    { "Bob", 30 },
    { "Carlos", 35 }
};

// Alternativa
var personas = new Dictionary<int, string>();
personas.Add(1, "Ana");
personas[2] = "Bob"; // indexer también agrega

// Acceder
int edadAna = edades["Ana"];           // 25
bool existe = edades.ContainsKey("Bob"); // true

// Safe access (sin excepción si no existe)
if (edades.TryGetValue("Diana", out int edadDiana))
{
    Console.WriteLine($"Diana tiene {edadDiana} años");
}

// Eliminar
edades.Remove("Bob");

// Iterar
foreach (KeyValuePair<string, int> par in edades)
{
    Console.WriteLine($"{par.Key}: {par.Value}");
}

// O con deconstruction
foreach (var (nombre, edad) in edades)
{
    Console.WriteLine($"{nombre}: {edad} años");
}

// Propiedades
Console.WriteLine(edades.Count);    // 2
Console.WriteLine(edades.Keys.Count); // 2
Console.WriteLine(edades.Values.Count); // 2`,
      },
    ],
  },
  {
    id: 'strings',
    label: 'Strings',
    icon: 'type',
    topics: [
      {
        id: 'string-metodos',
        title: 'Métodos de String',
        content:
          'Los strings en C# son inmutables (no cambian). Cada operación crea un nuevo string. C# ofrece muchos métodos integrados para manipulación de texto.',
        code: `string texto = "  Hola Mundo C#  ";

// Propiedades
Console.WriteLine(texto.Length); // 17

// Mayúsculas / minúsculas
Console.WriteLine(texto.ToUpper()); // "  HOLA MUNDO C#  "
Console.WriteLine(texto.ToLower()); // "  hola mundo c#  "

// Recortar espacios
Console.WriteLine(texto.Trim());      // "Hola Mundo C#"
Console.WriteLine(texto.TrimStart()); // "Hola Mundo C#  "
Console.WriteLine(texto.TrimEnd());   // "  Hola Mundo C#"

// Buscar
bool contiene = texto.Contains("Mundo"); // true
int indice = texto.IndexOf("Mundo");     // 8
int ultimo = texto.LastIndexOf("o");     // 13

// Reemplazar
string reemplazado = texto.Replace("Mundo", "Universo");
// "  Hola Universo C#  "

// Subcadenas
string sub = texto.Substring(2, 4); // "Hola"

// Dividir y unir
string csv = "manzana,pera,naranja";
string[] partes = csv.Split(',');
string unido = string.Join(" | ", partes);
// "manzana | pera | naranja"

// Verificar
bool empieza = texto.StartsWith("  Hola"); // true
bool termina = texto.EndsWith("C#  ");     // true
bool vacio = string.IsNullOrWhiteSpace("   "); // true`,
      },
      {
        id: 'string-interpolacion',
        title: 'Interpolación de Strings',
        content:
          'La interpolación de strings (prefijo $) permite insertar expresiones directamente en strings usando {expresión}. Es más legible que la concatenación o sprintf.',
        code: `// Interpolación básica
string nombre = "Carlos";
int edad = 25;
string mensaje = $"Hola, soy {nombre} y tengo {edad} años";

// Expresiones dentro de {}
string calculo = $"2 + 2 = {2 + 2}";
string fecha = $"Hoy es {DateTime.Now:dd/MM/yyyy}";

// Formato de números
decimal precio = 1234.56m;
Console.WriteLine($"Precio: {precio:C}");   // 1.234,56€
Console.WriteLine($"Precio: {precio:F2}");  // 1234.56
Console.WriteLine($"Precio: {precio:N0}");  // 1.235

// Alineación
for (int i = 1; i <= 5; i++)
{
    Console.WriteLine($"|{i,5}|{i * i,8}|{(double)i / 5,12:P0}|");
}
// |    1|       1|         20%|
// |    2|       4|         40%|

// Strings verbatim (@) - ignora caracteres de escape
string ruta = @"C:/Users/Documentos/archivo.txt";
string comillas = @"Dice ""hola"" al mundo";

// Raw strings (C# 11+)
string json = """
    {
        "nombre": "Ana",
        "edad": 25
    }
    """;`,
      },
    ],
  },
  {
    id: 'propiedades',
    label: 'Propiedades',
    icon: 'settings',
    topics: [
      {
        id: 'propiedades-basicas',
        title: 'Propiedades',
        content:
          'Las propiedades encapsulan campos con get/set. Permiten controlar el acceso a los datos de una clase. Pueden tener lógica en el getter/setter ysoportan auto-implementación.',
        code: `public class Persona
{
    // Auto-property
    public string Nombre { get; set; }

    // Auto-property con valor por defecto
    public int Edad { get; set; } = 18;

    // Propiedad de solo lectura
    public DateTime FechaCreacion { get; } = DateTime.Now;

    // Propiedad calculada
    public bool EsMayorDeEdad => Edad >= 18;

    // Propiedad con lógica en campo privado
    private string email;
    public string Email
    {
        get => email;
        set
        {
            if (string.IsNullOrEmpty(value))
                throw new ArgumentException("El email no puede estar vacío");
            email = value.ToLower();
        }
    }

    // Init-only (C# 9+, solo se puede asignar en constructor)
    public string Id { get; init; }
}

// Uso
Persona p = new Persona();
p.Nombre = "Ana";  // usa set
p.Email = "ANA@TEST.COM";
Console.WriteLine(p.Email);    // "ana@test.com"
Console.WriteLine(p.EsMayorDeEdad); // true`,
      },
    ],
  },
  {
    id: 'expresiones',
    label: 'Expresiones Lambda',
    icon: 'chevron-right',
    topics: [
      {
        id: 'lambda',
        title: 'Expresiones Lambda',
        content:
          'Las expresiones lambda son funciones anónimas concisas. Se usan con delegados, LINQ y expresiones de árbol. Forma: (parámetros) => expresión o { bloque }.',
        code: `// Lambda de una línea (expresión)
Func<int, int> cuadrado = x => x * x;
Console.WriteLine(cuadrado(5)); // 25

// Múltiples parámetros
Func<int, int, int> sumar = (a, b) => a + b;

// Sin parámetros
Action saludar = () => Console.WriteLine("Hola!");
saludar();

// Con bloque de código
Func<int, string> paridad = n =>
{
    if (n % 2 == 0) return "par";
    return "impar";
};

// Con LINQ
var numeros = new List<int> { 1, 2, 3, 4, 5, 6 };

var pares = numeros.Where(n => n % 2 == 0).ToList();
var cuadrados = numeros.Select(n => n * n).ToList();
var sumaTotal = numeros.Aggregate((a, b) => a + b);

// Delegates con lambda
Button_Click += (sender, e) =>
{
    Console.WriteLine("Botón clickeado");
};

// Lambda con tipo explícito
Func<int, string, bool> comparar = (int a, string b) =>
    a.ToString() == b;`,
      },
    ],
  },
  {
    id: 'naming',
    label: 'Convenciones',
    icon: 'hash',
    topics: [
      {
        id: 'convenciones',
        title: 'Convenciones de Nomenclatura',
        content:
          'C# tiene convenciones de nombrado ampliamente aceptadas que mejoran la legibilidad del código. Seguirlas es una práctica recomendada por Microsoft.',
        code: `// PascalCase: clases, métodos, propiedades públicas
public class PersonaServicio  // clase
{
    public string NombreCompleto { get; set; }  // propiedad pública
    public void CalcularEdad() { }              // método
}

// camelCase: parámetros, variables locales, campos privados
public void Guardar(string nombreArchivo)  // parámetro
{
    int contador = 0;                        // variable local
    string _mensaje = "info";               // campo privado (convención _)
}

// snake_case: algunos frameworks (Unity, etc.)
// UPPER_CASE: constantes
public const string VERSION_API = "v2.0";
public const int MAX_INTENTOS = 3;

// Prefijos comunes en interfaces
public interface IRepositorio { }   // interfaz con I
public interface IServicio { }

// Nombres descriptivos
// ❌ mala práctica
int x = 5;
void doStuff() { }

// ✅ buena práctica
int cantidadProductos = 5;
void calcularTotalDescuento() { }`,
      },
    ],
  },
  {
    id: 'operadores-avanzados',
    label: 'Operadores Avanzados',
    icon: 'code',
    topics: [
      {
        id: 'is-pattern',
        title: 'Pattern Matching',
        content:
          'Pattern matching permite verificar y extraer datos de una expresión de forma concisa. Incluye "is", switch expressions, y patrones de tipo, valor y propiedad.',
        code: `// Pattern matching con is
object dato = "Hola";
if (dato is string texto)
{
    Console.WriteLine($"Es un string: {texto}");
}

// Pattern matching con switch
int numero = 42;
string categoria = numero switch
{
    <= 0 => "negativo o cero",
    > 0 and <= 10 => "pequeño",
    > 10 and <= 100 => "medio",
    > 100 => "grande"
};

// Patrón de tipo
object valor = 42;
string resultado = valor switch
{
    int i when i > 0 => $"entero positivo: {i}",
    int i => $"entero: {i}",
    string s => $"string: {s}",
    null => "nulo",
    _ => "desconocido"
};

// Patrón de propiedad
public class Persona
{
    public string Nombre { get; set; }
    public int Edad { get; set; }
}

Persona p = new Persona { Nombre = "Ana", Edad = 25 };
if (p is { Edad: >= 18, Nombre: not null })
{
    Console.WriteLine("Mayor de edad y con nombre");
}

// Patrón de tupla
string describe = (1, "uno") switch
{
    (1, var texto) => $"uno: {texto}",
    _ => "otro"
};`,
      },
    ],
  },
  {
    id: 'nullables',
    label: 'Nullables',
    icon: 'circle',
    topics: [
      {
        id: 'nullables',
        title: 'Tipos Nullable y Operador ?.?',
        content:
          'C# permite que los tipos de valor sean nullable con ?. Los operadores ?. y ?? ofrecen formas seguras de trabajar con valores potencialmente nulos sin excepciones.',
        code: `// Nullable value types
int? nullableInt = null;
double? nullableDouble = 3.14;
bool? nullableBool = true;

// Verificar null
if (nullableInt.HasValue)
{
    Console.WriteLine(nullableInt.Value);
}

// Operador ?. (null-conditional)
string nombre = null;
int? longitud = nombre?.Length; // null sin excepción

// Operador ?? (null-coalescing)
string texto = nombre ?? "valor por defecto";

// Operador ??= (null-coalescing assignment)
nombre ??= "Anónimo";

// Null-conditional en colecciones
List<string> lista = null;
int? primerElemento = lista?.Count;

// Uso combinado
string nombreCompleto = persona?.Nombre ?? "Desconocido";
int cantidad = lista?.Count ?? 0;

// Pattern matching con null
if (nombre is null)
{
    Console.WriteLine("El nombre es nulo");
}

// Not-null assertion (!)
// ⚠️ Solo usar cuando SEGURO no es null
string seguro = nombre!.Length.ToString();`,
      },
    ],
  },
  {
    id: 'extensiones',
    label: 'Métodos de Extensión',
    icon: 'plus-square',
    topics: [
      {
        id: 'extensiones',
        title: 'Métodos de Extensión',
        content:
          'Los métodos de extensión permiten agregar métodos a tipos existentes sin heredar de ellos. Se definen en clases estáticas con el primer parámetro usando "this".',
        code: `// Definir extensión
public static class StringExtensions
{
    // Extiende string con método ToSlug
    public static string ToSlug(this string texto)
    {
        return texto
            .ToLower()
            .Replace(" ", "-")
            .Replace("á", "a").Replace("é", "e")
            .Replace("í", "i").Replace("ó", "o")
            .Replace("ú", "u");
    }

    // Extiende int con método EsPar
    public static bool EsPar(this int numero)
    {
        return numero % 2 == 0;
    }
}

// Uso (parece un método nativo)
string titulo = "Hola Mundo C#";
string slug = titulo.ToSlug(); // "hola-mundo-c"

int num = 42;
bool esPar = num.EsPar(); // true

// Encadenar
string resultado = "  Hola Mundo  "
    .Trim()
    .Replace("Mundo", "C#")
    .ToLower();`,
      },
    ],
  },
]
