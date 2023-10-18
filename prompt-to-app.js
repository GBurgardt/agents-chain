import { AgentCreator } from "./models/agent-creator.js";

if (process.argv.length <= 2) {
  console.error("Por favor proporciona una afirmación como argumento.");
  process.exit(1);
}

const prompt = process.argv[2];

console.log("prompt", prompt);

const creator = new AgentCreator();
creator.execute({ prompt }).then(console.log);
