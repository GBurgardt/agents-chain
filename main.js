import { AgentChain } from "./models/agent-chain.js";

const agentChain = new AgentChain();

// Agent 1: Extractor de Tema
agentChain.addAgent(
  "Identifica el tema clave de la afirmación proporcionada por el usuario.",
  "Dado un enunciado, identifica y devuelve el tema principal sin explicaciones adicionales.",
  {
    input: "Los tiburones no pueden tener cáncer.",
    output: "tiburones, cáncer",
  }
);

// Agent 2: Investigador de Hechos
agentChain.addAgent(
  "Busca información relevante sobre el tema identificado en fuentes confiables.",
  "Recibe temas clave y devuelve información relevante encontrada en fuentes confiables, sin explicaciones adicionales.",
  {
    input: "tiburones, cáncer",
    output:
      "Los tiburones sí pueden tener cáncer, aunque a una tasa más baja que los humanos.",
  }
);

// Agent 3: Clasificador de Veracidad
agentChain.addAgent(
  "Basado en la información encontrada, clasifica la afirmación original como Verdadera, Falsa o Parcialmente Verdadera.",
  "Recibe información y clasifica la afirmación original, devolviendo la clasificación sin explicaciones adicionales.",
  {
    input:
      "Los tiburones sí pueden tener cáncer, aunque a una tasa más baja que los humanos.",
    output: "Parcialmente Verdadero",
  }
);

// Agent 4: Generador de Resumen
agentChain.addAgent(
  "Crea un resumen explicativo breve sobre por qué la afirmación es clasificada de esa manera.",
  "Recibe una clasificación y devuelve un resumen explicativo breve sin explicaciones adicionales.",
  {
    input: "Parcialmente Verdadero",
    output:
      "La afirmación es parcialmente verdadera porque, aunque los tiburones pueden tener cáncer, ocurre a tasas significativamente más bajas que en los humanos.",
  }
);

agentChain
  .execute("Los tiburones no pueden tener cáncer.")
  .then(console.log)
  .then(() => {
    console.log("Done!");
  });
