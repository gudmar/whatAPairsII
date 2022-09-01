import { countSymbolsOnCardOnReadySolution, allCardsAreConnectedToAddedCard } from "../solutionCheckers";
import { errorMessages } from '../errors.js'
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

describe('Testing allCardsAreConnectedToAddedCard', () => {
    it('Should return false in case one card is not connected', () => {
        const solution = [
            [1, 2, 3, 4, 5],
            [1, 6, 7, 8, 9],
            [1, 10, 11, 12, 13],
        ];
        const addedCard = [ 2, 6, 14, 15 ];
        expect(allCardsAreConnectedToAddedCard(solution, addedCard)).toBe(false)
    });

    it('Should return true in case every card is connected', () => {
        const solution = [
            [1, 2, 3, 4, 5],
            [1, 6, 7, 8, 9],
            [1, 10, 11, 12, 13],
        ];
        const addedCard = [ 2, 6, 14, 15, 10 ];
        expect(allCardsAreConnectedToAddedCard(solution, addedCard)).toBe(true)
    });

    it('Should throw error in case more then one symbols repeat in one of cards', () => {
        const solution = [
            [1, 2, 3, 4, 5],
            [1, 6, 7, 8, 9],
            [1, 10, 11, 12, 13],
        ];
        const addedCard = [ 2, 6, 14, 15, 13, 10 ];
        expect(() => allCardsAreConnectedToAddedCard(solution, addedCard)).toThrow(errorMessages.TOO_MANY_SYMBOLS_REPEAT)
    });

    it('Should throw error in case solution is an empty array', () => {
        const solution = [];
        const addedCard = [ 2, 6, 14, 15, 13, 10 ];
            expect(() => allCardsAreConnectedToAddedCard(solution, addedCard)).toThrow(errorMessages.EMPTY_ARG);
    });
    it('Should throw error in case one of solution arrays is not an array', () => {
        const solution = [[1], [3], 4];
        const addedCard = [ 2, 6, 14, 15, 13, 10 ];
            expect(() => allCardsAreConnectedToAddedCard(solution, addedCard)).toThrow(errorMessages.NOT_EVERY_ITEM_ARRAY);
    });
})





