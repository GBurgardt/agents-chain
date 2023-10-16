import { AgentChain } from "./models/agent-chain.js";

if (process.argv.length <= 2) {
  console.error("Por favor proporciona una afirmación como argumento.");
  process.exit(1);
}

const userStatement = process.argv[2];

const emoArte = new AgentChain({
  superExplanation: `El agente de expresión artística opera en una serie de pasos diseñados para traducir una emoción a distintas expresiones artísticas y finalmente en un prompt visual. Estos pasos son: 1) Identificación de la emoción y su significado; 2) Contextualización de la emoción; 3) Reducción del contexto a una idea central; 4) Traducción de dicha idea a una forma más simplificada; 5) Creación de una propuesta visual; y 6) Optimización del prompt para la IA generativa.`,
  superPrompt: userStatement,
});

// Agente 1: Identificación
emoArte.addAgent({
  systemPrompt: "Describe la emoción dada.",
  userPrompt: "Identifica y describe la emoción.",
  example: {
    input: "Melancolía",
    output: "Sensación de tristeza profunda, añoranza y reflexión.",
  },
});

// Agente 2: Poesía
emoArte.addAgent({
  systemPrompt: "¿Cómo puedes expresar esta emoción en poesía?",
  userPrompt: "Transforma la emoción en un verso poético.",
  example: {
    input: "Melancolía",
    output: "Ecos del ayer, susurros en penumbra.",
  },
});

// Agente 3: Música
emoArte.addAgent({
  systemPrompt: "Sugiere una melodía o instrumento para la emoción.",
  userPrompt: "Elige una melodía o instrumento que represente la emoción.",
  example: {
    input: "Melancolía",
    output: "Violonchelo en tonos graves y lentos.",
  },
});

// Agente 4: Pintura
emoArte.addAgent({
  systemPrompt:
    "Selecciona colores y formas para una pintura basada en la emoción.",
  userPrompt: "Proporciona colores y formas para una pintura.",
  example: {
    input: "Melancolía",
    output: "Tonalidades azules y grises, siluetas difusas.",
  },
});

// Agente 5: Síntesis
emoArte.addAgent({
  systemPrompt:
    "Integra las respuestas artísticas anteriores en una única propuesta visual.",
  userPrompt: "Une las expresiones artísticas en una propuesta visual.",
  example: {
    input: [
      "Ecos del ayer, susurros en penumbra.",
      "Violonchelo en tonos graves y lentos.",
      "Tonalidades azules y grises, siluetas difusas.",
    ],
    output:
      "Una escena nocturna donde una figura solitaria toca el violonchelo bajo un cielo teñido de azul y gris, mientras que sus versos forman sombras en el paisaje.",
  },
});

// Agente 6: Optimización de Prompt
emoArte.addAgent({
  systemPrompt:
    "Basándote en la propuesta visual, crea un prompt optimizado para una IA generativa de imágenes.",
  userPrompt:
    "Diseña un prompt para una IA generativa de imágenes basado en la propuesta visual.",
  example: {
    input:
      "Una escena nocturna donde una figura solitaria toca el violonchelo bajo un cielo teñido de azul y gris, mientras que sus versos forman sombras en el paisaje.",
    output:
      "Nocturno con figura solitaria tocando violonchelo; cielo azul-gris; versos como sombras.",
  },
});

emoArte
  .execute()
  .then(console.log)
  .then(() => {
    console.log("¡Creación del prompt completada!");
  });

emoArte
  .execute()
  .then(console.log)
  .then(() => {
    console.log("¡Análisis completado!");
  });

// const agentTweet = new AgentChain({
//   superExplanation:
//     "El agente de análisis de tweets opera en una serie de pasos diseñados para desglosar y profundizar en la esencia de frases de Twitter: 1) Detecta palabras que son nodos conectores de ideas, evocando imágenes y debates; 2) Ubica estas palabras en el espectro global, identificando su impacto y connotaciones en diferentes culturas y discursos; 3) Establece conexiones con tendencias y eventos actuales, reflejando la relevancia de las palabras en la realidad contemporánea; 4) Condensa el contexto y las relaciones identificadas en una esencia pura y concisa; 5) Concluye con una interpretación que sintetiza toda la información, ofreciendo una perspectiva clara y esclarecedora sobre la frase original y su relación con el mundo.",
//   superPrompt: userStatement,
// });

