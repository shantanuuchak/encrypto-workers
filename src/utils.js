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
  // Step 1: Reverse the encrypted text (since encryption involved reversing)
  const reverseText = text.split("").reverse().join("");

  // Step 2: Alphabets for index lookup
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  let decryptedString = "";

  // Step 3: Decrypt character by character
  for (let char of reverseText) {
    // Check if character is uppercase or non-alphabetical
    if (!alphabets.includes(char)) {
      if (alphabets.toUpperCase().includes(char)) {
        // Convert to uppercase alphabets for decryption
        const upperAlphabets = alphabets.toUpperCase();
        const index = upperAlphabets.indexOf(char);
        let newIndex = (index - key) % 26;

        // Handle negative index using modulus
        if (newIndex < 0) newIndex += 26;

        const newChar = upperAlphabets[newIndex];
        decryptedString += newChar;
      } else {
        // Non-alphabetic characters remain unchanged
        decryptedString += char;
      }
    } else {
      // Handle lowercase characters
      const index = alphabets.indexOf(char);
      let newIndex = (index - key) % 26;

      // Handle negative index using modulus
      if (newIndex < 0) newIndex += 26;

      const newChar = alphabets[newIndex];
      decryptedString += newChar;
    }
  }

  return decryptedString;
}
