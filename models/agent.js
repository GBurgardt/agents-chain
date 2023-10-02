import { GptService } from "../services/gpt-service.js";

export class Agent {
  constructor(systemPrompt, userPrompt, example) {
    this.systemPrompt = systemPrompt;
    this.userPrompt = userPrompt;
    this.example = example;
  }

  async processInput(text, initialPrompt) {
    const gptService = new GptService(process.env.OPENAI_API_KEY);
    const inputMessage = this.createMessage(text, initialPrompt); // pass the initial prompt to createMessage

    const response = await gptService.getApiResponse(inputMessage);
    console.log("#".repeat(50));
    console.log("response", response);
    console.log("#".repeat(50));
    return response;
  }

  createMessage(text, initialPrompt) {
    return [
      { role: "system", content: this.systemPrompt },
      { role: "user", content: this.userPromptFormat(text, initialPrompt) }, // use the initial prompt in userPromptFormat
    ];
  }

  userPromptFormat(text, initialPrompt) {
    return `${this.userPrompt}\nExample:\nInput: "${this.example.input}"\nOutput: "${this.example.output}"\nInitial Prompt: ${initialPrompt}\nCurrent Input: ${text}\n`;
  }
}