// // Agent 1
// agentTweet.addAgent({
//   systemPrompt:
//     "Dentro de una frase o enunciado, hay palabras que portan un peso significativo y que abren puertas a discusiones más amplias. Estas palabras son nodos que conectan ideas y evocan imágenes, debates y connotaciones. El objetivo de este agente es descubrir esas palabras y preparar el terreno para un análisis más profundo.",
//   userPrompt:
//     "Analiza la frase presentada, identifica y extrae las palabras o términos que resumen la esencia del mensaje, aquellas que tienen potencial de conectar con temas amplios y generar discusiones significativas en diferentes contextos.",
//   example: {
//     input:
//       "The real fight is not between right and left, but rather between humanists and extinctionists",
//     output:
//       "El término 'fight' sugiere conflicto, tensión y oposición. Mientras que 'right' y 'left' van más allá de simples direcciones, aludiendo a tradiciones políticas y filosóficas que han sido puntos focales en debates ideológicos a lo largo de la historia. Los 'humanists' son aquellos que valoran la vida y la experiencia humanas, mientras que 'extinctionists' puede aludir a aquellos que, por diversas razones, podrían poner en peligro la continuidad y el bienestar humano. Estos términos clave: 'fight', 'right', 'left', 'humanists', y 'extinctionists' encapsulan una confrontación de ideales y valores.",
//   },
// });

// // Agente 2
// agentTweet.addAgent({
//   systemPrompt:
//     "Dada una serie de palabras clave extraídas de una frase, sitúalas en el amplio espectro de temas y debates globales. Contextualiza cómo estas palabras interactúan en el escenario mundial y qué significados más profundos pueden tener en diferentes culturas o discursos.",
//   userPrompt:
//     "Al recibir términos esenciales de una frase, proporciona una perspectiva ampliada, analizando la interacción, connotación y relevancia de estas palabras en un contexto global. Además, identifica posibles debates o discusiones en las que estas palabras podrían ser centrales.",
//   example: {
//     input: "fight, right, left, humanists, extinctionists",
//     output:
//       "El 'fight' evoca luchas globales, no sólo físicas, sino ideológicas. 'Right' y 'Left' son más que direcciones; representan posiciones políticas tradicionales que han moldeado naciones y políticas. A nivel mundial, estos términos pueden variar en significado, pero su raíz en el debate político es universal. 'Humanists' refleja una filosofía centrada en los valores humanos y el bienestar. En contraste, 'extinctionists' podría interpretarse como aquellos que, ya sea por acción o inacción, conducen a resultados destructivos, poniendo en peligro la vida o el bienestar humano en el planeta.",
//   },
// });

// // Agent 3
// agentTweet.addAgent({
//   systemPrompt:
//     "El presente está profundamente influenciado por las tendencias, eventos y movimientos globales. Estas corrientes actuales pueden ser ilustradas, entendidas y discutidas mejor cuando las conectamos con palabras y contextos clave. El propósito de este agente es ser un puente entre el significado profundo de ciertas palabras y la situación mundial contemporánea, resaltando la relación y relevancia mutua.",
//   userPrompt:
//     "Con base en el contexto general proporcionado por las palabras clave, establece conexiones con situaciones, debates o movimientos actuales en el mundo. Ayuda a visualizar cómo estas palabras clave se reflejan o se manifiestan en la realidad contemporánea, y cómo los eventos actuales pueden ser entendidos a través de ellas.",
//   example: {
//     input:
//       "Conflicto ideológico, posiciones políticas tradicionales, defensores de la humanidad, aquellos que podrían llevar a la extinción.",
//     output:
//       "El conflicto ideológico que mencionas se refleja en las crecientes polarizaciones políticas y sociales en muchas partes del mundo. Las posiciones 'right' y 'left', tradicionalmente asociadas con conservadurismo y progresismo, respectivamente, están en constante evolución y discusión en la política global. Actualmente, enfrentamos desafíos como el cambio climático, donde los 'humanists' abogan por la sostenibilidad y protección del planeta y la humanidad, mientras que ciertas políticas o inacciones pueden ser vistas como 'extinctionists', al ignorar o minimizar la amenaza existencial que enfrentamos.",
//   },
// });

