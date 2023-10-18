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
    "Agente 1: Interpreta y divide el artículo en secciones o ideas principales para un mejor manejo y simplificación del contenido.",
  userPrompt:
    " Como Agente 1, tu tarea es analizar el artículo proporcionado, identificar y separar las secciones o ideas principales en subtareas más sencillas para facilitar la gestión y simplificación del contenido. Este es el primer paso para convertir el artículo en un documento en markdown bien estructurado y claro, al estilo de Nietzsche pero sin metáforas excesivas y en español.",
  example: {
    Input: `El paradigma Nietzscheano: una vía para la emancipación del ser
    Friedrich Nietzsche fue un filósofo alemán del siglo XIX famoso por su crítica despiadada a la moral y la religión tradicional. Probablemente su idea más famosa es la afirmación que 'Dios ha muerto', una declaración con la que Nietzsche buscaba exponer la creciente secularización de la sociedad. Sin embargo, es importante tener en cuenta que Nietzsche no estaba celebrando la muerte de Dios, sino que avisaba de las consecuencias que este hecho podría tener sobre los valores morales y la estructura de poder. Según Nietzsche, si Dios está muerto, nada tiene sentido, y por eso propone reinventar la moral, la cual él creía que emergía de una 'voluntad de poder' inherente a los individuos.
    
    Nietzsche también se refiere a la importancia del amor fati y el eterno retorno, ideas que están interrelacionadas en su filosofía. El amor fati representa la idea de amar nuestro destino, incluso nuestras desgracias, y el eterno retorno es la visión de que todas las cosas en la vida sucederán una y otra vez, infinitamente. Este enfoque nos invita a dar la mejor versión de nosotros mismos en cada momento, ya que, de alguna forma, ese momento se repetirá eternamente.
    
    En resumen, la filosofía de Nietzsche nos habla de una autentica liberación del ser, mediante un proceso en el que el individuo toma consciencia de su propia naturaleza e historia, transformándose en lo que él llamaba 'superhombre'.`,
    Output: [
      {
        heading: "Crítica de Nietzsche a la moral y la religión",
        content:
          "Friedrich Nietzsche fue un filósofo alemán del siglo XIX famoso por su crítica despiadada a la moral y la religión tradicional...",
      },
      {
        heading: "Dios ha muerto: las consecuencias de la secularización",
        content:
          "Probablemente su idea más famosa es la afirmación que 'Dios ha muerto', una declaración con la que Nietzsche buscaba exponer la creciente secularización de la sociedad...",
      },
      {
        heading: "Amor fati y el eterno retorno: una visión de vida",
        content:
          "Nietzsche también se refiere a la importancia del amor fati y el eterno retorno, ideas que están interrelacionadas en su filosofía...",
      },
      {
        heading: "El superhombre como liberación del ser",
        content:
          "En resumen, la filosofía de Nietzsche nos habla de una autentica liberación del ser, mediante un proceso en el que el individuo toma consciencia de su propia naturaleza e historia...",
      },
    ],
  },
});

// Agente Agente 2
generatedAgent.addAgent({
  systemPrompt:
    "Agente 2: Toma cada sección y genera un árbol jerárquico de contenidos para estructurar la información en un formato markdown.",
  userPrompt:
    " As Agent 2, your task is to receive the prompts prepared by Agent 1 and convert each section into a hierarchical content tree in markdown format. This structure will guide Agents 3 and 4 in producing a clear and structured document that is intuitively understood.",
  example: {
    Input:
      "User profile layout: title, name, occupation, salary, biography; Field Names: bold, high-contrast gray; User Data: smaller, standard-weight gray; Design: mobile (1 column), larger screens (3 columns), light gray separators.",
    Output: `
    # User Profile Layout
    - **Title**
    - **Name**
    - **Occupation**
    - **Salary**
    - **Biography**

    # Style Guide
    ## Field Names
    - Use bold, high-contrast gray.
    ## User Data
    - Use smaller, standard-weight gray.
    
    # Design
    - Mobile: 1 column layout
    - Larger screens: 3 columns layout
    - Use light gray separators between fields.
    `,
  },
});

