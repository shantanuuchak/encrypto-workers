export function encrypt(text, key) {
  let alphabets = "abcdefghijklmnopqrstuvwxyz";
  let encryptedString = "";

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

    const index = alphabets.indexOf(char);
    let newIndex = index + key;

    if (newIndex > 25) newIndex %= 26;

    const newChar = alphabets[newIndex];
    encryptedString += newChar;

    alphabets = alphabets.toLowerCase();
  }

  return encryptedString.split("").reverse().join("");
}

// Generates a key from 1 to 100
export function generateKey() {
  return Math.ceil(Math.random() * 100);
}

export function decrypt(text, key) {}
