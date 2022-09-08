import { toHaveTheSameElements } from "../../testMatchers.js"
import { 
    getAllSymbols,
} from "../symbols.js"
expect.extend({toHaveTheSameElements})


describe('Testing symbols.js', () => {
    describe('Testing getAllSymbols', () => {
        it('Should return [0,1,2,3,4,5,6] in case nrOfSymbolsOnCard is 3', () => {
            expect(getAllSymbols(3)).toEqual([0,1,2,3,4,5,6])
        })
    })
    describe('Testing getAllSymbols', () => {
        it('Should return [0...20] in case nrOfSymbolsOnCard is 5', () => {
            expect(getAllSymbols(5)).toEqual([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])
        })
    })
})