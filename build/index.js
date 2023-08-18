"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePassword = void 0;
const services_1 = require("./services");
const char = services_1.Char.get();
const utils = services_1.Utils.get();
const generatePassword = (config) => {
    const { length } = config, others = __rest(config, ["length"]);
    if (length < 4) {
        return new Error('length must be at least 4 characters');
    }
    const keys = Object.entries(others)
        .filter((ent) => ent[1])
        .map((ent) => ent[0]);
    if (keys.length < 2) {
        return new Error('You must select at least two option to generate password');
    }
    const passwordAsArray = [];
    const arrayWithSelectedProperties = [];
    keys.forEach((key) => {
        const arr = char[key];
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
exports.generatePassword = generatePassword;
