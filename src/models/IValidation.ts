export interface IValidation {
  success: boolean;
  error?: IValidationError;
}

interface IValidationError {
  code: string;
  message: string;
}
