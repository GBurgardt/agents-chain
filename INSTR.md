# SuperAgente: Propuesta de Desarrollo

## Resumen

Desarrollar un "superagente" compuesto por varios sub-agentes. Estos agentes trabajan en conjunto, donde el primer agente divide una tarea dada en sub-tareas y los agentes subsiguientes desarrollan componentes específicos para cada sub-tarea.

---

## 1. Agentes

### 1.1. Agente Pookie

**Objetivo**: Analizar el PROM y dividirlo en tareas.

- Función: Divide un input inicial en varias tareas específicas.
- Ejemplo: A partir de un objetivo general de generar HTMLs, Pookie divide la tarea en sub-tareas más manejables.

**Método**: A través de un FewShot, mostrarle ejemplos de cómo dividir una tarea compleja en sub-tareas. Estos ejemplos le darán contexto.

---

### 1.2. Agente Generador de Descripciones

**Objetivo**: Crear una breve explicación para cada agente sugerido por Pookie.

- Función: Tomar las sub-tareas definidas por Pookie y generar una descripción clara y concisa para cada una.
- Ejemplo: Si Pookie sugiere un agente para "identificar emociones", este agente generará una breve descripción de esa tarea.

---

### 1.3. Agente Creador de Prompts

**Objetivo**: Generar los UserPrompt y SystemPrompt para cada sub-tarea.

- Función: Tomar la descripción creada por el Agente Generador de Descripciones y convertirla en prompts útiles.
- Ejemplo: A partir de la descripción "identificar emociones", este agente podría generar el SystemPrompt "Identifica la emoción expresada en el siguiente texto:" y un UserPrompt correspondiente.

---

### 1.4. Agente Generador de Ejemplos

**Objetivo**: Crear un ejemplo basado en el SystemPrompt y UserPrompt.

- Función: Utilizar los prompts generados y el contexto general para crear un ejemplo que muestre cómo funcionaría la tarea en acción.
- Ejemplo: Si el SystemPrompt es "Identifica la emoción expresada en el siguiente texto:", este agente podría generar un ejemplo con un texto y su emoción correspondiente.

---

## 2. Flujo de trabajo

1. **Inicio**: Se introduce un input inicial.
2. **Pookie**: Divide el input en sub-tareas y sugiere agentes para cada tarea.
3. **Generador de Descripciones**: Crea una breve explicación para cada agente sugerido.
4. **Creador de Prompts**: Genera los UserPrompt y SystemPrompt basados en las descripciones.
5. **Generador de Ejemplos**: Produce un ejemplo basado en los prompts y el contexto general.

---

## 3. Implementación

**Pragmatismo**: La idea es mantener el desarrollo simple y directo, evitando complicaciones innecesarias. Cada agente debe ser diseñado para hacer su tarea específica de manera eficiente y clara.