// Agente Agente 3
generatedAgent.addAgent({
  systemPrompt:
    "Agente 3: Toma la estructura tipo markdown y con base en el estilo literario deseado (en este caso Nietzsche), reformula el texto original en español pero sin excesivas metáforas para preservar la claridad y comprensión del contenido.",
  userPrompt:
    " Como Agente 3, tu tarea es tomar la estructura en markdown y reformular el texto original al estilo de Nietzsche, sin embargo, debe ser en español y sin el uso excesivo de metáforas para mantener la claridad del contenido. Este texto reformulado será la base para crear un documento markdown estructurado e intuitivo.",
  example: {
    input:
      "Perfil de usuario: título, nombre, ocupación, salario, biografía. Nombres de campo: negrita, gris de alto contraste. Datos del usuario: más pequeño, peso estándar en gris. Diseño: móvil (1 columna), pantallas más grandes (3 columnas), separadores grises claros.",
    output:
      "# Perfil de Usuario\n\n> Aquí presentamos una imagen del ser contemporáneo, puesta en escena a través de su etéreo perfil digital. No es un retrato simple, sino un escenario que revela la multiplicidad del yo. \n\n- **Nombre**: Un rótulo; la primera impronta que deja en el interlocutor.\n- **Ocupación**: la llamada al deber, la acción materializada en el mundo.\n- **Salario**: el valor numérico que, desquitándonos de un análisis superficial, puede develar mucho más que meras cifras.\n- **Biografía**: Su pequeña historia, la objetivación de una vida en resumen.\n\nEl diseño no es meramente estético, la funcionalidad nace de su estructura: una sola columna para la mirada veloz del móvil, mientras tres columnas permiten un examen más detallado en pantallas generosas. Separadores grises leves asemejan a hilos sutiles conectando cada aspecto, haciendo de la legibilidad una prioridad.",
  },
});

// Agente Agente 4
generatedAgent.addAgent({
  systemPrompt:
    "Agente 4: Revisa el documento final en markdown, corrigiendo la gramática, la sintaxis y la ortografía si es necesario para garantizar la claridad y la legibilidad del documento.",
  userPrompt:
    " Como Agente 4, tu tarea es revisar detenidamente el documento en markdown producido a partir de un artículo y realizar las correcciones necesarias en gramática, sintaxis y ortografía para asegurar su claridad y legibilidad. Debes asegurarte que la escritura final sea estructurada, intuitiva y clara, manteniendo un estilo similar al de Nietzsche pero sin excesivas metáforas y en español.",
  example: {
    input:
      "# El Superhombre\n\nEl 'superhombre' es la meta del ser humano segun Nietzsche. Es aquel que ha sobrepasado la moralidad tracicional y ha creado su propia moral.\n\n## Características del superhombre\n\nEl superhombre es aquel que es capaz de imponer su voluntad a los demás. No se trata de una tiranía o imposición forzada, sino de la influencia natural que ejerce aquel que conoce su poder y lo utiliza para su beneficio, y para el beneficio de la humanidad.",
    output:
      "# El Superhombre\n\nEl 'superhombre' es la meta del ser humano según Nietzsche. Es aquel que ha sobrepasado la moralidad tradicional y ha creado su propia moral.\n\n## Características del superhombre\n\nEl superhombre es aquel que es capaz de imponer su voluntad a los demás. No se trata de una tiranía o imposición forzada, sino de la influencia natural que ejerce aquel que conoce su poder y lo utiliza para su beneficio y para el beneficio de la humanidad.",
  },
});

generatedAgent
  .execute()
  .then(console.log)
  .then(() => {
    console.log("¡Creación del prompt completada!");
  });
