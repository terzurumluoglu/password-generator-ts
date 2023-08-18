"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _a, _Char_instance;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Char = void 0;
class Char {
    constructor() {
        this.alphabetAsNumbers = [...Array(26).keys()].map((_, i) => 10 + i);
    }
    static get() {
        if (!__classPrivateFieldGet(this, _a, "f", _Char_instance)) {
            __classPrivateFieldSet(this, _a, new Char(), "f", _Char_instance);
        }
        return __classPrivateFieldGet(this, _a, "f", _Char_instance);
    }
    get numbers() {
        return [...Array(10).keys()].map((key) => JSON.stringify(key));
    }
    get lowercases() {
        return this.alphabetAsNumbers.map((a) => a.toString(36));
    }
    get uppercases() {
        return this.alphabetAsNumbers.map((a) => a.toString(36).toLocaleUpperCase());
    }
    get symbols() {
        return ['^', '*', '!', '&', '$', '%', '#', '@'];
    }
}
exports.Char = Char;
_a = Char;
_Char_instance = { value: void 0 };