// // Agent 4
// agentTweet.addAgent({
//   systemPrompt:
//     "En el flujo constante de información y contexto, es crucial poder destilar mensajes complejos a su esencia más pura. Este proceso de refinamiento permite a las personas entender rápidamente y conectarse con ideas que, de otro modo, podrían ser demasiado abrumadoras. El objetivo de este agente es capturar la esencia de una relación o contexto identificado y presentarlo en una forma simplificada pero significativa.",
//   userPrompt:
//     "Dado un contexto o relación extenso y detallado, reduzca la información a su núcleo más esencial, manteniendo la integridad del mensaje. Piense en ello como la destilación de un pensamiento complejo a su expresión más pura y fundamental.",
//   example: {
//     input:
//       "El conflicto ideológico que mencionas se refleja en las crecientes polarizaciones políticas y sociales en muchas partes del mundo. Las posiciones 'right' y 'left', tradicionalmente asociadas con conservadurismo y progresismo, respectivamente, están en constante evolución y discusión en la política global. Actualmente, enfrentamos desafíos como el cambio climático, donde los 'humanists' abogan por la sostenibilidad y protección del planeta y la humanidad, mientras que ciertas políticas o inacciones pueden ser vistas como 'extinctionists', al ignorar o minimizar la amenaza existencial que enfrentamos.",
//     output:
//       "Polarización ideológica global y lucha entre sostenibilidad y amenaza existencial.",
//   },
// });

// // Agent 5
// agentTweet.addAgent({
//   systemPrompt:
//     "Después de analizar una frase, identificar palabras clave, contextualizarlas globalmente, relacionarlas con tendencias actuales y destilar el mensaje, el siguiente paso es generar una interpretación final que encapsule todo el análisis previo en un mensaje conciso, pero detallado. Este agente, como punto culminante, debe sintetizar toda la información, brindando una explicación clara y sencilla que permita una comprensión profunda de la frase original y su importancia en el contexto global.",

//   userPrompt:
//     "Basándote en el análisis y la destilación previa, genera una conclusión o interpretación que proporcione una visión completa y esclarecedora del tema en cuestión. Esta interpretación debería ayudar a cualquier persona a comprender no solo la esencia del mensaje original, sino también su relevancia y conexión con el mundo en su conjunto.",

//   example: {
//     input:
//       "Polarización ideológica global y lucha entre sostenibilidad y amenaza existencial.",
//     output:
//       "Estamos en un momento crucial de la historia humana, donde la división ideológica entre diferentes corrientes políticas y filosóficas está alcanzando puntos álgidos en todo el mundo. Esta polarización va más allá de simples etiquetas de 'derecha' o 'izquierda'. En el núcleo de estos debates se encuentra la lucha entre aquellos que buscan priorizar la sostenibilidad y la preservación de la humanidad, y aquellos cuyas acciones o inacciones pueden llevarnos hacia posibles desenlaces catastróficos. Es imperativo que reconozcamos estas tensiones y trabajemos juntos para garantizar un futuro seguro y próspero para las próximas generaciones.",
//   },
// });

// const agentChain = new AgentChain({
//   superExplanation:
//     "La cadena de agentes procesa un fragmento literario a través de cinco etapas distintas: 1) Identifica el origen literario del fragmento; 2) Proporciona un contexto general del contenido citado; 3) Reduce este contexto a una idea central; 4) Traduce dicha idea a una forma aún más simplificada; y 5) Genera una conclusión pragmática basada en todas las simplificaciones anteriores. Esta secuencia asegura una interpretación profunda y clara del fragmento inicial, desde su origen hasta una comprensión práctica.",
//   superPrompt: userStatement,
// });

// // Agent 1: Identificador de Origen Literario
// agentChain.addAgent({
//   systemPrompt:
//     "Determina si la frase o expresión proporcionada por el usuario proviene de una obra literaria conocida.",
//   userPrompt:
//     "Dado un fragmento, identifica si es una cita de una obra literaria y, de ser así, devuelve el título y autor.",
//   example: {
//     input: "Lo que no te mata, te hace más fuerte.",
//     output: "Ecce Homo, Friedrich Nietzsche",
//   },
// });

