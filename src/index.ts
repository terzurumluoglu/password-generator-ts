import { IPasswordConfig } from './models/IPasswordConfig';
import { Char, Utils } from './services';

const char = Char.get();
const utils = Utils.get();

export const generatePassword = (config: IPasswordConfig) => {
  const { length, ...others } = config;
  if (length < 4) {
    return new Error('length must be at least 4 characters');
  }

  const keys = Object.entries(others)
    .filter((ent) => ent[1])
    .map((ent) => ent[0]);

  if (keys.length < 2) {
    return new Error('You must select at least two option to generate password');
  }

  const passwordAsArray: string[] = [];

  const arrayWithSelectedProperties: string[] = [];

  keys.forEach((key: string) => {
    const arr: string[] = char[key as keyof typeof char] as string[];
    arrayWithSelectedProperties.push(...arr);
    const index = utils.generateRandomNumber(arr.length);
    passwordAsArray.push(arr[index]);
  });

  const len = length - keys.length;

  if (len > 0) {
    [...Array(len).keys()].forEach((_) => {
      const index = utils.generateRandomNumber(arrayWithSelectedProperties.length);
      passwordAsArray.push(arrayWithSelectedProperties[index]);
    });
  }

  return utils.shuffle(passwordAsArray).join('');
};

export { IPasswordConfig };
