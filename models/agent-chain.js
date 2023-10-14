import { Agent } from "./agent.js";

export class AgentChain {
  constructor({ superExplanation, superPrompt }) {
    this.superPrompt = superPrompt;
    this.superExplanation = superExplanation;
    this.agents = [];
  }

  setSuperPrompt(prompt) {
    this.superPrompt = prompt;
  }

  addAgent({ systemPrompt, userPrompt, example }) {
    const agent = new Agent({
      systemPrompt,
      userPrompt,
      example,
      superExplanation: this.superExplanation,
      superPrompt: this.superPrompt,
    });

    this.agents.push(agent);
    return this;
  }

  async execute() {
    let text = this.superPrompt;

    for (let i = 0; i < this.agents.length; i++) {
      const agent = this.agents[i];
      console.log("AGENT: ", i + 1);

      text = await agent.processInput(text);
    }

    return text;
  }
}
