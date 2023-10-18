import { AgentChain } from "./models/agent-chain.js";

const userStatement = process.argv[2];

const generatedAgent = new AgentChain({
  superExplanation:
    "El superagente está diseñado para mejorar el código JavaScript proporcionado, ya sea identificando y aplicando patrones de diseño correspondientes o realizando mejoras expertas en la codificación. El proceso se inicia con el Agente 1, que examina el código JavaScript proporcionado para identificar áreas que podrían beneficiarse de mejoras o patrones de diseño. A continuación, el Agente 2 aplica las sugerencias de mejora o los patrones de diseño identificados al código JavaScript. Una vez que el código ha sido modificado, el Agente 3 realiza una revisión detallada para verificar la correcta aplicación de las mejoras y/o patrones de diseño, así como para asegurar que no se introduzcan errores o problemas de rendimiento. Finalmente, el Agente 4 genera una comparación y una explicación detallada de las modificaciones en el código para demostrar cómo y por qué se han efectuado las mejoras. De esta manera, estos agentes trabajan de forma secuencial y coordinada para transformar un código JavaScript inicial en una versión optimizada y eficiente.",
  superPrompt: userStatement,
});
// Agente Agente 1
generatedAgent.addAgent({
  systemPrompt:
    "Agente 1: Analiza el código JavaScript inicial proporcionado para identificar áreas de mejora y posibles patrones de diseño que podrían ser aplicables.",
  userPrompt:
    " Como Agente 1, tu tarea es analizar la estructura y componentes del siguiente código JavaScript para identificar áreas que necesiten mejoras. Revisa si es posible aplicar un patrón de diseño para optimizar el código. Si no es posible, sugiere otras formas de mejorar y optimizar el código según las mejores prácticas de programación en JavaScript.",
  example: {
    input:
      "let person = { firstName: 'John', lastName: 'Doe', age: 25, occupation: 'developer', salary: 60000, biography: 'I am a passionate software developer.' }; function displayInfo(obj) { console.log(`${obj.firstName} ${obj.lastName}, ${obj.age} years old, works as ${obj.occupation}`); console.log(`Salary: ${obj.salary}`); console.log(`Biography: ${obj.biography}`); }; displayInfo(person);",
    output:
      "Possible coding improvements: use classes instead of plain objects for better encapsulation and code organization. Patterns applicable: Factory Pattern could be used to create the 'person' object, as different types of 'person' can exist depending on the 'occupation' property.",
  },
});
// Agente Agente 2
generatedAgent.addAgent({
  systemPrompt:
    "Agente 2: Aplica las mejoras sugeridas y/o patrones de diseño identificados al código JavaScript inicial.",
  userPrompt:
    " As Agent 2, your task is to implement the suggestions and/or apply recognized design patterns to the original JavaScript code. This will result in an optimized, expertly improved version of the initial code.",
  example: {
    input: `function makeProfile(user) { const { name, title, occupation, salary, biography } = user; return \`<div class='profile'> <h2>\${title}</h2> <p><strong>Name:</strong> \${name}</p> <p><strong>Occupation:</strong> \${occupation}</p> <p><strong>Salary:</strong> \${salary}</p> <p><strong>Biography:</strong> \${biography}</p> </div>\`;} .profile { font-family: Arial, sans-serif; } .profile h2 { color: #333; font-size: 1.5em; } .profile p { color: #666; font-size: 1em; } @media only screen and (min-width: 600px) { .profile p { column-count: 3; } }`,
  },
});
// // Agente Agente 3
// generatedAgent.addAgent({
//   systemPrompt:
//     "Agente 3: Realiza una revisión detallada del código modificado para verificar la correcta implementación de las mejoras y/o patrones de diseño, y para garantizar que no se introduzcan errores o problemas de rendimiento.",
//   userPrompt:
//     " As Agent 3, your task is to thoroughly review the updated javascript code, ensuring that the enhancements and/or design patterns have been correctly implemented and that no new errors or performance issues have been introduced. Ensure the code improvement keeping in mind the ultimate goal of advanced and efficient coding.",
//   example: {
//     input: `const add = (num1, num2) => num1 && num2 ? num1 + num2 : 'Invalid input';
//                        console.log(add(2,4));`,
//   },
// });
// Agente Agente 4
generatedAgent.addAgent({
  systemPrompt:
    "Agente 4: Produce una comparación y una explicación detallada de las modificaciones del código para mostrar cómo y por qué se han realizado las mejoras.",
  userPrompt:
    " Como Agente 4, tu tarea es evaluar y dar una explicación detallada del código JavaScript proporcionado. Debes examinar su eficiencia, identificar oportunidades para implementar patrones de diseño y proporcionar un análisis en profundidad de las posibles mejoras que se pueden realizar. Finalmente, debes mostrar cómo se vería el código mejorado, con una explicación clara de las modificaciones y por qué se han realizado.",
  example: {
    input: "function sum(a, b) { return a + b; }",
    output:
      "const calculator = (function() { const _sum = function (a, b) { return a + b }; return { sum: _sum }; })();",
  },
});
generatedAgent
  .execute()
  .then(console.log)
  .then(() => {
    console.log("¡Creación del prompt completada!");
  });
