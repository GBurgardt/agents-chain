function extractText(input) {
  const match = input.match(/".*"/s);
  if (match) {
    return match[0].slice(1, -1);
  }
  return null;
}

class GptService {
  constructor(apiKey) {
    console.log("apiKey", apiKey);
    this.apiKey = apiKey;
  }

  async withErrorHandling(func, ...args) {
    try {
      return await func(...args);
    } catch (error) {
      console.error(`Failed to ${func.name}:`, error);
      throw error;
    }
  }

  async callGptApi(messages) {
    const url = "https://api.openai.com/v1/chat/completions";

    let headers = {
      Authorization: `Bearer ${this.apiKey}`,
      "Content-Type": "application/json",
    };

    let body = {
      model: "gpt-4",
      messages: messages,
    };

    const response = await this.withErrorHandling(fetch, url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (data.choices && data.choices.length > 0) {
      return data.choices[0].message.content;
    } else {
      console.log("data", data);
      return "error";
    }
  }
}

class Agent {
  constructor(systemPrompt, userPromptTemplate, example, gptService) {
    this.systemPrompt = systemPrompt;
    this.userPromptTemplate = userPromptTemplate;
    this.example = example;
    this.gptService = gptService;
  }

  async process(text) {
    const messages = [
      {
        role: "system",
        content: this.systemPrompt,
      },
      {
        role: "user",
        content: `${this.userPromptTemplate}
            Example:
            Input: "${this.example.input}"
            Output: "${this.example.output}"
            Input: ${text}
            `,
      },
    ];

    const response = await this.gptService.callGptApi(messages);

    return response;
  }
}

class AgentChain {
  constructor() {
    this.agents = [];
  }

  addAgent(systemPrompt, userPromptTemplate, example, gptService) {
    const agent = new Agent(
      systemPrompt,
      userPromptTemplate,
      example,
      gptService
    );

    this.agents.push(agent);
    return this; // Permite encadenar
  }

  async execute(initialText) {
    let text = initialText;
    for (let agent of this.agents) {
      text = await agent.process(text);
    }

    return text;
  }
}

// Uso:

const gptService = new GptService(process.env.OPENAI_API_KEY);

const agentChain = new AgentChain();
agentChain
  .addAgent(
    "Eres un AI especializado en analizar y comprender perfiles de usuarios. Tu objetivo es determinar las características y necesidades del usuario objetivo basándote en la descripción proporcionada. El resultado debería ser claro, preciso y detallado.",
    `Basándote en la descripción dada, determina las características y necesidades del usuario objetivo para la aplicación`,
    {
      input:
        "Una aplicación móvil diseñada para estudiantes universitarios que les permita gestionar su horario, asignaciones y fechas de examen",
      output:
        "El usuario objetivo es un estudiante universitario que busca gestionar su tiempo de estudio, rastrear asignaciones y recordar fechas de examen de manera eficiente.",
    },
    gptService
  )
  .addAgent(
    "Eres un AI especializado en identificar funcionalidades esenciales de una aplicación. Basándote en las necesidades del usuario, identifica y propone las características clave que permitirán una experiencia de usuario óptima.",
    `Dado el perfil del usuario proporcionado, ¿cuáles serían las funcionalidades esenciales para esta aplicación?`,
    {
      input:
        "El usuario necesita una aplicación de música donde pueda escuchar, crear listas de reproducción y compartir canciones con amigos.",
      output:
        "Funcionalidades esenciales: Reproductor de música, creador de listas de reproducción, opción de compartir y sección de amigos..",
    },
    gptService
  )
  .addAgent(
    "Eres un AI especializado en diseño de interfaces. Con las funcionalidades identificadas, propone una estructura de interfaz que sea intuitiva y clara para el usuario, manteniendo el foco en una experiencia fluida.",
    `Con las funcionalidades identificadas, ¿cómo debería estructurarse la interfaz de la aplicación?`,
    {
      input:
        "Funcionalidades esenciales: Reproductor de música, creador de listas de reproducción, opción de compartir y sección de amigos",
      output:
        "La interfaz podría comenzar con una pantalla principal del reproductor, una barra lateral para acceder a listas de reproducción, y un botón de compartir en la esquina superior.",
    },
    gptService
  )

  .addAgent(
    "Eres un AI especializado en revisar y validar la coherencia de diseños de interfaz. Tu tarea es analizar las decisiones de diseño propuestas y asegurarte de que sean consistentes y proporcionen una experiencia coherente para el usuario.",
    `Basándote en las decisiones de diseño y funcionalidades propuestas, ¿la interfaz resultante es coherente y brinda una experiencia fluida para el usuario? Ejemplo:
    Input: "La aplicación propone un flujo de navegación paso a paso, con tutoriales integrados, pero sin opciones de retroceso ni menú principal."
    Output: "Si bien la propuesta facilita un aprendizaje integrado, la falta de opciones de retroceso y de un menú principal puede complicar la navegación para el usuario."`,
    {
      input:
        "La interfaz incorpora una guía paso a paso, ejemplos predefinidos, editor con vista previa, tamaños de texto ajustables y herramientas de voz.",
      output:
        "La propuesta es coherente; la integración de herramientas de accesibilidad y un diseño intuitivo ofrecen una experiencia fluida y comprensible.",
    },
    gptService
  );

// Ejecución:
agentChain
  .execute(
    `Una aplicación web que básicamente permite crear agentes de GPT, a las cuales se puede ingresar una explicación de cómo funciona y un ejemplo. Se pueden crear varios y estos se encadenan, es decir, el output del primer agente entra como input en el segundo. El segundo hace un trabajo y el output de ese segundo entra como input en el tercero y así todos los agentes que se agreguen. La idea en general es resolver un problema general, por eso se crean varios agentes que reciben cadenas. Es muy importante lo del input y lo del output. Propongo una solución UXUI que solucione este problema.`
  )
  .then(result => {
    console.log(result);
  });
