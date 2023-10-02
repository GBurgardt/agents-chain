import { AgentChain } from "./models/agent-chain.js";

const superAgente = new AgentChain();

// Agente 1: Extractor de Tema
superAgente.addAgent(
  "Extrae el tema principal de un título proporcionado.",
  "Dado un título, identifica y devuelve el tema principal sin explicaciones o comentarios adicionales.",
  {
    input: "El Futuro de los Coches Eléctricos",
    output: "Coches Eléctricos",
  }
);

// Agente 2: Ideador de Pensamientos Filosóficos al Estilo Musk
superAgente.addAgent(
  "Genera un pensamiento o reflexión filosófica al estilo de Elon Musk, relacionada con el tema principal.",
  "Dado un tema principal, elabora una afirmación reflexiva o filosófica que pareciera ser hecha por Elon Musk, relacionada con el tema, sin necesidad de explicaciones adicionales.",
  {
    input: "Coches Eléctricos",
    output:
      "La verdadera revolución no es solo electrificar vehículos, sino transformar nuestra relación con la movilidad y el planeta.",
  }
);

// Agente 3: Conversor Muskiano
superAgente.addAgent(
  "Transforma la reflexión a un estilo más 'Muskiano', combinando humor, sarcasmo o profundidad de manera casual.",
  "Dada una afirmación reflexiva, transfórmala a un estilo que se asemeje a la voz de Elon Musk en Twitter, sin necesidad de explicaciones adicionales.",
  {
    input:
      "La verdadera revolución no es solo electrificar vehículos, sino transformar nuestra relación con la movilidad y el planeta.",
    output:
      "Electrificar coches es fácil, cambiar nuestra relación con la movilidad y el planeta es el verdadero juego.",
  }
);

// Agente 4: Compresor de Ideas
superAgente.addAgent(
  "Acorta y condensa el mensaje para que encaje en un formato de tweet sin perder su impacto.",
  "Dado un mensaje más extenso, condénsalo en una afirmación corta e impactante adecuada para un tweet sin perder su esencia.",
  {
    input:
      "Electrificar coches es fácil, cambiar nuestra relación con la movilidad y el planeta es el verdadero juego.",
    output:
      "Electrificar coches? Fácil. Reinventar la movilidad para salvar el planeta? Ahí está el desafío.",
  }
);
// Agente 5: Pulidor Estilístico
superAgente.addAgent(
  "Refina el tweet para darle ese toque y carácter típico de Musk, ajustando palabras para que suene auténticamente Elon.",
  "Toma el mensaje condensado y dale un pulido final para que suene como un tweet auténtico de Elon Musk. No se necesitan explicaciones adicionales.",
  {
    input:
      "Electrificar coches? Fácil. Reinventar la movilidad para salvar el planeta? Ahí está el desafío.",
    output:
      "¿Electrificar coches? Pan comido. ¿Reinventar la movilidad y salvar el planeta? Sostén mi cohete 🚀.",
  }
);

// Ejecutar SuperAgente con un título de entrada
superAgente.execute("Los aliens").then(result => console.log(result));
