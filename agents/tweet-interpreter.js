import { AgentChain } from "../models/agent-chain.js";

const userStatement = process.argv[2];

const generatedAgent = new AgentChain({
  superExplanation:
    "Este es un agente generado automáticamente basado en el input del usuario.",
  superPrompt: userStatement,
});

// Agente Agente 1
generatedAgent.addAgent({
  systemPrompt:
    "Agente 1: Analiza el contenido del tweet y detecta las palabras clave relacionadas con la personalidad, la temática y el motivo del tweet.",
  userPrompt:
    " Como Agente 1, tu tarea es analizar el contenido del siguiente tweet, detectar las palabras clave y elaborar sobre la personalidad, la temática y el motivo detrás de este. Este análisis servirá como base para el Agente 2, quien deberá explicar en detalle y proporcionar todo el contexto necesario.",
  example: {
    input: "Doge Barking at the moon",
    output:
      "Personalidad: Elon Musk, CEO de Tesla y SpaceX; Temática: criptomonedas, específicamente Dogecoin; Motivo: posible indicación de interés o apoyo a Dogecoin y su creciente popularidad. Palabras clave: 'Doge', 'barking', 'moon'.",
  },
});

// Agente Agente 2
generatedAgent.addAgent({
  systemPrompt:
    "Agente 2: Investiga el contexto adecuado en el cual el tweet fue publicado, teniendo en cuenta las palabras clave identificadas previamente, así como las discusiones y eventos contemporáneos relevantes.",
  userPrompt:
    " As Agent 2, your task is to research the appropriate context in which the given tweet was posted. You should consider prominent keywords identified and relevant contemporary discussions and events. Your findings will aid in the in-depth understanding and explanation of the tweet.",
  example: {
    input:
      "Elon Musk's tweet: 'The light of the stars, vast and void, fills the emptiness of space with infinite potential. #Mars2025'",
    output:
      "Contextual analysis and research: Elon Musk, founder of SpaceX, tweeted about 'the light of the stars', 'vast and void', and 'Mars2025'. This tweet is likely in the context of SpaceX's mission to colonize Mars. The hashtag 'Mars2025' refers to their goal to send human missions to Mars by the year 2025. The 'light of the stars' and 'vast and void' may metaphorically express the magnitude of the project and the undefined potential it holds. Contemporary debates revolve around the feasibility of the timeline and the ethical implications of colonizing Mars.",
  },
});

// Agente Agente 3
generatedAgent.addAgent({
  systemPrompt:
    "Agente 3: Descompone el tweet en partes más pequeñas (sus frases y palabras clave) y genera una traducción simple y directa de cada elemento.",
  userPrompt:
    " Como el Agente 3, tu tarea es descomponer el tweet en segmentos más manejables, tocando cada frase y palabras clave por separado. A partir de ahí, tu objetivo es generar una traducción sencilla y directa para cada parte identificada del tweet.",
  example: {
    Input:
      '@elonmusk: "Falcon flew perfectly, Dragon docks with Space Station in ~19 hours" ',
    Output:
      "{ 'Falcon flew perfectly': 'El Falcon voló perfectamente', 'Dragon docks with Space Station': 'Dragon se acopla con la Estación Espacial', 'in ~19 hours': 'en ~19 horas'}",
  },
});

// Agente Agente 4
generatedAgent.addAgent({
  systemPrompt:
    "Agente 4: Crea una explicación detallada utilizando la traducción simple, la información del contexto y cualquier otra información meta, como los posibles subtextos, referencias culturales, chistes, etc.",
  userPrompt:
    " Como el Agente 4, tu tarea es generar una explicación detallada del tweet, utilizando la información proporcionada por los agentes anteriores, incluyendo el contexto relevante, subtextos, referencias culturales, chistes, etc. Tu objetivo es proporcionar un análisis exhaustivo del tweet para su completa comprensión.",
  example: {
    input:
      "Tweet: 'Am considering taking Tesla private at $420. Funding secured. - Elon Musk'",
    output:
      "El tweet de Elon Musk, 'Estoy considerando hacer privada a Tesla a $420. Financiamiento asegurado.' implica que Elon estaba considerando retirar a Tesla de la bolsa de valores y convertirla en una empresa privada, poniendo el precio de la acción en $420. 'Funding secured' significa que ya ha asegurado la financiación necesaria para hacerlo. Esta declaración creó una gran conmoción y se convirtió en un evento significativo tanto para Tesla como para el mundo de las finanzas en general. Los detalles adicionales y las posibles consecuencias para Musk y Tesla debido a este tweet es el contenido de análisis adicional y relevante a partir de este punto.",
  },
});

generatedAgent
  .execute()
  .then(console.log)
  .then(() => {
    console.log("¡Creación del prompt completada!");
  });
