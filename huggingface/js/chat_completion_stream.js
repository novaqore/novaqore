import { HfInference } from "@huggingface/inference";
const hf = new HfInference("hf_xxxxxxxxxxxxxxxxxxxxxx");

const messages = [
    {role: "system", content: "You are a helpful assistant."},
    {role: "user", content: "Hello, how are you today?"}
]

const result = await hf.chatCompletionStream({
    model: "meta-llama/Llama-3.1-8B-Instruct",
    messages: messages,
    max_tokens: 400,
  });
  
  let accumulatedContent = ""
  for await (const chunk of result) {
    if (chunk.choices[0].delta.content) {
      const content = chunk.choices[0].delta.content;
      accumulatedContent += content;
        console.log(accumulatedContent)
    }
}
