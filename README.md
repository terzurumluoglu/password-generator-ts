# Password Generator Typescript / Javascript

Password Generator is a typescript library for generating strong password easily.

## Installation

```bash
npm install password-generator-ts --save
```

## How can I use?

```typescript
import { generatePassword, IPasswordConfig } from "password-generator-ts";


const length: number = 8   // should be at least 6

// You should set as true at least two options
const config: IPasswordConfig = {
    lowercases: true,      // for including lowercase
    uppercases: true,      // for including uppercase
    symbols: false,        // for including symbols
    numbers: false         // for including numbers
};

# returns 'wREzBnDk'
const password = generatePassword(length, config);

```
