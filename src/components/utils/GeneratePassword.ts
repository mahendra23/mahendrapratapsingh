function getRandomChar(charset: string): string {
  const randomIndex = Math.floor(Math.random() * charset.length);
  return charset[randomIndex];
}

function shuffle(str: string): string {
  return str
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
}

export function generatePassword(length: number = 20): string {
  if (length < 8) {
    throw new Error("Password length should be at least 8 for security.");
  }

  const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const LOWER = "abcdefghijklmnopqrstuvwxyz";
  const DIGITS = "0123456789";
  const SYMBOLS = "!@#$%^&*()-_=+[]{}<>?";
  const ALL = UPPER + LOWER + DIGITS + SYMBOLS;

  // Ensure at least one from each category
  let password = "";
  password += getRandomChar(UPPER);
  password += getRandomChar(LOWER);
  password += getRandomChar(DIGITS);
  password += getRandomChar(SYMBOLS);

  // Fill the rest with random characters
  for (let i = password.length; i < length; i++) {
    password += getRandomChar(ALL);
  }

  // Shuffle so guaranteed chars aren’t always at start
  return shuffle(password);
}

// Main script
// const lengthArg = process.argv[2] ? parseInt(process.argv[2], 10) : 20;
// try {
//   const password = generatePassword(lengthArg);
//   console.log("Your strong password:", password);
// } catch (err) {
//   console.error("Error:", (err as Error).message);
//   process.exit(1);
// }
