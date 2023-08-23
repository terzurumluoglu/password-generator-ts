import { REQUIREMENT } from "../constants/requirement";
import { IPasswordConfig } from "../models/IPasswordConfig";
import { IValidation } from "../models/IValidation";
import { Utils } from "../services";

const utils: Utils = Utils.get();

export const validation = (control: { length: number, config: IPasswordConfig }): IValidation => {

    const { length, config } = control;

    if (length < REQUIREMENT.length.min) {
        return {
            success: false,
            error: {
                code: 'length-min',
                message: `at least ${REQUIREMENT.length.min} characters`,
            }
        };
    }

    const selectedConfigOptions: string[] = utils.getSelectedKeys(config);

    if (selectedConfigOptions.length < REQUIREMENT.config.min) {
        return {
            success: false,
            error: {
                code: 'options-min',
                message: `at least ${REQUIREMENT.config.min} options must be selected`,
            }
        };
    }

    if (selectedConfigOptions.length > REQUIREMENT.config.max) {
        return {
            success: false,
            error: {
                code: 'max',
                message: `at most ${REQUIREMENT.config.max} options must be selected`,
            }
        };
    }

    return {
        success: true,
    };
}
