import { Agent } from "./agent.js";

export class AgentChain {
  constructor() {
    this.agents = [];
  }

  setInitialPrompt(prompt) {
    this.initialPrompt = prompt;
  }
  addAgent(systemPrompt, userPromptTemplate, example) {
    const agent = new Agent(systemPrompt, userPromptTemplate, example);

    this.agents.push(agent);
    return this;
  }
  async execute(initialText) {
    this.setInitialPrompt(initialText); // Set the initial prompt
    let text = initialText;
    for (let i = 0; i < this.agents.length; i++) {
      const agent = this.agents[i];
      console.log("AGENT: ", i + 1);

      text = await agent.processInput(text, this.initialPrompt); // Pass the initial prompt to each agent
    }

    return text;
  }
}
