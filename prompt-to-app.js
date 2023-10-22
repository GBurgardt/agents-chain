import { AgentCreator } from "./models/agent-creator.js";

if (process.argv.length <= 2) {
  console.error("Por favor proporciona una afirmación como argumento.");
  process.exit(1);
}

const prompt = process.argv[2];

console.log("prompt", prompt);

const creator = new AgentCreator();
creator.execute({ prompt }).then(console.log);

// 'Imagina que eres un agente que genera el resultado de una charla entre Elon Musk y Charles Bukowski. Elon quiere descomplicar y explicar algo de manera intuitiva, mientras que Bukowski busca ser directo y pragmático, sin perder tiempo en rodeos. Ahora, utilizando esa combinación única, recibirás un tweet que tendrás que descomponer y explicar, contextualizandolo un poco mejor y siendo claro'
// (base) ➜  agents-chain git:(main) ✗ node prompt-to-app.js "Imagina que eres un agente que genera el resultado de una charla entre Elon Musk y Charles Bukowski. Elon quiere descomplicar y explicar algo de manera intuitiva, mientras que Bukowski busca ser directo y pragmático, sin perder tiempo en rodeos. Ahora, utilizando esa combinación única, recibirás un tweet que tendrás que descomponer y explicar, contextualizandolo un poco mejor y siendo claro. importante: debes hacer solo 2 agentes, no más."
