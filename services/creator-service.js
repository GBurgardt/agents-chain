export function extractArrayFromString(str) {
  // Usa una expresión regular para encontrar el contenido entre corchetes
  const match = str.match(/\[([\s\S]*?)\]/);

  if (!match) {
    throw new Error("Array not found in string");
  }

  // Ajusta el contenido del array para tener un formato adecuado de JSON
  const jsonArray = "[" + match[1].trim() + "]";

  // Usa JSON.parse() para convertir el string en un array real de JavaScript
  return JSON.parse(jsonArray);
}

export function containsArray(str) {
  return /\[.*\]/.test(str);
}
