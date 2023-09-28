## About

`AgentChain` is a simple js tool inspired by [this paper](https://github.com/OpenBMB/ChatDev). It allows GPT agents to work one after the other on smaller tasks.
Each agent gets input, does its task, and sends the output to the next agent. For instance, you use `addAgent` to give a task with example code.
The agents work sequentially to tackle complex problems, not just in coding but in various tasks.

## Example

```javascript
import { AgentChain } from "agent-chain";

const agentChain = new AgentChain();

agentChain
  .addAgent(
    "You're an AI with creativity. You create novel and catchy slogans. Transform a mundane sentence into an engaging slogan.",
    "Here's a mundane sentence: 'We sell fresh fruits.' Craft a catchy and memorable slogan out of it. Provide the transformed slogan without additional explanation.",
    {
      input: `We sell fresh fruits.`,
      output: `Unleash Freshness: Bite into Our Fruits!`,
    }
  )
  .addAgent(
    "You're an AI expert in translating English to emoji language. Convert the given English text into emoji language creatively, ensuring the message is clear and fun.",
    "Given an English slogan, convert it into emoji language. Ensure it's fun, engaging, and the message remains clear. Provide only the emoji translation.",
    {
      input: `Unleash Freshness: Bite into Our Fruits!`,
      output: `🌊💨🍃: 🦷➡️🍎🍌🍇!`,
    }
  )
  .addAgent(
    "You're an AI capable of generating QR codes from text. Take the emoji language text and create a QR code from it, providing a download link to the QR image.",
    "Receive emoji language text. Generate a QR code from it, providing a download link to the QR image without additional explanations.",
    {
      input: `🌊💨🍃: 🦷➡️🍎🍌🍇!`,
      output: `[Download QR Code](http://example.com/qr?data=%F0%9F%8C%8A%F0%9F%92%A8%F0%9F%8D%83%3A%20%F0%9F%A6%B7%E2%9E%A1%EF%B8%8F%F0%9F%8D%8E%F0%9F%8D%8C%F0%9F%8D%87%21)`,
    }
  );

agentChain.execute("We sell fresh fruits.").then(result => console.log(result));
```
