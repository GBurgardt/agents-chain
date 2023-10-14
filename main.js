import { AgentChain } from "./models/agent-chain.js";

const agentChain = new AgentChain();

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

// Agent 1: Identificador de Origen Literario
agentChain.addAgent(
  "Determina si la frase o expresión proporcionada por el usuario proviene de una obra literaria conocida.",
  "Dado un fragmento, identifica si es una cita de una obra literaria y, de ser así, devuelve el título y autor.",
  {
    input: "Lo que no te mata, te hace más fuerte.",
    output: "Ecce Homo, Friedrich Nietzsche",
  }
);

// Agent 2: Contextualizador de la Cita
agentChain.addAgent(
  "Proporciona el contexto general en el que se dijo la cita.",
  "Recibe el título y autor de la obra y devuelve un resumen contextual del fragmento citado.",
  {
    input: "Ecce Homo, Friedrich Nietzsche",
    output:
      "Nietzsche reflexiona sobre las adversidades de la vida y cómo enfrentarlas.",
  }
);

// Agent 3: Primer Reductor
agentChain.addAgent(
  "Reduce el contexto a una idea central.",
  "Toma el contexto y lo destila a un concepto clave o idea central.",
  {
    input:
      "Nietzsche reflexiona sobre las adversidades de la vida y cómo enfrentarlas.",
    output: "Superación ante las adversidades.",
  }
);

// Agent 4: Segundo Reductor
agentChain.addAgent(
  "Traduce la idea central a una forma más simplificada.",
  "Toma la idea central y la simplifica aún más, preparando el camino para una conclusión directa.",
  {
    input: "Superación ante las adversidades.",
    output: "Crecer enfrentando desafíos.",
  }
);

// Agent 5: Generador de Conclusión Extendida
agentChain.addAgent(
  "Ofrece una explicación directa y pragmática del fragmento original basándose en las simplificaciones previas.",
  "Transforma el concepto simplificado en una idea comprensiva y fácil de entender.",
  {
    input: "Crecer enfrentando desafíos.",
    output:
      "Cuando enfrentamos problemas y desafíos en la vida, estos nos dan la oportunidad de aprender, crecer y volvernos más fuertes.",
  }
);

if (process.argv.length <= 2) {
  console.error("Por favor proporciona una afirmación como argumento.");
  process.exit(1);
}

const userStatement = process.argv[2];

agentChain
  .execute(userStatement)
  .then(console.log)
  .then(() => {
    console.log("¡Terminado!");
  });

// agentChain
//   .execute("Los aliens no existen.")
//   .then(console.log)
//   .then(() => {
//     console.log("Done!");
//   });
