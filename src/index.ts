import { IPasswordConfig } from "./models/IPasswordConfig";
import { Char, Utils } from "./services";
import { PasswordError } from "./helpers/PasswordError";
import { validation } from "./helpers/validation";

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

const createPassword = (length: number, config: IPasswordConfig) => {
  const control = validation({ length, config });

  if (!control.success) {
    const {
      error: { code, message },
    } = control;
    throw new PasswordError(code, message);
  }

  const keys = utils.getSelectedKeys(config);

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
    utils.generateEmptyArray(len).forEach((_) => {
      const index = utils.generateRandomNumber(
        arrayWithSelectedProperties.length
      );
      passwordAsArray.push(arrayWithSelectedProperties[index]);
    });
  }

  return utils.shuffle(passwordAsArray).join("");
};

export { generatePassword, IPasswordConfig };
