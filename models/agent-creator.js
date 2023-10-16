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
          '"Agente 1: Interpreta la descripción o breve texto inicial y la convierte en un prompt optimizado que una IA pueda entender."',
        output:
          'UserPrompt: "As Agent 1, your task is to translate the following descriptions into prompts that set the stage for visually impressive designs. These prompts will guide Agent 2 in creating the initial HTML structure"',
      },
    });
  }

  async execute({ prompt }) {
    console.log("Iniciando ejecución del SuperAgente.");

    const agents = extractArrayFromString(
      await executeAgent(this.createAgent1(prompt), prompt, containsArray)
    );

    console.log("Resultado del Agente 1:", agents);

    console.log("Finalizando ejecución del SuperAgente.");
  }
}

// Descripciones: [
//   "As Agent 1, your task is to translate the following descriptions into prompts that set the stage for visually impressive designs. These prompts will guide Agent 2 in creating the initial HTML structure",
//   "As Agent 2, you are entrusted with the crucial task to create the foundational HTML structure for the described elements and enhancing that HTML. Apply expert knowledge in UI/UX design, ensuring that if images are used, their 'alt' descriptions are detailed and comprehensive, allowing anyone to vividly understand the image's content. You will work on creating a visually impressive HTML structure that aligns with modern design practices. Your work sets the stage for Agent 3, who will apply the finishing touches using Tailwind CSS. Ensure your output is focused purely on the create and enhanced HTML without any added explanations after the HTML",
//   "As Agent 3, you hold the key role of finalizing the design by transforming the improved HTML provided by Agent 3 into a visually stunning representation using Tailwind CSS. Your expertise will breathe life into the design, making it both beautiful and impressive. Collaborate with the previous agents, and make sure the final HTML embodies the described style. Keep your output focused on the enhanced HTML without additional explanations.",
//   "As Agent 4, you are entrusted with the crucial task to create the improve and already HTML with tailwind. Applying expert knowledge in UI/UX design, you will work on creating a visually impressive HTML with modern design practices. And particulary, should be intuitive, and without design errors. Always use Tailwind CSS. Ensure your output is focused purely on the create and ImproveDesing html without any added explanations after the HTML."
// ]
