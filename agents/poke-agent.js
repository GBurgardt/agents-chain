
import { AgentChain } from "./models/agent-chain.js";

const userStatement = process.argv[2];

const generatedAgent = new AgentChain({
    superExplanation: "El superagente tiene el objetivo de proporcionar asesoramiento estratégico en la dinámica de los juegos de Pokémon. Este proceso comienza con el Agente 1, que analiza la información de la batalla actual, incluyendo detalles sobre los Pokémon del jugador y del enemigo, movimientos disponibles, salud restante, y las fortalezas y debilidades de cada tipo de Pokémon. A continuación, el Agente 2 evalúa la eficacia de los movimientos disponibles para el jugador en el contexto de la batalla actual. Esto incluye considerar el tipo, la salud, el nivel y el estado actual de los Pokémon enemigos. Luego, el Agente 3 genera una lista de posibles movimientos y tácticas que el jugador puede utilizar, basado en la eficacia de los movimientos, prioridades, salud restante del Pokémon propio y del enemigo. Por último, el Agente 4 recomienda la mejor táctica o movimiento a seguir, considerando la estrategia de máxima ganancia. Esto puede implicar adoptar una estrategia de cambio de Pokémon, o decidir si es un momento oportuno para usar movimientos de ataque, defensa, o curación. Con la ayuda de estos sub-agentes, el superagente puede proporcionar un valioso asesoramiento estratégico para maximizar tus oportunidades de ganar en los juegos de Pokémon.",
    superPrompt: userStatement,
});


// Agente Agente 1
generatedAgent.addAgent({
    systemPrompt: "Agente 1: Analiza la información de la batalla actual, incluyendo los detalles sobre el jugador y los Pokémon enemigos, sus salud restante, movimientos disponibles, debilidades de tipos y fortalezas.",
    userPrompt: " Como el Agente 1, tu tarea es sintetizar y analizar los detalles de la batalla Pokémon actual, que incluye información de los Pokémon del jugador y enemigos, salud restante, movimientos disponibles, debilidades y fortalezas de los tipos. Tu análisis ayudará a informar las estrategias propuestas para seguir en la batalla.",
    example: `" { input: "Tus Pokémon actuales son Pikachu con un ataque de tipo eléctrico disponible y Bulbasaur con un movimiento de tipo planta habilitado. Pikachu tiene un 50% de salud restante y Bulbasaur está en full salud. Los Pokémon enemigos actuales son Pidgeotto y Gyarados con un 70% de salud total. Pidgeotto es débil al tipo eléctrico y Gyarados es débil a los ataques eléctricos y de planta.", output: "Análisis de la Batalla: Pokémon del jugador: Pikachu (50% de salud, ataque de tipo eléctrico) y Bulbasaur (100% de salud, ataque de tipo planta); Pokémon enemigos: Pidgeotto (70% de salud, debilidad al tipo eléctrico) y Gyarados (70% de salud, debilidad al tipo eléctrico y planta)."}"`,
});

// Agente Agente 2
generatedAgent.addAgent({
    systemPrompt: "Agente 2: Evalúa la eficacia de los movimientos disponibles del jugador en la situación actual, considerando el tipo, salud, nivel y estado de los Pokémon enemigos.",
    userPrompt: " Como Agente 2, tu tarea es evaluar los movimientos disponibles para el jugador, considerando el tipo, salud, nivel y estado de los Pokémon enemigos. Con esta información, estarás asesorando estratégicamente cuál sería el mejor movimiento o táctica a seguir en la batalla Pokémon.",
    example: `" { input: "Current Pokémon: Pikachu, HP: 60, Moves: Thunderbolt, Quick Attack, Thunder Shock, Double Team; Opponent's Pokémon: Bulbasaur, HP: 75, Moves: Razor Leaf, Vine Whip, Seed Bomb, Leech Seed.", output: "Based on the current battle situation, Pikachu's 'Thunderbolt' or 'Thunder Shock' would be the most effective moves against the grass-type Pokémon Bulbasaur, given its weakness to electric type attacks. Using 'Double Team' to raise Pikachu's evasion might also be a good strategic move in the long run."}"`,
});

// Agente Agente 3
generatedAgent.addAgent({
    systemPrompt: "Agente 3: Genera una lista de posibles movimientos y tácticas que el jugador puede utilizar, basándose en la eficacia, prioridad de los movimientos, salud restante del Pokémon enemigo y Pokémon propio.",
    userPrompt: " As Agent 3, your task is to generate a list of possible strategic moves and tactics for a player in a Pokémon game. This should be based on several factors including the effectiveness and priority of the moves, and the remaining health of the player's and opponent's Pokémon. Your suggestions should help in maximizing the chances of winning the battle.",
    example: `" { input: "Your Bulbasaur (Health: 45%) is currently facing a Charmander (Health: 30%). Your Bulbasaur has the following moves available: Tackle (Normal), Vine Whip (Grass), Razor Leaf (Grass), Sleep Powder (Grass).", output: "Given the situations, here are the possible strategic moves: 1) Use 'Vine Whip' or 'Razor Leaf', as grass type moves are highly effective against fire type Pokemon like Charmander. 2) Use 'Sleep Powder' to put the opposing Pokemon to sleep which avoids damage on the next turn and allows Bulbasaur to attack or build up its move."}"`,
});

// Agente Agente 4
generatedAgent.addAgent({
    systemPrompt: "Agente 4: Recomienda la mejor táctica o movimiento a seguir, considerando la estrategia de máxima ganancia, contemplando el uso oportuno de movimientos de ataque, defensa, curación, o adoptar una estrategia de cambio de Pokémon.",
    userPrompt: " Como agente 4, tu tarea es proporcionar la mejor recomendación de táctica o movimiento a seguir basada en una estrategia de máximo beneficio. Debes tener en cuenta los aspectos del juego de Pokemon, incluyendo el estado actual de la batalla, detalles sobre los Pokemon tanto del usuario como del oponente, y las opciones de movimientos disponibles. Estas recomendaciones pueden implicar el uso oportuno de movimientos ofensivos, defensivos, de curación, o incluso recomendar un cambio de Pokemon para maximizar las oportunidades de ganar la batalla. Necesitas basar tus recomendaciones en una profunda comprensión de la dinámica de los juegos de Pokémon.",
    example: `" 
    { input: "I have a Charizard with 50% health and Flamethrower, Fly, Earthquake and Dragon Claw moves left. The opponent's Pokémon is a full health Scizor with Bullet Punch, X-Scissor, Night Slash and Iron Head moves", 
      output: "Your opponent's Scizor is a Bug/Steel type which has a double weakness to fire type moves. Your Charizard's Flamethrower should be highly effective. Despite your Charizard having half health, it should be faster than Scizor. Use Flamethrower to possibly knock out the Scizor in one shot."}"`,
});


generatedAgent
    .execute()
    .then(console.log)
    .then(() => {
        console.log("¡Creación del prompt completada!");
    });
