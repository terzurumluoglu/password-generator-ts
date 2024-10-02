# Password Generator Typescript / Javascript

Password Generator is a typescript library for generating strong password easily.

## Installation

```bash
npm i password-generator-ts --save
```

## How can I use?

```typescript
import { generatePassword, IPasswordConfig } from "password-generator-ts";

const size: number = 8; // should be at least 6

// You should set as true at least two options
const config: IPasswordConfig = {
  // for including lowercase
  lowercases: true,

  // for including uppercase
  uppercases: true,

  // for including symbols
  symbols: false,

  // for including numbers
  numbers: false,

  // for not including same characters, number or symbols,
  // if the cases has not enough character, noDuplicate set as false automatically
  noDuplicate: true,
};

// # returns generated password: 'wREzBnDk'
// or when error occured:
// 'at least 2 options must be selected except noDuplicate' || 'at least 6 characters must be entered'

// If the process take an error,
//password will undefined and error will full with error code and message,

// If the process copmleted succesfully,
//error will undefined and password will full with generated password.

const { error, password } = generatePassword(size, config);

if (error) {
  console.log(error.code, error.message);
  return;
}
console.log(password);
```
