import torch
from transformers import AutoModelForCausalLM, AutoTokenizer, TextStreamer

torch.backends.cuda.matmul.allow_tf32 = True
torch.backends.cudnn.allow_tf32 = True
torch.set_default_device('cuda')

llm = "meta-llama/Llama-3.2-3B-Instruct"
temperature=0.9
max_length=8192
max_new_tokens=300

prompt = f"Once upon a time"

model = AutoModelForCausalLM.from_pretrained(llm, torch_dtype=torch.float16, device_map="auto", attn_implementation="sdpa").eval()
tokenizer = AutoTokenizer.from_pretrained(llm)
streamer = TextStreamer(tokenizer)

inputs = tokenizer(prompt, truncation=True, max_length=max_length, return_tensors="pt").to("cuda")
for token in model.generate(**inputs, streamer=streamer, max_new_tokens=max_new_tokens, temperature=temperature, use_cache=True):
    print(tokenizer.decode(token, skip_special_tokens=True))
