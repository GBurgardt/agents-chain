import {
  containsArray,
  executeAgent,
  extractArrayFromString,
  generateSuperAgent,
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
          "UserPrompt: As Agent 1, your task is to translate the following descriptions into prompts that set the stage for visually impressive designs. These prompts will guide Agent 2 in creating the initial HTML structure",
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
        input: `systemPrompt: Agente 1: Interpreta la descripción o breve texto inicial y la convierte en un prompt optimizado que una IA pueda entender. userPrompt: As Agent 1, your task is to translate the following descriptions into prompts that set the stage for visually impressive designs. These prompts will guide Agent 2 in creating the initial HTML structure`,
        output: `Example: { input: "So, I'm thinking of, like, a user profile thing, right? It needs the basics: title, name, what they do (occupation), how much they make (salary), and a tiny story about them (biography). The field names? They should shout out, like, bold and super visible in a gray that pops. But the info they put in? Keep it chill, smaller and in a standard-weight gray. And hey, let's not forget our phone peeps, it's gotta look good on mobile. So, like, one column when it's tiny and three columns when there's space to spread out. Oh, and throw in light gray lines between the fields, just to keep things tidy and easy to read.", output: "User profile layout: title, name, occupation, salary, biography; Field Names: bold, high-contrast gray; User Data: smaller, standard-weight gray; Design: mobile (1 column), larger screens (3 columns), light gray separators."}`,
      },
      superExplanation: this.superExplanation,
      superPrompt: this.superPrompt,
    });
  }

  superExplanationAgent() {
    return new Agent({
      systemPrompt:
        "A partir del 'prompt' inicial y la lista de agentes proporcionados, crea una 'superExplanation' que describa de manera general el propósito y funcionamiento del superagente y cómo coordina sus sub-agentes.",
      userPrompt:
        "Elabora una explicación cohesiva que describa el objetivo principal del superagente, seguido por una descripción de cómo cada agente contribuye al proceso general.",
      example: {
        input: `
        prompt: Imagina una aplicación donde introduces un breve texto (prompt) y recibes a cambio un componente HTML estilizado con Tailwind CSS. Piensa en ello como tu generador personal de componentes UX.
        agents: [
          "Agente 1: Interpreta la descripción o breve texto inicial y la convierte en un prompt optimizado que una IA pueda entender.",
          "Agente 2: Toma el prompt optimizado y genera un esquema de un componente HTML básico.",
          "Agente 3: Toma el esquema del componente HTML y aplica estilos utilizando Tailwind CSS.",
          "Agente 4: Revisa el componente HTML estilizado y realiza mejoras en el diseño para optimizar la experiencia del usuario."
        ]
        `,
        output: `El superagente es diseñado para transformar una idea o descripción breve en un componente HTML estilizado usando Tailwind CSS. El proceso comienza con el Agente 1, que interpreta y optimiza la descripción inicial para que sea más comprensible para la IA. Luego, el Agente 2 toma ese prompt optimizado y esboza la estructura base del componente HTML. Una vez que la estructura está definida, el Agente 3 entra en acción, aplicando estilos específicos con Tailwind CSS. Finalmente, el Agente 4 revisa y mejora el diseño estilizado para asegurar una óptima experiencia de usuario. Juntos, estos agentes trabajan de manera secuencial y coordinada para convertir una simple idea en un componente visualmente atractivo.`,
      },
      superExplanation: this.superExplanation,
      superPrompt: this.superPrompt,
    });
  }

  createConsolidatedAgent() {
    return new Agent({
      systemPrompt:
        "Detección y corrección de errores de formato en códigos JavaScript que contienen objetos JSON malformateados dentro de strings, además de eliminar aclaraciones adicionales.",
      userPrompt:
        "Tu tarea es analizar el código JavaScript proporcionado. Busca y corrije secciones que contienen objetos JSON malformateados dentro de strings. Además, si hay aclaraciones adicionales después del objeto JSON, elimínalas para dejar solo el código con el objeto JSON correctamente formateado.",
      example: {
        input:
          'let data = \'{"name":"John", "age":30, "city":"New York"}\'; Este código habla de John y su edad y su ciudad',
        output: 'let data = {"name":"John", "age":30, "city":"New York"};',
      },
      superExplanation:
        "Este agente está diseñado para identificar y corregir errores de formato en códigos JavaScript que contienen objetos JSON malformateados dentro de strings. No solo identificará y corregirá los objetos JSON malformateados, sino que también eliminará aclaraciones adicionales presentes en el código para dejar un código limpio y correctamente formateado.",
      superPrompt: this.superPrompt,
    });
  }

  async execute({ prompt }) {
    console.log("Iniciando ejecución del SuperAgente.");

    const agents = extractArrayFromString(
      await executeAgent({
        agent: this.createAgent1(prompt),
        prompt,
        validationFn: containsArray,
      })
    );

    const superExplanationAgent = this.superExplanationAgent();

    const superExplanation = await executeAgent({
      agent: superExplanationAgent,
      prompt: `prompt: '${prompt}', agents: ${JSON.stringify(agents)}`,
      validationFn: response =>
        !response.includes("Disculpas") ||
        response.includes("Error") ||
        response.includes("Sorry"),
    });

    console.log("superExplanation", superExplanation);

    console.log("Resultado del Agente 1:", agents);

    const agent2 = this.createAgent2();
    const agent3 = this.createAgent3();
    const consolidateAgent = this.createConsolidatedAgent();

    const mappedAgents = await Promise.all(
      agents.map(async agentDescription => {
        const userPromptOutput = await executeAgent({
          agent: agent2,
          prompt: agentDescription,
          validationFn: response => {
            return response.includes("UserPrompt:");
          },
        });

        const userPrompt = userPromptOutput.replace("UserPrompt:", "").trim();

        const exampleOutput = await executeAgent({
          agent: agent3,
          prompt: `systemPrompt: '${agentDescription}', userPrompt: '${userPrompt}'`,
          validationFn: response => {
            return response.includes("Example:");
          },
        });

        const example = exampleOutput.replace("Example:", "").trim();
        console.log("example", example);

        const consolidateExample = await executeAgent({
          agent: consolidateAgent,
          prompt: example,
          validationFn: response => {
            return response.includes("{") && response.includes("}");
          },
        });

        console.log("consolidateExample", consolidateExample);

        return {
          systemPrompt: agentDescription,
          userPrompt,
          example,
          consolidateExample,
        };
      })
    );

    // console.log("Mapeo de Agentes:", mappedAgents);

    await generateSuperAgent(mappedAgents, superExplanation);

    // console.log("Finalizando ejecución del SuperAgente.");
  }
}
