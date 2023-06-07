export class Calculeitor 
{
    constructor() {}
  
    /**
     * Calcula la suma de los números en un arreglo.
     * @param numbers - Arreglo de números.
     * @returns La suma de los números.
     */

    public suma(numbers: number[]): number 
    {
      let sum = 0;
      for (const num of numbers) {
        sum += num;
      }
      return sum;
    }
  
    /**
     * Realiza la resta de un número y los elementos de otro arreglo.
     * @param number - Número inicial.
     * @param numberN - Arreglo de números a restar.
     * @returns El resultado de la resta.
     */

    public resta(number: number, numberN: number[]): number 
    {
      let sum = 0;
      for (const num of numberN) {
        sum += num;
      }
      const resta = number - sum;
      return resta;
    }
  
    /**
     * Realiza la división entre dos números.
     * @param numberi - Dividendo.
     * @param numberb - Divisor.
     * @returns El resultado de la división.
     */

    public division(numberi: number, numberb: number): number 
    {
      const div = numberi / numberb;
      return div;
    }
  
    /**
     * Realiza la multiplicación de varios números.
     * @param numbers - Arreglo de números a multiplicar.
     * @returns El resultado de la multiplicación.
     */

    public multiplicacion(numbers: number[]): number 
    {
      let mul = 1;
      for (const num of numbers) {
        mul *= num;
      }
      return mul;
    }
  
    /**
     * Calcula la potencia de un número elevado a un exponente.
     * @param number - Número base.
     * @param exponente - Exponente.
     * @returns El resultado de la potencia.
     */

    public potencia(number: number, exponente: number): number 
    {
      const expon = number ** exponente;
      return expon;
    }
  
    /**
     * Calcula la raíz cuadrada de un número.
     * @param numero - Número.
     * @returns La raíz cuadrada del número.
     * @throws Error si se intenta calcular la raíz cuadrada de un número negativo.
     */

    public raiz(numero: number): number 
    {
      if (numero < 0) {
        throw new Error("No se puede calcular la raíz cuadrada de un número negativo.");
      }
      const raiz = Math.sqrt(numero);
      return raiz;
    }
}
  