// // Agent 2: Contextualizador de la Cita
// agentChain.addAgent({
//   systemPrompt: "Proporciona el contexto general en el que se dijo la cita.",
//   userPrompt:
//     "Recibe el título y autor de la obra y devuelve un resumen contextual del fragmento citado.",
//   example: {
//     input: "Ecce Homo, Friedrich Nietzsche",
//     output:
//       "Nietzsche reflexiona sobre las adversidades de la vida y cómo enfrentarlas.",
//   },
// });

// // Agent 3: Primer Reductor
// agentChain.addAgent({
//   systemPrompt: "Reduce el contexto a una idea central.",
//   userPrompt:
//     "Toma el contexto y lo destila a un concepto clave o idea central.",
//   example: {
//     input:
//       "Nietzsche reflexiona sobre las adversidades de la vida y cómo enfrentarlas.",
//     output: "Superación ante las adversidades.",
//   },
// });

// // Agent 4: Segundo Reductor
// agentChain.addAgent({
//   systemPrompt: "Traduce la idea central a una forma más simplificada.",
//   userPrompt:
//     "Toma la idea central y la simplifica aún más, preparando el camino para una conclusión directa.",
//   example: {
//     input: "Superación ante las adversidades.",
//     output: "Crecer enfrentando desafíos.",
//   },
// });

// // Agent 5: Generador de Conclusión Extendida
// agentChain.addAgent({
//   systemPrompt:
//     "Ofrece una explicación directa y pragmática del fragmento original basándose en las simplificaciones previas.",
//   userPrompt:
//     "Transforma el concepto simplificado en una idea comprensiva y fácil de entender.",
//   example: {
//     input: "Crecer enfrentando desafíos.",
//     output:
//       "Cuando enfrentamos problemas y desafíos en la vida, estos nos dan la oportunidad de aprender, crecer y volvernos más fuertes.",
//   },
// });

// agentChain
//   .execute()
//   .then(console.log)
//   .then(() => {
//     console.log("¡Terminado!");
//   });

// // Agent 1: Extractor de Tema
// agentChain.addAgent(
//   "Identifica el tema clave de la afirmación proporcionada por el usuario.",
//   "Dado un enunciado, identifica y devuelve el tema principal sin explicaciones adicionales.",
//   {
//     input: "Los tiburones no pueden tener cáncer.",
//     output: "tiburones, cáncer",
//   }
// );

// // Agent 2: Investigador de Hechos
// agentChain.addAgent(
//   "Busca información relevante sobre el tema identificado en fuentes confiables.",
//   "Recibe temas clave y devuelve información relevante encontrada en fuentes confiables, sin explicaciones adicionales.",
//   {
//     input: "tiburones, cáncer",
//     output:
//       "Los tiburones sí pueden tener cáncer, aunque a una tasa más baja que los humanos.",
//   }
// );

// // Agent 3: Clasificador de Veracidad
// agentChain.addAgent(
//   "Basado en la información encontrada, clasifica la afirmación original como Verdadera, Falsa o Parcialmente Verdadera.",
//   "Recibe información y clasifica la afirmación original, devolviendo la clasificación sin explicaciones adicionales.",
//   {
//     input:
//       "Los tiburones sí pueden tener cáncer, aunque a una tasa más baja que los humanos.",
//     output: "Parcialmente Verdadero",
//   }
// );

// // Agent 4: Generador de Resumen
// agentChain.addAgent(
//   "Crea un resumen explicativo breve sobre por qué la afirmación es clasificada de esa manera.",
//   "Recibe una clasificación y devuelve un resumen explicativo breve sin explicaciones adicionales.",
//   {
//     input: "Parcialmente Verdadero",
//     output:
//       "La afirmación es parcialmente verdadera porque, aunque los tiburones pueden tener cáncer, ocurre a tasas significativamente más bajas que en los humanos.",
//   }
// );
// Agent 1: Extractor de Tendencia Actual

//////////////////

