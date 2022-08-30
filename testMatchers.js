// import { expect } from "node:test";
const cpArr = arr => arr.map(_ => _);
const toHaveTheSameElements = (received, arr) => {
    if (received.length != arr.length) return {
        message: () => 'Arrays have different length',
        pass: false,
    };
    if ([received, arr].some(_ => !Array.isArray(_))) return {
        message: () => 'One of arguments is not an array',
        pass: false,
    } 
    const arr1 = cpArr(received);
    const arr2 = cpArr(arr);
    const result = arr1.reduce((acc, item) => {
        const index = acc.findIndex(el => el === item);
        if (index > -1) {
            acc.splice(index, 1);
        }
        return acc;
    }, arr2)
    return result.length === 0 ? {
        message: 'Arrays contain the same elements',
        pass: true,
    }: {
        message: 'Arrays contain different elements',
        pass: false,
    };
}

export { toHaveTheSameElements }