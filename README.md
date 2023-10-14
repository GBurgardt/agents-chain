## About
![image](https://github.com/GBurgardt/agents-chain/assets/22543478/fd65eb81-0e2f-4e7c-b74e-a28ea32dbcb4)


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
