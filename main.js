// Ejercicio 1: Contar vocales en una cadena
function contarVocales(cadena) {
  if (typeof cadena !== "string") return 0;
  const vocales = "aeiouAEIOU";
  return [...cadena].reduce(
    (acc, char) => acc + (vocales.includes(char) ? 1 : 0),
    0
  );
}
console.log("\n====================\n");
console.log("Solucion 1:");
console.log(contarVocales("JavaScript")); // Resultado: 3
console.log(contarVocales("123!@#")); // Resultado: 0
console.log(contarVocales("AEIOUaeiou")); // Resultado: 10

// Ejercicio 2: Muestra el mayor número de un array
function maxNum(array) {
  if (!Array.isArray(array) || array.length === 0) return null;
  return Math.max(...array);
}
console.log("\n====================\n");
console.log("Solucion 2:");
console.log(maxNum([1, 2, 3, 4, 5, 8, 6, 9])); // Resultado: 9
console.log(maxNum([])); // Resultado: null
console.log(maxNum([-10, -20, -5])); // Resultado: -5

// Ejercicio 3: Calcular la media de un array de números
function calcularMedia(array) {
  if (!Array.isArray(array) || array.length === 0) return 0;
  const suma = array.reduce((acc, num) => acc + num, 0);
  return suma / array.length;
}
console.log("\n====================\n");
console.log("Solucion 3:");
console.log(calcularMedia([10, 20, 30, 40])); // Resultado: 25
console.log(calcularMedia([])); // Resultado: 0
console.log(calcularMedia([5])); // Resultado: 5

// Ejercicio 4: Invertir los elementos de un array
function invertirArray(array) {
  if (!Array.isArray(array)) return [];
  return array.slice().reverse();
}
console.log("\n====================\n");
console.log("Solucion 4:");
console.log(invertirArray([1, 2, 3, 4, 5])); // Resultado: [5, 4, 3, 2, 1]
console.log(invertirArray([])); // Resultado: []
console.log(invertirArray(["a", "b", "c"])); // Resultado: ["c", "b", "a"]

// Ejercicio 5: Eliminar elementos duplicados de un array
function eliminarDuplicados(array) {
  if (!Array.isArray(array)) return [];
  return [...new Set(array)];
}
console.log("\n====================\n");
console.log("Solucion 5:");
console.log(eliminarDuplicados([1, 2, 2, 3, 4, 4, 5])); // Resultado: [1, 2, 3, 4, 5]
console.log(eliminarDuplicados([1])); // Resultado: [1]
console.log(eliminarDuplicados([])); // Resultado: []

// Ejercicio 6: Convertir la primera letra de cada palabra en mayúscula
function capitalizarPalabras(cadena) {
  if (typeof cadena !== "string") return "";
  return cadena
    .split(" ")
    .map((palabra) => palabra.charAt(0).toUpperCase() + palabra.slice(1))
    .join(" ");
}
console.log("\n====================\n");
console.log("Solucion 6:");
console.log(capitalizarPalabras("hola mundo desde javascript")); // Resultado: "Hola Mundo Desde Javascript"
console.log(capitalizarPalabras("")); // Resultado: ""
console.log(capitalizarPalabras("una prueba mas")); // Resultado: "Una Prueba Mas"

// Ejercicio 7: Generar los primeros N números de la sucesión de Fibonacci
function fibonacci(n) {
  if (typeof n !== "number" || n < 1) return [];
  const secuencia = [0, 1];
  for (let i = 2; i < n; i++) {
    secuencia.push(secuencia[i - 1] + secuencia[i - 2]);
  }
  return secuencia.slice(0, n);
}
console.log("\n====================\n");
console.log("Solucion 7:");
console.log(fibonacci(5)); // Resultado: [0, 1, 1, 2, 3]
console.log(fibonacci(0)); // Resultado: []
console.log(fibonacci(1)); // Resultado: [0]
