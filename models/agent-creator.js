import { containsArray } from "../services/creator-service.js";
import { Agent } from "./agent.js";

export class AgentCreator {
  constructor() {
    this.superExplanation =
      'El "superagente" opera en un proceso coordinado donde diferentes sub-agentes trabajan en secuencia para descomponer y elaborar sobre una tarea dada. Estos pasos son: 1) **Divisor de agentes** - Este agente toma el input inicial y lo fragmenta en sub-tareas específicas (agentes), cada uno con una tarea más simple bien definida; 2) **Generador de Descripciones** - A partir de las tareas definidas por Pookie, este agente elabora una descripción clara para cada tarea (este agente se ejecuta en bucle para cada agente anterior); 3) **Creador de Prompts** - Utilizando las descripciones previamente creadas, genera prompts que sirven de guía para los usuarios y el sistema(este agente y el 4 se ejecuta en bucle para cada descripción anterior); 4) **Generador de Ejemplos** - Basándose en estos prompts y en el contexto global, este último agente produce ejemplos prácticos que muestran cómo se llevaría a cabo la tarea.';
  }

  createAgent1(superPrompt) {
    return new Agent({
      systemPrompt: "Divide un input inicial en varias tareas específicas.",
      userPrompt: "Identifica y divide la tarea en sub-tareas más manejables.",
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

  async execute({ prompt }) {
    const agent1 = this.createAgent1(prompt);

    let resp1 = await agent1.processInput(prompt);

    while (!containsArray(resp1)) {
      resp1 = await agent1.processInput(prompt);
    }

    console.log("resp1", resp1);
  }
}
