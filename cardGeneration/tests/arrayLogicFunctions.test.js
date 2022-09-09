// import { describe } from "node:test";
import { xor, and, getArrayOfNull, getArraySlice, errors} from "../arrayLogicFunctions.js";
import { toHaveTheSameElements } from "../../testMatchers.js"
// const { xor } = require('../arrayLogicFunctions.js');

expect.extend({toHaveTheSameElements})


describe('Testing and from arrayLogicFunctions', () => {
    it('Should return 1, 2, 3 in case these elements are common for both arrays', () => {
        const arr1 = [0, -2, 1, 2, 3, 5, 6];
        const arr2 = [-100, 1, 23, 2, 33, 3, 4];
        expect (and(arr1, arr2)).toEqual([1, 2, 3])
    })
    it('Should return 1, 2, 3 in case these elements are common for both arrays, even if those elements repete', () => {
        const arr1 = [0, -2, 1, 1, 2, 3, 2, 5, 3, 6];
        const arr2 = [-100, 1, 23, 2, 33, 3, 4];
        expect (and(arr1, arr2)).toEqual([1, 2, 3])
    })
    it('Should return 1, 2, 3 in case these elements are common for both arrays, even if those elements repete (change args order)', () => {
        const arr1 = [-100, 1, 23, 2, 33, 3, 4];
        const arr2 = [0, -2, 1, 1, 2, 3, 2, 5, 3, 6];
        expect (and(arr1, arr2)).toEqual([1, 2, 3])
    })
    it ('Should return [] in case none elements are common', () => {
        const arr1 = [1, 2, 3, 4];
        const arr2 = [5, 6, 7, 8];
        expect (and(arr1, arr2)).toEqual([])
    })
    it ('Should return [] in case first array is empty', () => {
        const arr1 = [];
        const arr2 = [5, 6, 7, 8];
        expect (and(arr1, arr2)).toEqual([])
    })
    it ('Should return [] in case second array is empty', () => {
        const arr1 = [1, 2, 3, 4];
        const arr2 = [];
        expect (and(arr1, arr2)).toEqual([])
    })

})

describe('Testing xor from arrayLogicFunctions', () => {
    it('Should return [] in case both arrays are equal', () => {
        const arr1 = [1, 3, 2, 4];
        const arr2 = [1, 3, 2, 4];
        expect(xor(arr1, arr2)).toEqual([])
    })
    it('Should return [2, 4] in case arrays are the same, but one array missed 2 and 4', () => {
        const arr1 = [1, 3];
        const arr2 = [1, 3, 2, 4];
        expect(xor(arr1, arr2)).toEqual([2, 4])
    })
    it('Should return [2, 4, 5] in case arrays are the same, but one array missed 2 and 4, and the other array misses 5', () => {
        const arr1 = [1, 3, 5];
        const arr2 = [1, 3, 2, 4];
        expect(xor(arr1, arr2)).toEqual([5, 2, 4])
    })
    it('Should return [1, 3, 2, 4] one array is empty', () => {
        const arr1 = [];
        const arr2 = [1, 3, 2, 4];
        expect(xor(arr1, arr2)).toHaveTheSameElements([1, 2, 3, 4])
    })
    it('Should return [1, 3, 5] in case second array is empty', () => {
        const arr1 = [1, 3, 5];
        const arr2 = [];
        expect(xor(arr1, arr2)).toEqual([1, 3, 5])
    })
});
describe('Testing getArraySlice', () => {
    it('Should return 3,4,5,6 in case [0,1,2,3,4,5,6,7,8] start is 3, end is 6', () => {
        const arr = [0,1,2,3,4,5,6,7,8];
        const result = getArraySlice(arr, 3, 6)
        expect(result).toEqual([3,4,5,6])
    })
    it('Should return 1,2,3,4,5,6,7,8 in case [0,1,2,3,4,5,6,7,8] start is 0, end is 8', () => {
        const arr = [0,1,2,3,4,5,6,7,8];
        const result = getArraySlice(arr, 0, 8)
        expect(result).toEqual([0,1,2,3,4,5,6,7,8])
    })
    it('Should throw in case [0,1,2,3,4,5,6,7,8] start is 0, end is 9, as index 9 is not available', () => {
        const arr = [0,1,2,3,4,5,6,7,8];
        const func = () => getArraySlice(arr, 0, 9)
        expect(func).toThrow(errors.OUTSIDE_INDEX);
    })
    it('Should throw in case [0,1,2,3,4,5,6,7,8] start is -1, end is 4, as index 9 is not available', () => {
        const arr = [0,1,2,3,4,5,6,7,8];
        const func = () => getArraySlice(arr, -1, 4)
        expect(func).toThrow(errors.OUTSIDE_INDEX);
    })
});

describe('Testing getArrayOfNull function', () => {
    it ('Should return an array of null elemnets', () => {
        const result = [null, null, null, null, null];
        expect(getArrayOfNull(5)).toEqual(result)
    })
})