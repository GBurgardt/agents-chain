import { AgentChain } from "./models/agent-chain.js";

const userStatement = process.argv[2];

const generatedAgent = new AgentChain({
  superExplanation:
    "El superagente se ha creado con el objetivo de analizar y responder a un tweet, destacando el estilo de comunicación comprensible y directo de Elon Musk y Charles Bukowski. El primer agente, Agente 1, desempeña un papel crucial en la descomposición del tweet en cuestión. Analiza y detalla el mensaje, proporcionando una explicación más extensa y contextualizada de su contenido. Con esta elaboración clara y precisa, el segundo agente, Agente 2, puede intervenir. Este agente utiliza su entendimiento del comunicativo de Musk y Bukowski para diseñar una respuesta que encapsule sus estilos únicos: explicar de manera intuitiva y descomplicar al estilo de Elon Musk, y ser directo y pragmático, sin rodeos, al estilo de Bukowski. Este enfoque coordinado permite al superagente interactuar con el tweet de una manera significativa, integral y coherente.",
  superPrompt: userStatement,
});
// Agente Agente 1
generatedAgent.addAgent({
  systemPrompt:
    "Agente 1: Analiza y descompone el tweet para entender mejor el mensaje y el contexto del texto. Desarrolla una explicación más detallada y contextualizada del tweet.",
  userPrompt:
    " Como Agente 1, tu tarea es analizar y descomponer el tweet proporcionado. Intenta entender el mensaje principal y el contexto en el que se enmarca. Tu objetivo es elaborar una explicación clara y contextualizada que permita desentrañar el contenido del tweet.",
  example: {
    input:
      "@ElonMusk: Just had a great chat with Bukowski. His perspective on life and art is beautifully simplistic. Cutting through noise and seeing the essence is an invaluable trait. #Bukowski #LifeLessons",
    output:
      "El tweet de Elon Musk se refiere a una reciente conversación que ha tenido con Charles Bukowski. Expresa admiración por la perspectiva de Bukowski sobre la vida y el arte, que describe como 'hermosamente simplista'. Según Musk, esta capacidad de eliminar el ruido y ver la esencia es una facultad inestimable. Este comentario, además, puede ser una alusión a su propio enfoque en sus proyectos, donde busca mantener las cosas simples y centrarse en lo esencial. El tweet, etiquetado con #Bukowski #LifeLessons, también sugiere que Musk ve estos intercambios no sólo como simples charlas, sino como lecciones de vida.",
  },
});

// Agente Agente 2
generatedAgent.addAgent({
  systemPrompt:
    "Agente 2: Diseñar una respuesta al tweet, siguiendo los estilos de comunicación de Elon Musk y Charles Bukowski -descomplicando y explicando de manera intuitiva (Elon Musk), y siendo directo y pragmático, sin perder tiempo en rodeos (Charles Bukowski). Y además, usando sabiamente el resultado del agente 1, el cual se ocupó de analizar y descomponer el tweet para entenderlo mejor.",
  userPrompt:
    "Agente 2, has recibido el análisis detallado del tweet proporcionado por el Agente 1. Ahora, es tu turno de perfeccionarlo. Combina el pragmatismo de Bukowski y la claridad de Musk para proporcionar una respuesta que simplifique y mejore la interpretación inicial. Sé directo, evita rodeos y apunta al corazón del mensaje",
  example: {
    input:
      "El tweet de Elon Musk se refiere a una reciente conversación que ha tenido con Charles Bukowski. Expresa admiración por la perspectiva de Bukowski sobre la vida y el arte, que describe como 'hermosamente simplista'. Según Musk, esta capacidad de eliminar el ruido y ver la esencia es una facultad inestimable. Este comentario, además, puede ser una alusión a su propio enfoque en sus proyectos, donde busca mantener las cosas simples y centrarse en lo esencial. El tweet, etiquetado con #Bukowski #LifeLessons, también sugiere que Musk ve estos intercambios no sólo como simples charlas, sino como lecciones de vida",
    output:
      "Musk charló con Bukowski y admira su visión simple y directa sobre la vida. Esa habilidad de ver lo esencial, eliminando lo innecesario, es algo que Musk valora y aplica. No es solo una charla; es una lección de vida.",
  },
});

generatedAgent
  .execute()
  .then(console.log)
  .then(() => {
    console.log("¡Creación del prompt completada!");
  });
