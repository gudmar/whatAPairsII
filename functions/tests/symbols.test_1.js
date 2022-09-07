import { nextSymbolGenerator, getAllSymbols, getListOfAllowedSymbols, nextSymbolGetter } from "../symbols";
import { toHaveTheSameElements } from "../../testMatchers.js"
// const { xor } = require('../arrayLogicFunctions.js');

expect.extend({toHaveTheSameElements})


describe('symbols.nextSymbolGenerator tests', () => {
    it('Should return symbols from 0 to 5 if invoked 5 times', () => {
        const generator = nextSymbolGetter(5);
        const _0 = generator.generate();
        const _1 = generator.generate();
        const _2 = generator.generate();
        const _3 = generator.generate();
        const _4 = generator.generate();
        expect(_0).toBe(0);
        expect(_1).toBe(1);
        expect(_2).toBe(2);
        expect(_3).toBe(3);
        expect(_4).toBe(4);
    })
});

describe('symbols.getAllSymbols test', () => {
    it('Should return 21 symbols for nrOfSymbolsOnCard equal to 5', () => {
        const expected = [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ,16, 17, 18, 19, 20
        ]
        expect(getAllSymbols(5)).toEqual(expected)
    })
})

describe('symbols.getListOfAllowedSymbols', () => {
    it('Should return allowed symbols [5, 6]', () => {
        const allSymbols = [
            0,1,2,3,4,5,6
        ];
        const solution = [
            [0, 2, 4],
            [0, 1],
            [2, 1, 3],
            [0, 3, 5],
            [1, 4, 5],
            [2]
        ];
        const connectedCards = [
            [0, 2, 4],
            [2, 1, 3],
        ];
        const allowedSymbols = [5, 6];
        expect(getListOfAllowedSymbols(allSymbols, connectedCards)).toEqual(allowedSymbols)
    })
    it('Should return allowed symbols [7..20]', () => {
        const allSymbols = [0, 1, 2, 3, 4, 5, 6, 7,8,9,10,11,12,13,14,15,16,17,18,19,20];
        const solution = [
            [0, 2, 4],
            [0, 1, 6],
            [2, 1, 3],
            [0, 3, 5],
            [1, 4, 5],
        ];
        // const addedCard = [3, 6, 7]
        // const connectedCardIndexes = [1,2,3,4,5]
        // const restirctedSymbols = [0, 1, 2, 3, 4, 5]
        const connectedCards = [
            [0, 2, 4],
            [0, 1, 6],
            [2, 1, 3],
            [0, 3, 5],
            [1, 4, 5],
        ]
        const allowedSymbols = [7,8,9,10,11,12,13,14,15,16,17,18,19,20];
        expect(getListOfAllowedSymbols(allSymbols, connectedCards)).toEqual(allowedSymbols)
    })
    it('Should return an empty array in case all allowed symbols are connected', () => {
        const allSymbols = [0, 1, 2, 3, 4, 5, 6];
        const solution = [
            [0, 2, 4],
            [0, 1, 6],
            [2, 1, 3],
            [0, 3, 5],
            [1, 4, 5],
            [2, 5, 6],
            
        ];
        // const addedCard = [3, 4, 6],
        // const connectedCardIndexes = [0,1,2,3,4,5,6]
        // const restirctedSymbols = [0..6]
        const connectedCards = [
            [0, 2, 4],
            [0, 1, 6],
            [2, 1, 3],
            [0, 3, 5],
            [1, 4, 5],
            [2, 5, 6],
        ]
        const allowedSymbols = [];
        expect(getListOfAllowedSymbols(allSymbols, connectedCards)).toEqual(allowedSymbols)
    })

})


