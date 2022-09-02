import { errorMessages } from '../errors.js'
import { toHaveTheSameElements } from "../../testMatchers.js"
import { getFirstNotConnectedCardIndex, getConnectedCards, getNotConnectedCardsWithAllowedSymbol } from '../solution.js'
// const { xor } = require('../arrayLogicFunctions.js');

expect.extend({toHaveTheSameElements})

describe('Testing solution getFirstNotConnectedCardIndex', () => {
    it('Should return -1 in case all cards are connected', () => {
        const solution = [
            [1, 2, 3, 4, 5],
            [1, 6, 7, 8, 9],
            [10, 11, 12, 13],
        ];
        const addedCard = [1, 10, 13]
        expect(getFirstNotConnectedCardIndex(solution, addedCard)).toBe(-1)
    });
    it('Should return 4 in case first not connected card is 4', () => {
        const solution = [
            [1, 2, 3, 4, 5],
            [1, 6, 7, 8, 9],
            [10, 11, 12, 13],
            [18, 19, 20, 21],
            [14, 15, 16, 17,],
            [22, 23, 24, 25],
            [1, 26, 27]
        ];
        const addedCard = [1, 10, 18]
        expect(getFirstNotConnectedCardIndex(solution, addedCard)).toBe(4)
    })
})

describe('Testing solution: getConnectedCards', () => {
    it('Should return properly filtered solution', () => {
        const solution = [
            [1, 2, 3, 4, 5],
            [1, 6, 7, 8, 9],
            [10, 11, 12, 13],
            [18, 19, 20, 21],
            [14, 15, 16, 17,],
            [22, 23, 24, 25],
            [1, 26, 27]
        ];
        const addedCard = [1, 10, 18];
        const expected = [
            [1, 2, 3, 4, 5],
            [1, 6, 7, 8, 9],
            [10, 11, 12, 13],
            [18, 19, 20, 21],
            [1, 26, 27]
        ]
        expect(getConnectedCards(solution, addedCard)).toEqual(expected);
    })
})

describe('Testing solution: getNotConnectedCardsWithAllowedSymbol', () => {
    it('Should return found cards in case some cards are not connected and have allowed symbols', () => {
        const nrOfSymbolsOnACard = 3;
        const addedCard = [1, 2];
        const solution = [
            [0, 3, 2],
            [1, 3, 5],
            [4, 1],
            [6, 7, 8]
        ];
        // const connected cards = 1, 2, 3
        // const restrictedSymbols = [0, 1, 2, 3, 4, 5], as those symbols are on cards connected to our card
        const expectedResult = [
            [6, 7, 8]
        ]
        expect(getNotConnectedCardsWithAllowedSymbol(solution, addedCard, nrOfSymbolsOnACard)).toEqual(expectedResult)
    })
})