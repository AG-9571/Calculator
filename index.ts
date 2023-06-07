import * as readline from 'readline';
import { Calculeitor } from './calculador/calculetor';

// Home
function printMenu() {
  console.log("=== Calculadora ===");
  console.log("1. Suma");
  console.log("2. Resta");
  console.log("3. División");
  console.log("4. Multiplicación");
  console.log("5. Exponencial");
  console.log("6. Raíz cuadrada");
  console.log("0. Salir");
}

// Conexión
function createInterface() {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
}

// Lectura de parámetros
function readNumbers(): Promise<number[]> {
  return new Promise<number[]>(async (resolve) => {
    const rl = createInterface();

    rl.question("Ingresa los números separados por espacios: ", (input: string) => {
      rl.close();
      const numbers = input.split(" ").map(Number);
      resolve(numbers);
    });
  });
}

function waitForKey(): Promise<void> {
  return new Promise<void>(async (resolve) => {
    const rl = createInterface();

    rl.question("Presiona cualquier tecla para continuar...", () => {
      rl.close();
      resolve();
    });
  });
}

function readNumber(name: string): Promise<string> {
  const txt = name;
  return new Promise<string>(async (resolve) => {
    const rl = createInterface();

    rl.question(txt, (input: string | PromiseLike<string>) => {
      rl.close();
      resolve(input);
    });
  });
}

// Función calculadora
async function calculate() {
  // Variables globales
  const calc = new Calculeitor();
  let option = -1;

  while (option !== 0) {
    // Home
    printMenu();

    // Primera pregunta
    option = parseInt(await readNumber("Ingresa una opción: "));

    // Opción
    switch (option) {
      case 1: {
        const numbers: number[] = await readNumbers();
        const result = calc.suma(numbers);
        console.log(`El resultado de la suma es: ${result}`);
        await waitForKey();
        break;
      }
      case 2: {
        const number = await readNumber("Ingresa el primer número: ");
        const numbers: number[] = await readNumbers();
        const result = calc.resta(parseFloat(number), numbers);
        console.log(`El resultado de la resta es: ${result}`);
        await waitForKey();
        break;
      }
      case 3: {
        const numberi = parseInt(await readNumber("Ingresa el dividendo: "));
        const numberb = parseInt(await readNumber("Ingresa el divisor: "));
        const result = calc.division(numberi, numberb);
        console.log(`El resultado de la división es: ${result}`);
        await waitForKey();
        break;
      }
      case 4: {
        const numbers: number[] = await readNumbers();
        const result = calc.multiplicacion(numbers);
        console.log(`El resultado de la multiplicación es: ${result}`);
        await waitForKey();
        break;
      }
      case 5: {
        const number = parseInt(await readNumber("Ingresa el número base: "));
        const exponente = parseInt(await readNumber("Ingresa el exponente: "));
        const result = calc.potencia(number, exponente);
        console.log(`El resultado de la exponenciación es: ${result}`);
        await waitForKey();
        break;
      }
      case 6: {
        const numero = parseInt(await readNumber("Ingresa el número: "));
        const result = calc.raiz(numero);
        console.log(`La raíz cuadrada es: ${result}`);
        await waitForKey();
        break;
      }
      case 0: {
        console.log("Saliendo de la calculadora...");
        break;
      }
      default: {
        console.log("Opción inválida. Inténtalo de nuevo.");
        break;
      }
    }
  }
}

calculate();

