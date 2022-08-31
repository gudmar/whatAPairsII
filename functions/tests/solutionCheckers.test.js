import { countSymbolsOnCardOnReadySolution, errorMessages } from "../solutionCheckers";
import { toHaveTheSameElements } from "../../testMatchers.js"
// const { xor } = require('../arrayLogicFunctions.js');

expect.extend({toHaveTheSameElements})

describe('Testing solutionCheckers: countSymbolsOnCardOnReadySolution', () => {
    it('Should throw an error in case not every card is of the same size', () => {
        const solution = [
            [1,2,3],
            [2,3,4],
            [3,4,5,6],
        ]
        expect(() => countSymbolsOnCardOnReadySolution(solution)).toThrow(errorMessages.DIFFERENT_NR_ELEMENTS);
    })
    it('Should throw an error in case not every element in solution is an array', () => {
        const solution = [
            [1,2,3],
            undefined,
            [3,4,5,6],
        ]
        expect(() => countSymbolsOnCardOnReadySolution(solution)).toThrow(errorMessages.NOT_EVERY_ITEM_ARRAY);
    })
    it('Should throw an error in case solution is empty', () => {
        const solution = []
        expect(() => countSymbolsOnCardOnReadySolution(solution)).toThrow(errorMessages.EMPTY_ARG);
    })
    it('Should throw an error in case solution is not an array', () => {
        const solution = undefined;
        expect(() => countSymbolsOnCardOnReadySolution(solution)).toThrow(errorMessages.NOT_ARRAY);
    })
    // it('Should return 3 in case solution is an array of arrays, where each nested array size is 3', () => {
    //     const solution = [
    //         [1,2,3],
    //         [5,6,7],
    //         [3,4,5],
    //         [3,4,5],
    //         [3,4,5],
    //         [3,4,5],
    //     ]
    //     expect(countSymbolsOnCardOnReadySolution(solution)).toBe(3);
    // })



})





