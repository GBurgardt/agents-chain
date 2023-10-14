## About

![image](https://github.com/GBurgardt/agents-chain/assets/22543478/1dbeb2da-4aec-4cc0-916f-1d717e5aa1d4)

`AgentChain` is a simple js tool inspired by [this paper](https://github.com/OpenBMB/ChatDev). It allows GPT agents to work one after the other on smaller tasks.
Each agent gets input, does its task, and sends the output to the next agent.
The agents work sequentially to tackle complex problems, not just in coding but in various tasks.

## Example

```javascript
const agentChain = new AgentChain();

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
```
