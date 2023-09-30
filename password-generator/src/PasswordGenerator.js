const { ALLCHARSETS } = require("./charsets");

class PasswordGenerator {
  #charset;
  #charsetLength;

  constructor() {
    this.useCharset(ALLCHARSETS);
  }

  /**
   * Store the charset that will be used for generating the next passwords.
   * @param {string} charset - A string of characters.
   */
  useCharset(charset) {
    this.#charset = charset;
    this.#charsetLength = charset.length;
  }

  /**
   * Generate a new password using the current charset with equal chances of
   * selecting each character.
   * @param {number} length - The length of the password.
   * @returns {string} A new random password.
   */
  random(length) {
    const password = Array.from({ length }, this.#getRandomChar, this).join("");
    return password;
  }

  /**
   * Choose a character randomly from the current charset.
   * @returns {string} A random character.
   */
  #getRandomChar() {
    const randomIndex = Math.floor(Math.random() * this.#charsetLength);
    const randomChar = this.#charset[randomIndex];
    return randomChar;
  }
}

module.exports = PasswordGenerator;
