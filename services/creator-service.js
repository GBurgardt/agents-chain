import fs from "fs";

export function extractArrayFromString(str) {
  const match = str.match(/\[([\s\S]*)\]/);

  if (!match || !match[1]) {
    throw new Error("Array not found in string");
  }

  const jsonArray = "[" + match[1].trim() + "]";

  return JSON.parse(jsonArray);
}

export function containsArray(str) {
  return /\[[\s\S]*\]/.test(str);
}

export async function executeAgent({ agent, prompt, validationFn }) {
  let response = await agent.processInput(prompt);
  while (!validationFn(response)) {
    console.log(
      `Re-procesando respuesta del agente: ${agent.constructor.name}`
    );
    response = await agent.processInput(prompt);
  }
  return response;
}

export function generateSuperAgent(mappedAgents, superExplanation) {
  const outputFileName = "GeneratedAgentChain.js";

  let fileContent = `
import { AgentChain } from "./models/agent-chain.js";

const userStatement = process.argv[2];

const generatedAgent = new AgentChain({
    superExplanation: ${superExplanation},
    superPrompt: userStatement,
});

`;

  mappedAgents.forEach(agent => {
    fileContent += `
// Agente ${agent.systemPrompt.split(":")[0]}
generatedAgent.addAgent({
    systemPrompt: "${agent.systemPrompt}",
    userPrompt: ${agent.userPrompt},
    example: \`${agent.example}\`,
});
`;
  });

  fileContent += `

generatedAgent
    .execute()
    .then(console.log)
    .then(() => {
        console.log("¡Creación del prompt completada!");
    });
`;

  fs.writeFileSync(outputFileName, fileContent);

  console.log(`Archivo ${outputFileName} generado con éxito.`);
}
