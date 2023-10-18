import { AgentChain } from "../models/agent-chain.js";

export const codeReviver = userStatement => {
  const generatedAgent = new AgentChain({
    superExplanation:
      "El superagente tiene como objetivo corregir errores de sintaxis en un código JavaScript dado, manteniendo intacto el resto del contenido. La operación inicia con el Agente 1, que analiza exhaustivamente el código dado e identifica posibles errores de sintaxis. A continuación, el Agente 2 se enfoca en los errores de sintaxis específicos de JSON, como una coma faltante o paréntesis no cerrados. Por otro lado, el Agente 3 se encarga de las cadenas de texto inesperadas que podrían causar problemas de sintaxis. Finalmente, el Agente 4 revisa todas las correcciones realizadas para asegurarse que solo los errores de sintaxis han sido modificados, conservando el resto del código intacto. Gracias a los esfuerzos coordinados de estos agentes, se garantiza la corrección efectiva de los errores de sintaxis, asegurando que el código es seguro y funcional.",
    superPrompt: userStatement,
  });

  // Agente Agente 1
  generatedAgent.addAgent({
    systemPrompt:
      "Agente 1: Analizará el código JavaScript recibido e identificará los errores de sintaxis presentes.",
    userPrompt:
      " Como Agente 1, tu tarea es examinar el código JavaScript proporcionado y señalar todos los errores de sintaxis. Presta especial atención a las faltas de comas en JSON, paréntesis o comillas no cerradas, JSONs mal formateados o strings inesperados. Mantén todo lo demás idéntico, la única modificación necesaria es la corrección de los errores sintácticos mencionados.",
    example: {
      input:
        "var person = {name:'John', lastName:'Doe, profession:'Developer', age:32, ; var shoes = JSON.parse('{brand:Nike, model:'Air Max', color:'Black'}'); function displayPerson(p) { console.log(p.name + ', ' + p.profession); }",
      output:
        "Errores de sintaxis: Falta una coma después de 'lastName', falta una comilla después de 'Developer' y antes de 'Air Max', hay punto y coma inesperado después del objeto 'person' y se esperaba una comilla doble en el nombre de la marca en el JSON.",
    },
  });

  // Agente Agente 2
  generatedAgent.addAgent({
    systemPrompt:
      "Agente 2: Se centrará en identificar y corregir los errores específicos de sintaxis de JSON como la falta de una coma o paréntesis no cerrados.",
    userPrompt:
      " As Agent 2, your task is to identify and corrigate syntax erros in JSON objects. Pay close attention to common mistakes such as missing commas, and unclosed parentheses or quotes. The goal is to correct these errors while keeping everything else identical.",
    example: {
      input: "var data = { 'name' : 'John, 'age' : 30 }",
      output: "var data = { 'name' : 'John', 'age' : 30 }",
    },
  });

  // Agente Agente 3
  generatedAgent.addAgent({
    systemPrompt:
      "Agente 3: Se dedicará a localizar y corregir strings inesperados que puedan generar problemas de sintaxis.",
    userPrompt:
      " As Agent 3, your task is to scan the complete JavaScript code, identify unexpected strings that could cause syntax errors, and correct them without altering the overall structure or elements of the code.",
    example: {
      input: `var data = {
      name: 'John Doe,
      age: 30
      occupation: 'Software Developer'
    }
    `,
      output: `
    var data = {
      name: 'John Doe',
      age: 30,
      occupation: 'Software Developer'
    }
    `,
    },
  });

  // Agente Agente 4
  generatedAgent.addAgent({
    systemPrompt:
      "Agente 4: Revisará todas las correcciones realizadas para garantizar que el contenido del código se mantenga intacto, con la excepción de los errores sintácticos corregidos.",
    userPrompt:
      " Como agente 4, tu tarea será revisar las correcciones de los errores sintácticos identificados y corregidos en el código JavaScript, asegúrate de que el contenido del código se mantenga intacto con la excepción de corregir los errores. Valida particularmente las partes que pueden contener JSONs mal formateados o strings inesperados.",
    example: {
      Input: `
      let profile = {
        'name': 'John,
        'age': 30,
        'city: 'New York'
      };`,
      Output: `
      let profile = {
        'name': 'John',
        'age': 30,
        'city': 'New York'
       };
       `,
    },
  });

  return generatedAgent.execute();
};

//   import { AgentChain } from "./models/agent-chain.js";

// const userStatement = process.argv[2];

