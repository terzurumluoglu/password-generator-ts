export class Char {
    alphabetAsNumbers;
    constructor() {
      this.alphabetAsNumbers = [...Array(26).keys()].map((_, i) => 10 + i);
    }
  
    static #instance: Char;
  
    static get(): Char {
      if (!this.#instance) {
        this.#instance = new Char();
      }
      return this.#instance;
    }
  
    get numbers(): string[] {
      return [...Array(10).keys()].map((key) => JSON.stringify(key));
    }
  
    get lowercases(): string[] {
      return this.alphabetAsNumbers.map((a) => a.toString(36));
    }
  
    get uppercases(): string[] {
      return this.alphabetAsNumbers.map((a) => a.toString(36).toLocaleUpperCase());
    }
  
    get symbols(): string[] {
      return ['^', '*', '!', '&', '$', '%', '#', '@'];
    }
  }
  