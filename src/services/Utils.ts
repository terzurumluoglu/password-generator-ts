import { IPasswordConfig, VALID_KEYS } from "../models";

export class Utils {
  static #instance: Utils;

  static get(): Utils {
    if (!this.#instance) {
      this.#instance = new Utils();
    }
    return this.#instance;
  }

  generateEmptyArray = (length: number) => [...Array(length).keys()];

  generateRandomNumber = (max: number, min = 0) =>
    Math.floor(Math.random() * (max - min + 1) - min);

  shuffle = (arr: string[]): string[] => arr.sort(() => +Math.random - 0.5);

  getSelectedKeys(config: IPasswordConfig): string[] {
    return Object.entries(config)
      .filter((ent) => VALID_KEYS.includes(ent[0]))
      .filter((ent) => ent[1])
      .map((ent) => ent[0]);
  }
}
