import { Hono } from "hono";
import { encrypt, generateKey } from "./utils";

const app = new Hono();

// Middleware to set CORS headers for all responses
app.use("*", (c, next) => {
  c.header("Access-Control-Allow-Origin", "*");
  return next();
});

// Endpoint to reverse the string
app.post("/", async (c) => {
  const { text } = await c.req.json();
  if (!text) {
    return c.json({ error: "No text provided" }, 400);
  }
  const randomKey = generateKey();
  const encryptedText = encrypt(text, randomKey);
  return c.json({ text: encryptedText, key: randomKey });
});

// Endpoint to decrypt (reverse the reversed string)
app.post("/decrypt", async (c) => {
  const { text } = await c.req.json();
  if (!text) {
    return c.json({ error: "No text provided" }, 400);
  }
  const originalText = text.split("").reverse().join(""); // Reversing it back
  return c.json({ originalText });
});

export default app;
