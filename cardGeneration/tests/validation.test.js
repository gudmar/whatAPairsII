import { toHaveTheSameElements } from "../../testMatchers.js"
import { isPrimaryNumber, commonSymbolsBetweenArrays } from "../validation.js"
expect.extend({toHaveTheSameElements})

describe('Testing validation', () => {
    describe('Testing isPrimaryNumber', () => {
        it('Should return true for 1', () => {
            expect(isPrimaryNumber(1)).toBe(true);
        });
        it('Should return true for 2', () => {
            expect(isPrimaryNumber(2)).toBe(true);
        });
        it('Should return true for 3', () => {
            expect(isPrimaryNumber(3)).toBe(true);
        });
        it('Should return true for 5', () => {
            expect(isPrimaryNumber(5)).toBe(true);
        });
        it('Should return true for 7', () => {
            expect(isPrimaryNumber(7)).toBe(true);
        });
        it('Should return true for 101', () => {
            expect(isPrimaryNumber(101)).toBe(true);
        });
        it('Should return false for 55', () => {
            expect(isPrimaryNumber(55)).toBe(false);
        });
        it('Should return false for 123', () => {
            expect(isPrimaryNumber(123)).toBe(false);
        });
    });
    describe('Testing commonSymbolsBetweenArrays', () => {
        it('Should return [1, 2, 3] for [6, 4, 3, 2, 1, 0, 9] and [1, A, B, 3, C, D, 2]', () => {
            const arr1 = [6, 4, 3, 2, 1, 0, 9];
            const arr2 = [1, 'A', 'B', 3, 'C', 'D', 2];
            expect(commonSymbolsBetweenArrays(arr1, arr2)).toHaveTheSameElements([1,2,3]);
        });
        it('Should return [1, 2, 3] for [6, 4, 3, 2, 1, 2, 2, 3, 0, 9] and [1, 3, A, 2, B, 3, C, D, 2]', () => {
            const arr1 = [6, 4, 3, 2, 1, 2, 2, 3, 0, 9];
            const arr2 = [1, 3, 'A', 2, 'B', 3, 'C', 'D', 2];
            expect(commonSymbolsBetweenArrays(arr1, arr2)).toHaveTheSameElements([1,2,3, 2, 3]);
        });
        it('Should return [] for [6, 4, 0, 9, Z] and [1, 3, A, 2, B, 3, C, D, 2]', () => {
            const arr1 = [6, 4, 0, 9, 'Z'];
            const arr2 = [1, 3, 'A', 2, 'B', 3, 'C', 'D', 2];
            console.log(commonSymbolsBetweenArrays(arr1, arr2))
            expect(commonSymbolsBetweenArrays(arr1, arr2)).toHaveTheSameElements([]);
        })
    })
    describe('Testing notValidCardsAboveIndex', () => {
        it('Should return [', () => {
            throw new Error('Convert matchers comparing objects and test it')
        })
    })
});
