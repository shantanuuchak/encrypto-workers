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

  return encryptedString;
}

export function generateKey() {}

export function decrypt(text, key) {}
