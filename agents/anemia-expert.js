import { AgentChain } from "./models/agent-chain.js";

const userStatement = process.argv[2];

const generatedAgent = new AgentChain({
  superExplanation: `El superagente está diseñado para proporcionar una respuesta experta, detallada y comprensible sobre la pregunta de qué es la anemia y cómo se relaciona con la fisiología del cuerpo humano. 

El proceso comienza con el Agente 1, quien toma la primera parte de la pregunta e identifica la tarea de definir y explicar qué es la anemia. 

Luego, el Agente 2 se encarga de explicar cómo la anemia se relaciona con la fisiología humana, proporcionando una respuesta clara y concisa.

El Agente 3 entra en juego para dilucidar si la anemia supone un cambio literal en alguna parte del cuerpo o si se trata de una cuestión psicológica, ofreciendo una visión más profunda a esta compleja cuestión.

Por último, el Agente 4 proporciona información adicional y detallada sobre las implicaciones fisiológicas de la anemia, complementando y enriqueciendo el entendimiento del usuario respecto a esta enfermedad.

En conjunto, estos sub-agentes permiten al superagente responder de manera precisa, detallada y completa a preguntas complejas sobre condiciones de salud como la anemia, facilitando información valiosa para el usuario final.`,
  superPrompt: userStatement,
});

// Agente Agente 1
generatedAgent.addAgent({
  systemPrompt: "Agente 1: Define y explica qué es la anemia.",
  userPrompt:
    " Como Agente 1, tu tarea es definir y explicar qué es la anemia. Tu explicación debería ser lo suficientemente detallada como para que un agente especializado en medicina pueda entenderla y trabajar en esa base para explicar cómo la anemia se relaciona con la fisiología humana",
  example: {
    input: "Necesito definir y explicar qué es la anemia.",
    output:
      "La anemia es una condición médica que ocurre cuando la cantidad de glóbulos rojos o la cantidad de hemoglobina en estos glóbulos disminuye por debajo de los valores normales. Esto resulta en una disminución del oxígeno transportado a las células del cuerpo. Hay diferentes tipos de anemia, cada uno con sus propias causas, que pueden incluir deficiencias nutricionales, enfermedades crónicas, y más.",
  },
});

// Agente Agente 2
generatedAgent.addAgent({
  systemPrompt:
    "Agente 2: Explica la relación entre la anemia y la fisiología humana.",
  userPrompt:
    " As Agent 2, your task is to create a clear description of the relationship between anemia and human physiology. You should cover whether it's a physical change in the body, or if it is psychological.",

  example: {
    input: "What is anemia and how is it related to human physiology?",
    output:
      "Anemia is a condition that develops when your blood lacks enough healthy red blood cells. These cells are the main transporters of oxygen to organs so if red cells are in low numbers or are structurally abnormal, your body will not receive enough oxygen. Its a physical change in the body, not a psychological one. For instance, iron-deficiency anemia happens when the body doesnt have enough iron to produce hemoglobin, the part of red blood cells that gives them their red color and enables them to carry oxygen. This is a great example of how diet (iron intake) directly influences the physiological status (anemia development).",
  },
});

// Agente Agente 3
generatedAgent.addAgent({
  systemPrompt:
    "Agente 3: Explica si la anemia supone un cambio literal en alguna parte del cuerpo o si es algo psicológico.",
  userPrompt:
    " Como Agente 3, tu tarea es explicar si la anemia implica un cambio físico en alguna parte del cuerpo o si es algo psicológico. Esta explicación se basará en el conocimiento científico validado y establecerá la relación entre la anemia y la fisiología del cuerpo humano. Tu objetivo es ayudar a los usuarios a comprender la naturaleza literal y/o psicológica de la anemia.",
  example: {
    input:
      "As a medical professional, I often get asked about anemia - if it's a physical alteration in the body or if it's psychological. ",
    output:
      "Anemia is a condition that develops when your blood lacks enough healthy red blood cells or hemoglobin. Hemoglobin is a main part of red blood cells and binds oxygen. If you have too few or abnormal red blood cells, or your hemoglobin is abnormal or low, the cells in your body will not get enough oxygen. Hence, anemia is a literal change in the body, resulting from decreased or defective production of red blood cells, and is not psychological.",
  },
});

// Agente Agente 4
generatedAgent.addAgent({
  systemPrompt:
    "Agente 4: Proporciona información adicional y detallada sobre las implicaciones fisiológicas de la anemia.",
  userPrompt:
    " Como el Agente 4, tu tarea es generar ejemplos prácticos y específicos que ilustren cómo la anemia puede afectar la fisiología del cuerpo humano. Esta información será utilizada para responder a preguntas sobre la anemia y sus implicaciones fisiológicas. Considera tanto las posibles alteraciones físicas como el impacto en el rendimiento del cuerpo.",
  example: {
    input:
      "Genera ejemplos específicos para ilustrar cómo la anemia afecta la fisiología humana.",
    output: `1) Disminución del transporte de oxígeno en la sangre: Debido a la anemia, hay menos células rojas disponibles para llevar oxígeno a los diferentes órganos y tejidos. Como resultado, puede experimentar fatiga y debilidad debido a un suministro insuficiente de oxígeno. 
2) El corazón trabaja más para compensar: Para compensar la falta de oxígeno, el corazón intenta bombear más sangre, lo que puede llevar al agotamiento y al posible desarrollo de enfermedades cardíacas. 
3) Cambio de color de la piel: En casos severos, la anemia puede producir un cambio notable en el color de la piel, volviéndola pálida o amarillenta debido a la falta de hemoglobina que es responsable de su color rojo. 
4) Disminución de la capacidad cognitiva: algunos estudios sugieren que la anemia puede afectar la capacidad cognitiva, especialmente en niños y mayores, debido a un suministro insuficiente de oxígeno al cerebro.`,
  },
});

generatedAgent
  .execute()
  .then(console.log)
  .then(() => {
    console.log("¡Creación del prompt completada!");
  });
