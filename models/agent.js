export class Agent {
  constructor(systemPrompt, userPrompt, example, gptService) {
    this.systemPrompt = systemPrompt;
    this.userPrompt = userPrompt;
    this.example = example;
    this.gptService = gptService;
  }

  async processInput(text) {
    const inputMessage = this.createMessage(text);
    const response = await this.gptService.getApiResponse(inputMessage);
    console.log("#".repeat(50));
    console.log("response", response);
    console.log("#".repeat(50));
    return response;
  }

  createMessage(text) {
    return [
      { role: "system", content: this.systemPrompt },
      { role: "user", content: this.userPromptFormat(text) },
    ];
  }

  userPromptFormat(text) {
    return `${this.userPrompt}\nExample:\nInput: "${this.example.input}"\nOutput: "${this.example.output}"\nInput: ${text}\n`;
  }
}
