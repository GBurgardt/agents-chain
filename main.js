import { getRefactorAgent } from "./agents/refactor-agent.js";

const agentChain = getRefactorAgent();

agentChain
  .execute(
    `class AgentChain {
      constructor() {
        this.agents = [];
      }
    
      addAgent(systemPrompt, userPromptTemplate, example, gptService) {
        const agent = new Agent(
          systemPrompt,
          userPromptTemplate,
          example,
          gptService
        );
    
        this.agents.push(agent);
        return this; // Permite encadenar
      }
    
      async execute(initialText) {
        let text = initialText;
        for (let i = 0; i < this.agents.length; i++) {
          const agent = this.agents[i];
          console.log("AGENT INDEX: ", i + 1);
    
          text = await agent.processInput(text);
        }
    
        return text;
      }
    }`
  )
  .then(result => {
    // console.log(result);
  });