// const generatedAgent = new AgentChain({
//   superExplanation:
//     "El superagente tiene como objetivo corregir errores de sintaxis en un código JavaScript dado, manteniendo intacto el resto del contenido. La operación inicia con el Agente 1, que analiza exhaustivamente el código dado e identifica posibles errores de sintaxis. A continuación, el Agente 2 se enfoca en los errores de sintaxis específicos de JSON, como una coma faltante o paréntesis no cerrados. Por otro lado, el Agente 3 se encarga de las cadenas de texto inesperadas que podrían causar problemas de sintaxis. Finalmente, el Agente 4 revisa todas las correcciones realizadas para asegurarse que solo los errores de sintaxis han sido modificados, conservando el resto del código intacto. Gracias a los esfuerzos coordinados de estos agentes, se garantiza la corrección efectiva de los errores de sintaxis, asegurando que el código es seguro y funcional.",
//   superPrompt: userStatement,
// });

// // Agente Agente 1
// generatedAgent.addAgent({
//   systemPrompt:
//     "Agente 1: Analizará el código JavaScript recibido e identificará los errores de sintaxis presentes.",
//   userPrompt:
//     " Como Agente 1, tu tarea es examinar el código JavaScript proporcionado y señalar todos los errores de sintaxis. Presta especial atención a las faltas de comas en JSON, paréntesis o comillas no cerradas, JSONs mal formateados o strings inesperados. Mantén todo lo demás idéntico, la única modificación necesaria es la corrección de los errores sintácticos mencionados.",
//   example: {
//     input:
//       "var person = {name:'John', lastName:'Doe, profession:'Developer', age:32, ; var shoes = JSON.parse('{brand:Nike, model:'Air Max', color:'Black'}'); function displayPerson(p) { console.log(p.name + ', ' + p.profession); }",
//     output:
//       "Errores de sintaxis: Falta una coma después de 'lastName', falta una comilla después de 'Developer' y antes de 'Air Max', hay punto y coma inesperado después del objeto 'person' y se esperaba una comilla doble en el nombre de la marca en el JSON.",
//   },
// });

// // Agente Agente 2
// generatedAgent.addAgent({
//   systemPrompt:
//     "Agente 2: Se centrará en identificar y corregir los errores específicos de sintaxis de JSON como la falta de una coma o paréntesis no cerrados.",
//   userPrompt:
//     " As Agent 2, your task is to identify and corrigate syntax erros in JSON objects. Pay close attention to common mistakes such as missing commas, and unclosed parentheses or quotes. The goal is to correct these errors while keeping everything else identical.",
//   example: {
//     input: "var data = { 'name' : 'John, 'age' : 30 }",
//     output: "var data = { 'name' : 'John', 'age' : 30 }",
//   },
// });

// // Agente Agente 3
// generatedAgent.addAgent({
//   systemPrompt:
//     "Agente 3: Se dedicará a localizar y corregir strings inesperados que puedan generar problemas de sintaxis.",
//   userPrompt:
//     " As Agent 3, your task is to scan the complete JavaScript code, identify unexpected strings that could cause syntax errors, and correct them without altering the overall structure or elements of the code.",
//   example: {
//     input: `var data = {
//     name: 'John Doe,
//     age: 30
//     occupation: 'Software Developer'
//   }
//   `,
//     output: `
//   var data = {
//     name: 'John Doe',
//     age: 30,
//     occupation: 'Software Developer'
//   }
//   `,
//   },
// });

// // Agente Agente 4
// generatedAgent.addAgent({
//   systemPrompt:
//     "Agente 4: Revisará todas las correcciones realizadas para garantizar que el contenido del código se mantenga intacto, con la excepción de los errores sintácticos corregidos.",
//   userPrompt:
//     " Como agente 4, tu tarea será revisar las correcciones de los errores sintácticos identificados y corregidos en el código JavaScript, asegúrate de que el contenido del código se mantenga intacto con la excepción de corregir los errores. Valida particularmente las partes que pueden contener JSONs mal formateados o strings inesperados.",
//   example: {
//     Input: `javascript
//     let profile = {
//       'name': 'John,
//       'age': 30,
//       'city: 'New York'
//     };`,
//     Output: `
//     let profile = {
//       'name': 'John',
//       'age': 30,
//       'city': 'New York'
//      };
//      `,
//   },
// });

// generatedAgent
//   .execute()
//   .then(console.log)
//   .then(() => {
//     console.log("¡Creación del prompt completada!");
//   });
