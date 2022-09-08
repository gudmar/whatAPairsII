import { toHaveTheSameElements } from "../../testMatchers.js"
import DobbleSolution from "../solution.js"
expect.extend({toHaveTheSameElements})

describe('Testing DobbleSolution class', () => {
    describe('Testing getRowSectionNr', () => {
        it('Should return 0 if nrOfSymbolsOnCard is 4 and nrOfCard is 0', () => {
            const solution = new DobbleSolution(4);
            expect(solution.getRowSectionNr(0)).toBe(0)
        })       
        it('Should return 0 if nrOfSymbolsOnCard is 4 and nrOfCard is 3', () => {
            const solution = new DobbleSolution(4);
            expect(solution.getRowSectionNr(3)).toBe(0)
        })     
        it('Should return 1 if nrOfSymbolsOnCard is 4 and nrOfCard is 4', () => {
            const solution = new DobbleSolution(4);
            expect(solution.getRowSectionNr(4)).toBe(1)
        })     
        it('Should return 2 if nrOfSymbolsOnCard is 4 and nrOfCard is 7', () => {
            const solution = new DobbleSolution(4);
            expect(solution.getRowSectionNr(7)).toBe(2)
        })   
        it('Should return 2 if nrOfSymbolsOnCard is 4 and nrOfCard is 10', () => {
            const solution = new DobbleSolution(4);
            expect(solution.getRowSectionNr(10)).toBe(2)
        }) 
    });
    describe('Testing getCardIndexInSection', () => {
        it('Should return 0 in case nrOfCard is 0', () => {
            const solution = new DobbleSolution(5);
            expect(solution.getCardIndexInSection(0)).toBe(0)
        })
        it('Should return 0 in case nrOfCard is 5 and nrOfSymbolsOnCard is 5', () => {
            const solution = new DobbleSolution(5);
            expect(solution.getCardIndexInSection(5)).toBe(1)
        })
        it('Should return 0 in case nrOfCard is 10 and nrOfSymbolsOnCard is 5', () => {
            const solution = new DobbleSolution(5);
            expect(solution.getCardIndexInSection(5)).toBe(1)
        })
        it('Should return 3 in case nrOfCard is 13 and nrOfSymbolsOnCard is 5', () => {
            const solution = new DobbleSolution(5);
            expect(solution.getCardIndexInSection(13)).toBe(4)
        })
        it('Should return 5 in case nrOfCard is 14 and nrOfSymbolsOnCard is 5', () => {
            const solution = new DobbleSolution(5);
            expect(solution.getCardIndexInSection(14)).toBe(0)
        })
        it('Should return 0 in case nrOfCard is 15 and nrOfSymbolsOnCard is 5', () => {
            const solution = new DobbleSolution(5);
            expect(solution.getCardIndexInSection(15)).toBe(1)
        })
    })
})
