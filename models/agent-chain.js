import { Agent } from "./agent.js";

export class AgentChain {
  constructor() {
    this.agents = [];
  }

  addAgent(systemPrompt, userPromptTemplate, example) {
    const agent = new Agent(systemPrompt, userPromptTemplate, example);

    this.agents.push(agent);
    return this;
  }

  async execute(initialText) {
    let text = initialText;
    for (let i = 0; i < this.agents.length; i++) {
      const agent = this.agents[i];
      console.log("AGENT: ", i + 1);

      text = await agent.processInput(text);
    }

    return text;
  }
}
