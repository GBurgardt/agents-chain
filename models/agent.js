import { GptService } from "../services/gpt-service.js";

export class Agent {
  constructor(systemPrompt, userPrompt, example) {
    this.systemPrompt = systemPrompt;
    this.userPrompt = userPrompt;
    this.example = example;
  }

  async processInput(text, initialPrompt, prevAgentFeedback = null) {
    const gptService = new GptService(process.env.OPENAI_API_KEY);
    const inputMessage = this.createMessage(
      text,
      initialPrompt,
      prevAgentFeedback
    );
    const response = await gptService.getApiResponse(inputMessage);

    // Suponiendo que la respuesta incluye tanto el feedback como el resultado real, puedes separarlos.
    const [result, feedback] = this.parseResponse(response);

    this.feedback = feedback; // Guarda el feedback para el próximo agente.

    console.log("#".repeat(50));
    console.log("response", response);
    console.log("#".repeat(50));

    return result;
  }

  createMessage(text, initialPrompt, prevAgentFeedback) {
    let systemContent = this.systemPrompt;

    // Agrega el feedback del agente anterior si existe.
    if (prevAgentFeedback) {
      systemContent += `\nNota del Agente Anterior: ${prevAgentFeedback}`;
    }

    return [
      { role: "system", content: systemContent },
      { role: "user", content: this.userPromptFormat(text, initialPrompt) },
    ];
  }

  parseResponse(response) {
    // Aquí, estás dividiendo la respuesta suponiendo que viene en el formato "resultado|feedback".
    const [result, feedback] = response.split("|");
    return [result, feedback];
  }

  userPromptFormat(text, initialPrompt) {
    return `${this.userPrompt}\nExample:\nInput: "${this.example.input}"\nOutput: "${this.example.output}"\nInitial Prompt: ${initialPrompt}\nCurrent Input: ${text}\n`;
  }
}
