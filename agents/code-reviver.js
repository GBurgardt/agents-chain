import { AgentChain } from "../models/agent-chain.js";

const userStatement = process.argv[2];

const generatedAgent = new AgentChain({
  superExplanation:
    "Este es un agente generado automáticamente basado en el input del usuario.",
  superPrompt: userStatement,
});

// Agente Agente 1
generatedAgent.addAgent({
  systemPrompt:
    "Agente 1: Analiza el código JavaScript introducido, identifica bloques de código y los separa para una inspección más detallada.",
  userPrompt:
    "Como Agente 1, tu tarea es analizar el código JavaScript proporcionado, identificar y dividir los bloques de código para una inspección más detallada, especialmente centrada en los errores de sintaxis como comas faltantes en un JSON, paréntesis o comillas no cerradas.",
  example: {
    input:
      "let data = { name: 'John, age: 30, city: 'New York'}; let txt = 'Hello world; console.log(txt);",
    output: [
      "let data = { name: 'John', age: 30, city: 'New York'}",
      "let txt = 'Hello world'",
      "console.log(txt)",
    ],
  },
});

// Agente Agente 2
generatedAgent.addAgent({
  systemPrompt:
    "Agente 2: En los bloques identificados, busca específicamente por errores de sintaxis comunes en JavaScript, como comas faltantes, paréntesis o comillas no cerradas.",
  userPrompt:
    "As Agent 2, your task is to go through the identified sections of JavaScript code and specifically look for common JavaScript syntax errors such as missing commas, unclosed parentheses, or quotation marks. Remember to pay particular attention to ill-formed JSONs or unexpected strings within the code.",
  example: {
    input: `let user = { name: 'John', age: 30,, occupation: 'developer' } console.log(user.name)`,
    output: `let user = { name: 'John', age: 30, occupation: 'developer' }; console.log(user.name);`,
  },
});

// Agente Agente 3
generatedAgent.addAgent({
  systemPrompt:
    "Agente 3: Dentro del código JavaScript, identifica las partes que contienen JSONs, luego los analiza y busca por incoherencias o errores en su formación.",
  userPrompt:
    " Como Agente 3, tu tarea es explorar el código JavaScript proporcionado, detectar cualquier JSON presente y examinar su estructura. Busca errores de sintaxis como comas faltantes, paréntesis o comillas no correspondidas y corrige cualquier inconsistencia encontrada manteniendo el resto del código intacto.",
  example: {
    input:
      "const userData = { 'name': 'John', 'age': 35, 'address': {'street': 'Main str.','number': '123' 'city': 'Springfield' } }",
    output:
      "const userData = { 'name': 'John', 'age': 35, 'address': {'street': 'Main str.','number': '123', 'city': 'Springfield' }",
  },
});

// Agente Agente 4
generatedAgent.addAgent({
  systemPrompt:
    "Agente 4: Identifica y corrige strings inesperados o mal formados en el código JavaScript.",
  userPrompt:
    "Como Agente 4, tu tarea es identificar y corregir cualquier string mal formado o inesperado en el código JavaScript presentado. Asegúrate de mantener todo idéntico, excepto por la corrección de estos errores específicos de sintaxis.",
  example: {
    Input:
      'const jsonData = "{ "name": "John", "age": 30, "city": "New York" ;"',
    Correction:
      'const jsonData = "{ \\"name\\": \\"John\\", \\"age\\": 30, \\"city\\": \\"New York\\" }";',
  },
});

// Agente Agente 5
generatedAgent.addAgent({
  systemPrompt:
    "Agente 5: Después de que todos los errores han sido identificados y las posibles correcciones generadas, este agente aplica las correcciones al código original, asegurándose de que solo los errores sean corregidos y que el resto del código permanezca idéntico.",
  userPrompt:
    " As Agent 5, tu tarea es aplicar las correcciones sugeridas a los errores detectados en el código JavaScript proporcionado, asegurándote de que solo se corrijan los errores de sintaxis y que el resto del código permanezca igual.",
  example: {
    input:
      "let data = { 'Name': John, 'Age': 30 }; function test(){ console.log('Test string not closed); }",
    output:
      "let data = { 'Name': 'John', 'Age': 30 }; function test(){ console.log('Test string not closed'); }",
  },
});

generatedAgent
  .execute()
  .then(console.log)
  .then(() => {
    console.log("¡Creación del prompt completada!");
  });
