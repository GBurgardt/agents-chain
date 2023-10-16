import { GptService } from "../services/gpt-service.js";

export class Agent {
  constructor({
    systemPrompt,
    userPrompt,
    example,
    superExplanation,
    superPrompt,
  }) {
    this.systemPrompt = systemPrompt;
    this.userPrompt = userPrompt;
    this.example = example;
    this.superExplanation = superExplanation;
    this.superPrompt = superPrompt;
  }

  async processInput(prompt) {
    const gptService = new GptService(process.env.OPENAI_API_KEY);
    const inputMessage = this.createMessage(prompt);

    const response = await gptService.getApiResponse(inputMessage);

    console.log("response", response);

    return response;
  }

  createMessage(prompt) {
    const systemPrompt = `${this.systemPrompt}
    Explicacion: ${this.superExplanation}
    Objetivo Final: ${this.superPrompt}
    `;

    console.log([
      { role: "system", content: systemPrompt },
      { role: "user", content: this.userPromptFormat(prompt) },
    ]);

    return [
      { role: "system", content: systemPrompt },
      { role: "user", content: this.userPromptFormat(prompt) },
    ];
  }

  userPromptFormat(currentPrompt) {
    return `${this.userPrompt}
    Example:
    Input: "${this.example.input}"
    Objetivo final: ${this.superPrompt}
    Output: "${this.example.output}"

    Input: ${currentPrompt}
    Objetivo final: ${this.superPrompt}
    Output: `;
  }
}

// userPromptFormat(currentPrompt) {
//   return `${this.userPrompt}
//   Example:
//   Superagent Explanation: ${this.superExplanation}
//   Superagent Prompt (superprompt): ${this.superPrompt}
//   Input: "${this.example.input}"
//   Output: "${this.example.output}"

//   Superagent Explanation: ${this.superExplanation}
//   Superagent Prompt (superprompt): ${this.superPrompt}
//   Input: ${currentPrompt}
//   Output: `;
// }
