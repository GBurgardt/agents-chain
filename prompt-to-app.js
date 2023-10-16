import { AgentCreator } from "./models/agent-creator.js";

import {
  containsArray,
  extractArrayFromString,
} from "./services/creator-service.js";

// const test = `
// Agentes: [
//     "Agente 1: Analiza el artículo académico y extrae los puntos clave del texto.",
//     "Agente 2: Toma los puntos clave y los reestructura para crear publicaciones breves y atractivas para las redes sociales.",
//     "Agente 3: Crea una versión simplificada y comprensible de la terminología académica utilizada en el artículo.",
//     "Agente 4: Integra los puntos clave y los términos simplificados en un formato adecuado para su publicación en las redes sociales.",
//     "Agente 5: Propone imágenes y gráficos relevantes para mejorar la atracción visual de las publicaciones de redes sociales."
//   ]
// `;

// const t2 = extractArrayFromString(test);

// console.log(t2);

if (process.argv.length <= 2) {
  console.error("Por favor proporciona una afirmación como argumento.");
  process.exit(1);
}

const prompt = process.argv[2];

console.log("prompt", prompt);

const creator = new AgentCreator();
creator.execute({ prompt }).then(console.log);
