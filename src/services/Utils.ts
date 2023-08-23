export class Utils {
  
    static #instance: Utils;
  
    static get(): Utils {
      if (!this.#instance) {
        this.#instance = new Utils();
      }
      return this.#instance;
    }
  
    generateEmptyArray = (length: number) => [...Array(length).keys()];

    generateRandomNumber = (max: number, min = 0) => Math.floor(Math.random() * (max - min + 1) - min);
  
    shuffle = (arr: string[]): string[] => arr.sort(() => +Math.random - 0.5);
  }
  