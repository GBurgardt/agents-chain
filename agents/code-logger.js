
import { AgentChain } from "./models/agent-chain.js";

const userStatement = process.argv[2];

const generatedAgent = new AgentChain({
    superExplanation: "El superagente tiene la tarea de incorporar logs inteligentes a un código de manera limpia, útil, simple y pragmática, asegurando que no se omitan datos cruciales y que no consuman demasiado espacio en la consola. El primer agente en nuestra secuencia, el Agente 1, descompone la solicitud original para entender exactamente qué tipo de información necesita ser capturada en los logs. Luego, el Agente 2 toma esta información y diseña un sistema de log simple y pragmático que se ajuste al requerimiento. Después, el Agente 3 optimiza el sistema de log que el Agente 2 ha creado, con el objetivo de minimizar el consumo de espacio en la consola sin sacrificar la utilidad o funcionalidad de los logs. Finalmente, el Agente 4 revisa el sistema de log implementado para asegurarse de que todos los datos cruciales están siendo capturados y que el sistema está cumpliendo con su objetivo de forma efectiva. A través de esta secuencia ordenada de tareas, nuestro superagente es capaz de crear un sistema de logs inteligentes a medida, satisfaciendo plenamente la solicitud original.",
    superPrompt: userStatement,
});


// Agente Agente 1
generatedAgent.addAgent({
    systemPrompt: "Agente 1: Descompone la solicitud de logs inteligentes para entender qué tipo de información necesita ser capturada.",
    userPrompt: " Como Agente 1, tu tarea es descomponer la solicitud inicial en múltiples sub-tareas. En este caso, necesitamos entender cómo deberían ser los 'logs inteligentes' que se desean incorporar en el código. Deben ser limpios, útiles, simples y pragmáticos, evitando faltar datos cruciales y evitar un consumo excesivo en la consola. Basándose en estos requisitos, identifica las características y funciones clave que necesitas abordar.",
    example: { input: "Necesitamos incorporar logs 'inteligentes' a nuestro código. Estos deben ser limpios, útiles y sencillos, cubriendo los datos esenciales sin sobrecargar la consola.", output: "Subtareas identificadas: 1. Definir 'datos cruciales' que los logs deben capturar. 2. Diseñar una estructura de logs 'limpia' y 'útil'. 3. Asegurar que los logs sean 'simples' y 'pragmáticos'. 4. Optimizar los logs para que no consuman demasiado espacio en la consola.},
});

// Agente Agente 2
generatedAgent.addAgent({
    systemPrompt: "Agente 2: Diseña un sistema de log simple y pragmático basado en la información requerida identificada por el Agente 1.",
    userPrompt: " As Agent 2, your task is to design a simplistic and pragmatic logging system, based on the task fragments and required details identified by Agent 1. These logs should be clean, useful, and should not consume too much space in the console, while ensuring no crucial data is missed.",
    example: `" { input: "User profile layout: title, name, occupation, salary, biography; Field Names: bold, high-contrast gray; User Data: smaller, standard-weight gray; Design: mobile (1 column), larger screens (3 columns), light gray separators.", output: "const logger = require('simple-node-logger').createSimpleLogger('project.log'); logger.info('User profile layout designed: title, name, occupation, salary, biography'); logger.info('Field Names: bold, high-contrast gray'); logger.info('User Data: smaller, standard-weight gray'); logger.info('Design: mobile (1 column), larger screens (3 columns), light gray separators');"}"

Input: systemPrompt: 'Agente 3: Crea escenarios detallados que muestran cómo agregar e implementar estos registros inteligentes en un código.', userPrompt: 'As Agent 3, your task is to create detailed scenarios that illustrate how to incorporate and implement these smart logs into code. Base these scenarios on the detailed log system designed by Agent 2.'
Objetivo final: Quiero un super agente que incorpore logs inteligentes a un código. Estos logs deben ser limpios, útiles, simples y pragmáticos, asegurándose de que no falten datos cruciales y que no consuman demasiado espacio en la consola
Output: "Example: { input: 'const logger = require('simple-node-logger').createSimpleLogger('project.log'); logger.info('User profile layout designed: title, name, occupation, salary, biography'); logger.info('Field Names: bold, high-contrast gray'); logger.info('User Data: smaller, standard-weight gray'); logger.info('Design: mobile (1 column), larger screens (3 columns), light gray separators');', output: '"Upon completion of each design task, logs are created. For instance, after designing the user profile layout, the system logs 'User profile layout designed: title, name, occupation, salary, biography'. Similarly, detailed logs are created for field names, user data, and design characteristics."' }"`,
});

// Agente Agente 3
generatedAgent.addAgent({
    systemPrompt: "Agente 3: Optimiza el sistema de log para asegurarse de que no consume demasiado espacio en la consola.",
    userPrompt: " Como Agente 3, su tarea es optimizar el sistema de registro del código, asegurándose de que los logs sean limpios y útiles, sin consumir demasiado espacio en la consola.",
    example: `" {input: "Asegúrate de que los logs sean limpios y útiles, sin ser demasiado pródigos en la consola. Podemos trabajar en el siguiente código que tiene muchos logs no optimizados: ```const fetchData = async() => { console.log('fetchData: start'); try { console.log('fetchData: try start'); const data = await api.fetch(); console.log(`fetchData: data fetched: ${JSON.stringify(data)}`); console.log('fetchData: try end'); } catch (e) { console.log(`fetchData: error: ${e.message}`); } console.log('fetchData: end'); }; fetchData();```", output: "Optimizamos los logs de la siguiente manera: ``` const fetchData = async () => { console.time('fetchData'); let data; try { data = await api.fetch(); } catch (e) { console.error(`fetchData: error: ${e.message}`); } console.timeEnd('fetchData'); return data; }; fetchData();``` Aquí, hemos reemplazado los logs innecesarios con una función console.time y console.timeEnd que nos dará el tiempo total que tarda la función fetchData en ejecutarse. Y usamos console.error para lograr los errores, lo cual es más práctico." }"`,
});

// Agente Agente 4
generatedAgent.addAgent({
    systemPrompt: "Agente 4: Finalmente, revisa el sistema de log implementado para comprobar que no faltan datos cruciales y está cumpliendo con su objetivo.",
    userPrompt: " Como agente 4, tu tarea es verificar la implementación de los logs inteligentes en el código, asegurándote de que no faltan datos cruciales y que se están cumpliendo los objetivos de simplicidad, utilidad y pragmatismo. Debes también revisar que estos registros no estén consumiendo demasiado espacio en la consola.",
    example: `" { input: "El sistema nos proporciona un log del proceso de registro de usuario. El log muestra el tiempo de duración, los errores encontrados y los datos proporcionados por el usuario. La verificación se realiza en un entorno de prueba, para simular un entorno real.", output: "El log revisado muestra el tiempo de duración del proceso de registro, evidenció errores de validación de correo electrónico al insertar un formato incorrecto. Los datos proporcionados por el usuario aparecen completos. El tamaño del log en consola no obstruye otros procesos y ocupa el espacio esperado."}"`,
});


generatedAgent
    .execute()
    .then(console.log)
    .then(() => {
        console.log("¡Creación del prompt completada!");
    });
