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

