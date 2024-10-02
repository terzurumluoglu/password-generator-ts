import { REQUIREMENT } from "../constants";
import { IPasswordConfig } from "../models";
import { Utils } from "../services";
import { PasswordError } from "./PasswordError";

const utils: Utils = Utils.get();

export const validation = (control: {
  length: number;
  config: IPasswordConfig;
}): {
  selectedConfigOptions: string[];
} => {
  const { length, config } = control;

  if (length < REQUIREMENT.length.min) {
    const error = {
      code: "length-min",
      message: `at least ${REQUIREMENT.length.min} characters must be entered`,
    };
    throw new PasswordError(error.code, error.message);
  }

  const selectedConfigOptions: string[] = utils.getSelectedKeys(config);

  if (selectedConfigOptions.length < REQUIREMENT.config.min) {
    const error = {
      code: "options-min",
      message: `at least ${REQUIREMENT.config.min} options must be selected except noDuplicate`,
    };
    throw new PasswordError(error.code, error.message);
  }

  if (selectedConfigOptions.length > REQUIREMENT.config.max) {
    const error = {
      code: "max",
      message: `at most ${REQUIREMENT.config.max} options must be selected except noDuplicate`,
    };
    throw new PasswordError(error.code, error.message);
  }

  return {
    selectedConfigOptions,
  };
};
