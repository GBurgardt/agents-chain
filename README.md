## About

`AgentChain` is a simple js tool inspired by [this paper](https://github.com/OpenBMB/ChatDev). It allows GPT agents to work one after the other on smaller tasks.
Each agent gets input, does its task, and sends the output to the next agent.
The agents work sequentially to tackle complex problems, not just in coding but in various tasks.

## Example

```javascript
const agentChain = new AgentChain();

// Agent 1: Music Mood Detector
agentChain.addAgent(
  "You're an AI that determines the mood of text, like song lyrics. Analyze the text and provide the mood it conveys, such as happy, sad, energetic, etc.",
  "Given a piece of text, identify and return the mood or emotion it conveys without additional explanation or comments.",
  {
    input: `Sunshine, lollipops and rainbows,
            Everything that's wonderful is what I feel when we're together,
            Brighter than a lucky penny,
            When you're near the rain cloud disappears, dear,
            And I feel so fine just to know that you are mine.`,
    output: `Happy`,
  }
);

// Agent 2: Playlist Creator
agentChain.addAgent(
  "Given a mood, you're an AI that generates a playlist with songs fitting that mood. Provide a list of songs that match the mood received as input.",
  "Receive a mood descriptor, like 'happy', and return a list of songs that embody this mood without further explanation.",
  {
    input: `Happy`,
    output: `1. "Happy" by Pharrell Williams
            2. "Uptown Funk" by Mark Ronson ft. Bruno Mars
            3. "I Gotta Feeling" by Black Eyed Peas
            4. "Walking on Sunshine" by Katrina and The Waves
            5. "Shake It Off" by Taylor Swift`,
  }
);

agentChain.execute(
  `My mother was of the sky
  My father was of the Earth
  But I am of the universe
  And you know what it's worth`
);
```

¡Saludos!

Te presento una propuesta para un SuperAgente llamado "FlashSummary", diseñado para brindar resúmenes informativos y relevantes de textos extensos en instantes.

Agente 1: Extractor de Temas Clave
Nombre del Agente: KeyThemeExtractor
Función Principal: Identificar y extraer los temas clave de un texto proporcionado.
Método de Operación: Analiza el texto, identifica y extrae palabras y frases que son cruciales para el entendimiento del contenido general del texto.
Utilidad Específica: Brinda un entendimiento inmediato sobre los puntos centrales del texto.
Características Distintivas: Capacidad de identificar temas clave con alta precisión y relevancia.
Agente 2: Generador de Resumen Informativo
Nombre del Agente: InfoSummarizer
Función Principal: Crear un resumen coherente y conciso basado en los temas clave extraídos.
Método de Operación: Construye frases y oraciones que encapsulen los temas clave de una manera que sea fácil de entender y retener.
Utilidad Específica: Ofrece un resumen rápido e informativo que permite a los usuarios entender el contenido esencial en un breve vistazo.
Características Distintivas: Generación de texto inteligente que asegura coherencia y relevancia en los resúmenes producidos.
Agente 3: Optimizador de Claridad
Nombre del Agente: ClarityOptimizer
Función Principal: Refinar y mejorar el resumen para maximizar su claridad y comprensión.
Método de Operación: Revisar y ajustar el resumen, eliminando ambigüedades y mejorando la redacción para facilitar la lectura.
Utilidad Específica: Asegura que los resúmenes sean extremadamente claros y directos, mejorando la experiencia del usuario.
Características Distintivas: Uso de técnicas avanzadas de procesamiento de lenguaje natural para optimizar la claridad y precisión del texto.
Uso del SuperAgente FlashSummary:
Un usuario proporciona un texto extenso, como un artículo, informe o ensayo.
KeyThemeExtractor identifica y extrae los temas y puntos clave.
InfoSummarizer toma estos temas clave y crea un resumen coherente y significativo.
ClarityOptimizer refina este resumen para garantizar que sea claro, conciso y fácil de entender.
Valor Añadido:
FlashSummary es una herramienta invaluable para estudiantes, profesionales y cualquier persona que necesite comprender rápidamente la esencia de textos extensos. Además, su simplicidad y eficacia lo hacen accesible y útil para una amplia gama de usuarios.

====================================================================================================================================================================================

Saludos nuevamente,

He diseñado un SuperAgente con el nombre "Claridad". Su propósito principal es transformar información compleja o densa en información clara, concisa y fácilmente comprensible. Esto es particularmente útil en la era de la información en la que vivimos, donde el exceso de información puede ser abrumador.

Agente 1: Separador de Conceptos
Función Principal: Desglosar un texto extenso en sus conceptos o ideas clave.
Método de Operación: Analiza el texto para identificar y extraer las frases o puntos más relevantes.
Utilidad Específica: Permite al usuario entender rápidamente las ideas principales de un texto extenso.
Características Distintivas: Tiene la capacidad de determinar relevancia y eliminar redundancias.
Agente 2: Reductor de Complejidad
Función Principal: Tomar las ideas clave y simplificarlas aún más, eliminando jerga o terminología compleja.
Método de Operación: Reemplaza términos complejos con sinónimos más comunes y simplifica las estructuras de las frases.
Utilidad Específica: Convierte ideas principales en puntos fácilmente digestibles.
Características Distintivas: Capacidad de identificar jerga y terminología técnica.
Agente 3: Generador de Infografía
Función Principal: Representar las ideas simplificadas visualmente.
Método de Operación: Utiliza gráficos, iconos y paletas de colores para representar visualmente las ideas clave.
Utilidad Específica: Permite a los usuarios visualizar y comprender mejor la información.
Características Distintivas: Tiene una base de datos de representaciones visuales para diferentes conceptos y temas.
Descripción del SuperAgente "Claridad":
Supongamos que un estudiante tiene un artículo científico extenso que necesita entender rápidamente. Al ingresar el artículo en "Claridad", el Agente 1 extraerá las ideas clave, el Agente 2 simplificará esas ideas para que sean más comprensibles, y finalmente, el Agente 3 generará una infografía para que el estudiante pueda visualizar y comprender mejor las ideas principales del artículo.

La belleza de "Claridad" radica en su simplicidad y eficacia. A través de un proceso sencillo de tres pasos, convierte información compleja en representaciones claras y fáciles de comprender. Es una herramienta valiosa en educación, negocios y cualquier ámbito donde la comprensión rápida y clara de la información sea esencial.

====================================================================================================================================================================================

SuperAgente Anti-Enredo:

El Anti-Enredo es un SuperAgente compuesto por tres agentes individuales que trabajan en sinergia para proporcionar respuestas claras y concisas a preguntas complejas y enmarañadas.

Agente Desenredador:

Función: Recibe preguntas complejas y las descompone en sub-preguntas simples y manejables.
Operación: Analiza la estructura gramatical y semántica, identifica los componentes clave y los separa.
Agente Clarificador:

Función: Toma cada sub-pregunta y la reformula para mayor claridad y precisión, eliminando ambigüedades y mejorando la comprensión.
Operación: Aplica técnicas de procesamiento de lenguaje natural y análisis semántico para refinar cada sub-pregunta.
Agente Respondedor:

Función: Responde cada sub-pregunta reformulada con precisión y síntesis.
Operación: Accede a bases de datos de conocimiento y utiliza algoritmos de inferencia para generar respuestas acertadas.
