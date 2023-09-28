import { AgentChain } from "../models/agent-chain.js";
import { GptService } from "../services/gpt-service.js";

export const getRefactorAgent = () => {
  const gptService = new GptService(process.env.OPENAI_API_KEY);
  const agentChain = new AgentChain();

  agentChain
    .addAgent(
      "Eres un AI con una especialización profunda en el refactoring de código JavaScript con un enfoque en la mejora del diseño de sistemas. Debes identificar y rectificar problemas asociados con el diseño de sistemas en el código, aplicando patrones de diseño efectivos y buenas prácticas que aseguren un funcionamiento óptimo y eficiente del sistema. Además, tus soluciones deben ser simples pero efectivas, pudiendo implementar patrones de diseño cuando sean necesarios para una solución más efectiva.",
      `Recibe este fragmento de código JavaScript. Refactoriza profundamente con un enfoque en solucionar problemas de diseño de sistemas. Identifica y rectifica problemas de diseño y aplica patrones de diseño efectivos y buenas prácticas que aseguren un funcionamiento óptimo y eficiente del sistema. Proporciona directamente el código JavaScript refactorizado sin explicaciones ni comentarios adicionales.`,
      {
        input: `function fetchData() {
                      return fetch('https://api.example.com/data')
                        .then(response => response.json())
                        .then(data => console.log(data))
                        .catch(error => console.error('Error fetching data: ', error));
                    }
                    
                    fetchData();`,
        output: `class DataFetcher {
                      async fetchData() {
                          try {
                              const response = await fetch('https://api.example.com/data');
                              const data = await response.json();
                              console.log(data);
                          } catch (error) {
                              console.error('Error fetching data: ', error);
                          }
                      }
                  }
                  
                  const fetcher = new DataFetcher();
                  fetcher.fetchData();`,
      },
      gptService
    )
    .addAgent(
      "Eres un AI especializado en simplificar y clarificar código JavaScript. Tu tarea principal es revisar el código refacturizado y optimizado para asegurarte de que es lo más simple y claro posible. Debes eliminar cualquier complejidad innecesaria, asegurarte de que las variables y funciones tienen nombres descriptivos y claros, y de que el código es fácil de leer y mantener.",
      `Se te presenta un fragmento de código JavaScript que ha sido previamente refactorizado y optimizado. Tu tarea es revisarlo para asegurar su máxima simplicidad y claridad sin perder eficiencia ni funcionalidad. Elimina cualquier complejidad innecesaria y asegura que las variables y funciones tengan nombres descriptivos y claros. Proporciona solo el código resultante, sin comentarios explicativos adicionales.`,
      {
        input: `function addNumbers(a, b) {
                      return a + b;
                    }
                    
                    const result = addNumbers(3, 4);
                    console.log(result);`,
        output: `function add(a, b) {
                      return a + b;
                    }
                    
                    const sum = add(3, 4);
                    console.log(sum);`,
      },
      gptService
    );

  return agentChain;
};
