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

export async function executeAgent(agent, prompt, validationFn) {
  let response = await agent.processInput(prompt);
  while (!validationFn(response)) {
    console.log(
      `Re-procesando respuesta del agente: ${agent.constructor.name}`
    );
    response = await agent.processInput(prompt);
  }
  return response;
}
