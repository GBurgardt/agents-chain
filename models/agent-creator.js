import {
  containsArray,
  executeAgent,
  extractArrayFromString,
} from "../services/creator-service.js";
import { Agent } from "./agent.js";

export class AgentCreator {
  constructor() {
    this.superExplanation =
      'El "superagente" opera en un proceso coordinado donde diferentes sub-agentes trabajan en secuencia para descomponer y elaborar sobre una tarea dada. Estos pasos son: 1) **Divisor de agentes** - Este agente toma el input inicial y lo fragmenta en sub-tareas específicas (agentes), cada uno con una tarea más simple bien definida; 2) **Generador de Descripciones** - A partir de las tareas definidas por Pookie, este agente elabora una descripción clara para cada tarea (este agente se ejecuta en bucle para cada agente anterior); 3) **Creador de Prompts** - Utilizando las descripciones previamente creadas, genera prompts que sirven de guía para los usuarios y el sistema(este agente y el 4 se ejecuta en bucle para cada descripción anterior); 4) **Generador de Ejemplos** - Basándose en estos prompts y en el contexto global, este último agente produce ejemplos prácticos que muestran cómo se llevaría a cabo la tarea.';
  }

  createAgent1(superPrompt) {
    this.superPrompt = superPrompt;

    return new Agent({
      systemPrompt:
        "Basándote en el input, propón una serie de sub-tareas, cada una diseñada específicamente para ser resuelta por GPT. Estas sub-tareas actuarán como 'agentes' que resolverán un aspecto específico del input inicial.",
      userPrompt:
        "Analiza el objetivo principal y desglosa en consultas específicas para GPT, de manera que cada consulta pueda ser abordada como un 'agente' individual.",
      example: {
        input:
          "Imagina una aplicación donde introduces un breve texto (prompt) y recibes a cambio un componente HTML estilizado con Tailwind CSS. Piensa en ello como tu generador personal de componentes UX.",
        output: `
          Agentes: [
            "Agente 1: Interpreta la descripción o breve texto inicial y la convierte en un prompt optimizado que una IA pueda entender.",
            "Agente 2: Toma el prompt optimizado y genera un esquema de un componente HTML básico.",
            "Agente 3: Toma el esquema del componente HTML y aplica estilos utilizando Tailwind CSS.",
            "Agente 4: Revisa el componente HTML estilizado y realiza mejoras en el diseño para optimizar la experiencia del usuario."
          ]
          `,
      },

      superExplanation: this.superExplanation,
      superPrompt,
    });
  }

  createAgent2() {
    return new Agent({
      systemPrompt:
        "Basándote en la descripción del agente, genera un UserPrompt que proporcione instrucciones claras para ejecutar la tarea asociada. El UserPrompt debe guiar en cómo llevar a cabo la tarea específica.",
      userPrompt:
        "Convierte la tarea descrita en instrucciones concisas para que gpt pueda comprender y actuar sobre ella.",
      example: {
        input:
          "Agente 1: Interpreta la descripción o breve texto inicial y la convierte en un prompt optimizado que una IA pueda entender.",
        output:
          'UserPrompt: "As Agent 1, your task is to translate the following descriptions into prompts that set the stage for visually impressive designs. These prompts will guide Agent 2 in creating the initial HTML structure"',
      },
      superExplanation: this.superExplanation,
      superPrompt: this.superPrompt,
    });
  }

  createAgent3() {
    return new Agent({
      systemPrompt:
        "Basándote en el SystemPrompt y UserPrompt proporcionados, genera un ejemplo que ilustre cómo se llevaría a cabo la tarea en acción. El ejemplo debe ser claro y aplicable al contexto descrito.",
      userPrompt:
        "Crea un ejemplo concreto que muestre cómo se ejecutaría la tarea basándote en los prompts proporcionados. El ejemplo debe ser ilustrativo y demostrar cómo se aplicaría en una situación real.",
      example: {
        input: `systemPrompt: Agente 1: Interpreta la descripción o breve texto inicial y la convierte en un prompt optimizado que una IA pueda entender. userPrompt: As Agent 1, your task is to translate the following descriptions into prompts that set the stage for visually impressive designs. These prompts will guide Agent 2 in creating the initial HTML structure'
          `,
        output: `Example: { input: "So, I'm thinking of, like, a user profile thing, right? It needs the basics: title, name, what they do (occupation), how much they make (salary), and a tiny story about them (biography). The field names? They should shout out, like, bold and super visible in a gray that pops. But the info they put in? Keep it chill, smaller and in a standard-weight gray. And hey, let's not forget our phone peeps, it's gotta look good on mobile. So, like, one column when it's tiny and three columns when there's space to spread out. Oh, and throw in light gray lines between the fields, just to keep things tidy and easy to read.", output: "User profile layout: title, name, occupation, salary, biography; Field Names: bold, high-contrast gray; User Data: smaller, standard-weight gray; Design: mobile (1 column), larger screens (3 columns), light gray separators."}`,
      },
      superExplanation: this.superExplanation,
      superPrompt: this.superPrompt,
    });
  }

  async execute({ prompt }) {
    console.log("Iniciando ejecución del SuperAgente.");

    const agents = extractArrayFromString(
      await executeAgent(this.createAgent1(prompt), prompt, containsArray)
    );

    console.log("Resultado del Agente 1:", agents);

    const agent2 = this.createAgent2();
    const agent3 = this.createAgent3();

    const mappedAgents = await Promise.all(
      agents.map(async agentDescription => {
        // Obtener userPrompt
        const userPromptOutput = await executeAgent(
          agent2,
          agentDescription,
          response => {
            return response.includes("UserPrompt:");
          }
        );
        console.log("userPromptOutput", userPromptOutput);
        const userPromptMatch = userPromptOutput.match(/UserPrompt: "(.*)"/);
        const userPrompt = userPromptMatch ? userPromptMatch[1] : "";

        // Obtener example
        const exampleOutput = await executeAgent(
          agent3,
          `systemPrompt: '${agentDescription}', userPrompt: '${userPrompt}'`,
          response => {
            return response.includes("Example:");
          }
        );
        console.log("exampleOutput", exampleOutput);
        const exampleMatch = exampleOutput.match(/Example: (.*)/);
        const example = exampleMatch ? exampleMatch[1] : "";

        return {
          systemPrompt: agentDescription,
          userPrompt,
          example,
        };
      })
    );

    console.log("Mapeo de Agentes:", mappedAgents);

    console.log("Finalizando ejecución del SuperAgente.");
  }
}
