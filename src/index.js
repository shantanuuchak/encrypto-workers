import { Hono } from "hono";
import { encrypt, generateKey, decrypt } from "./utils";

// Start new hono app
const app = new Hono();

// Middleware to set CORS headers for all responses
app.use("*", (c, next) => {
  c.header("Access-Control-Allow-Origin", "*");
  return next();
});

// Respond something on home route
app.get("/", (c) => {
  return c.text("API active!");
});

// Endpoint to reverse the string
app.post("/", async (c) => {
  const { text } = await c.req.json();

  // Check for empty text
  if (!text) {
    return c.json({ error: "No text provided" }, 400);
  }

  // Generate random key and encrypt
  const randomKey = generateKey();
  const encryptedText = encrypt(text, randomKey);

  // Return key and encrypted text
  return c.json({ text: encryptedText, key: randomKey });
});

// Endpoint to decrypt (reverse the reversed string)
app.post("/decrypt", async (c) => {
  const { text, key } = await c.req.json();

  // Check for empty text
  if (!text) {
    return c.json({ error: "No text provided" }, 400);
  }

  // Get original text back
  const originalText = decrypt(text, key); // Decrypting it back
  return c.json({ originalText });
});

export default app;
