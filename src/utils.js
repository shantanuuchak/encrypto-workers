export function encrypt(text, key) {
  // Alphabets to get index and calculate new
  let alphabets = "abcdefghijklmnopqrstuvwxyz";

  // Placeholder
  let encryptedString = "";

  // Generating every single character of input
  for (let char of text) {
    // Checking for special char or uppercase
    if (!alphabets.includes(char)) {
      if (alphabets.toUpperCase().includes(char)) {
        alphabets = alphabets.toUpperCase();
      } else {
        encryptedString += char;
        continue;
      }
    }

    // Find the index of current
    const index = alphabets.indexOf(char);
    let newIndex = index + key; // Generate new index by adding key

    if (newIndex > 25) newIndex %= 26; // Check for out of range

    const newChar = alphabets[newIndex]; // Find new character
    encryptedString += newChar; // Append to encrypted string

    alphabets = alphabets.toLowerCase(); // Transform to lowercase
  }

  // Reverse the response to make encryption more robust
  return encryptedString.split("").reverse().join("");
}

// Generates a key from 1 to 100
export function generateKey() {
  return Math.ceil(Math.random() * 100);
}

export function decrypt(text, key) {
  const reverseText = text.split("").reverse().join("");
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const decryptedText = "";

  for (let char of reverseText) {
    const index = alphbaets[char];
    const newIndex = index - key;
    if (newIndex < 0) {
    }
  }
}
