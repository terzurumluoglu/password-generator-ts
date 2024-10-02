import { IPasswordConfig } from "./models";
import { Char, Utils } from "./services";
import { PasswordError, validation } from "./helpers";

const char = Char.get();
const utils = Utils.get();

const generatePassword = (
  length: number,
  config: IPasswordConfig
): {
  password: string | undefined;
  error: { code: string; message: string } | undefined;
} => {
  try {
    const password = createPassword(length, config) as string;
    return { password, error: undefined };
  } catch (error: any) {
    return { password: undefined, error };
  }
};

const createPassword = (
  length: number,
  config: IPasswordConfig
): string | PasswordError => {
  // eslint-disable-next-line prefer-const
  let { noDuplicate, ...others } = config;

  const { selectedConfigOptions } = validation({ length, config: others });

  const passwordAsArray: string[] = [];

  let arrayWithSelectedProperties: string[] = selectedConfigOptions.reduce(
    (acc: string[], key: string) => {
      const arr: string[] = char[key as keyof typeof char] as string[];
      const index = utils.generateRandomNumber(arr.length - 1);
      passwordAsArray.push(arr[index]);
      return [...acc, ...arr];
    },
    []
  );

  const len = length - selectedConfigOptions.length;

  if (noDuplicate) {
    arrayWithSelectedProperties = arrayWithSelectedProperties.filter(
      (a) => !passwordAsArray.includes(a)
    );

    if (len > arrayWithSelectedProperties.length) {
      noDuplicate = false;
      arrayWithSelectedProperties = [
        ...arrayWithSelectedProperties,
        ...passwordAsArray,
      ];
    }
  }

  if (len > 0) {
    utils.generateEmptyArray(len).forEach((_) => {
      const index = utils.generateRandomNumber(
        arrayWithSelectedProperties.length - 1
      );
      passwordAsArray.push(arrayWithSelectedProperties[index]);
      noDuplicate && arrayWithSelectedProperties.splice(index, 1);
    });
  }

  return utils.shuffle(passwordAsArray).join("");
};

export { generatePassword, IPasswordConfig };
