import { Utils } from './Utils';

const utils = Utils.get();

export class Char {
    #alphabetAsNumbers;
    constructor() {
      this.#alphabetAsNumbers = utils.generateEmptyArray(26).map((_, i) => 10 + i);
    }
  
    static #instance: Char;
  
    static get(): Char {
      if (!this.#instance) {
        this.#instance = new Char();
      }
      return this.#instance;
    }
  
    get numbers(): string[] {
      return utils.generateEmptyArray(10).map((key) => JSON.stringify(key));
    }
  
    get lowercases(): string[] {
      return this.#alphabetAsNumbers.map((a) => a.toString(36));
    }
  
    get uppercases(): string[] {
      return this.#alphabetAsNumbers.map((a) => a.toString(36).toLocaleUpperCase());
    }
  
    get symbols(): string[] {
      return ['^', '*', '!', '&', '$', '%', '#', '@'];
    }
  }
  