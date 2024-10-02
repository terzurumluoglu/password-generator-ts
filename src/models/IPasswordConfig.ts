export interface IPasswordConfig {
  numbers?: boolean;
  lowercases?: boolean;
  uppercases?: boolean;
  symbols?: boolean;
  noDuplicate?: boolean;
}

type PasswordConfigKeys = keyof IPasswordConfig;

export const VALID_KEYS: (PasswordConfigKeys | string)[] = [
  "numbers",
  "lowercases",
  "uppercases",
  "symbols",
];