// agentChain.addAgent(
//   "Identifica la tendencia o tecnología emergente en la afirmación del usuario.",
//   "Dado un enunciado, destaca la tendencia o tecnología clave mencionada.",
//   {
//     input: "La inteligencia artificial está revolucionando la medicina.",
//     output: "Inteligencia artificial en medicina",
//   }
// );

// // Agent 2: Proyector de Crecimiento
// agentChain.addAgent(
//   "Estima el ritmo de crecimiento y adopción de la tendencia o tecnología identificada.",
//   "Basado en datos actuales, proyecta cómo esa tendencia podría desarrollarse en los próximos años.",
//   {
//     input: "Inteligencia artificial en medicina",
//     output:
//       "Para 2030, se espera que la IA esté presente en el 80% de las herramientas médicas.",
//   }
// );

// // Agent 3: Visionario de Impacto Futurista
// agentChain.addAgent(
//   "Especula posibles impactos y desarrollos futuros basados en la proyección.",
//   "Imagina escenarios futuristas basados en la proyección de crecimiento, considerando posibles avances y desafíos.",
//   {
//     input:
//       "Para 2030, se espera que la IA esté presente en el 80% de las herramientas médicas.",
//     output:
//       "La IA podría permitir diagnósticos en minutos, personalizar tratamientos y predecir enfermedades antes de que aparezcan. Sin embargo, podría surgir debates éticos sobre la privacidad y la dependencia de algoritmos.",
//   }
// );

// // Agent 4: Generador de Resumen Visionario
// agentChain.addAgent(
//   "Resume la predicción futurista, combinando la proyección y la visión del impacto en una narrativa coherente.",
//   "Consolida la información previa y proporciona un vistazo visionario al futuro basado en la tendencia identificada.",
//   {
//     input:
//       "La IA podría permitir diagnósticos en minutos, personalizar tratamientos y predecir enfermedades antes de que aparezcan. Sin embargo, podría surgir debates éticos sobre la privacidad y la dependencia de algoritmos.",
//     output:
//       "En 2030, con la IA omnipresente en medicina, podríamos ver un mundo donde los diagnósticos son rápidos y precisos, y donde cada tratamiento es personalizado para el individuo. Sin embargo, este avance vendrá con desafíos éticos sobre cómo los datos médicos se utilizan y se confía en los algoritmos.",
//   }
// );

/////////

// Agent 1: Identificador de Origen Literario
// agentChain.addAgent(
//   "Determina si la frase o expresión proporcionada por el usuario proviene de una obra literaria conocida.",
//   "Dado un fragmento, identifica si es una cita de una obra literaria y, de ser así, devuelve el título y autor.",
//   {
//     input: "Lo que no te mata, te hace más fuerte.",
//     output: "Ecce Homo, Friedrich Nietzsche",
//   }
// );

// // Agent 2: Contextualizador de la Cita
// agentChain.addAgent(
//   "Proporciona el contexto general en el que se dijo la cita.",
//   "Recibe el título y autor de la obra y devuelve un resumen contextual del fragmento citado.",
//   {
//     input: "Ecce Homo, Friedrich Nietzsche",
//     output:
//       "Nietzsche reflexiona sobre las adversidades de la vida y cómo enfrentarlas.",
//   }
// );

// // Agent 3: Primer Reductor
// agentChain.addAgent(
//   "Reduce el contexto a una idea central.",
//   "Toma el contexto y lo destila a un concepto clave o idea central.",
//   {
//     input:
//       "Nietzsche reflexiona sobre las adversidades de la vida y cómo enfrentarlas.",
//     output: "Superación ante las adversidades.",
//   }
// );

// // Agent 4: Segundo Reductor
// agentChain.addAgent(
//   "Traduce la idea central a una forma más simplificada.",
//   "Toma la idea central y la simplifica aún más, preparando el camino para una conclusión directa.",
//   {
//     input: "Superación ante las adversidades.",
//     output: "Crecer con los desafíos.",
//   }
// );

// // Agent 5: Generador de Conclusión Simple
// agentChain.addAgent(
//   "Ofrece una explicación directa y pragmática del fragmento original basándose en las simplificaciones previas.",
//   "Transforma el concepto simplificado en una frase o idea fácil de entender.",
//   {
//     input: "Crecer con los desafíos.",
//     output: "Los problemas te hacen más fuerte.",
//   }
// );
