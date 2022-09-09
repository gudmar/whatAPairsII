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
    describe('TEsting getPossibleSymbolsAtSectionIndex', () => {
        it('Should return [0,1,2,3] in case of 4 symbols on card, 0 section', () => {
            const solution = new DobbleSolution(4);
            expect(solution.getPossibleSymbolsAtSectionIndex(0)).toEqual([0,1,2,3])
        })
        it('Should return [4,5,6] in case of 4 symbols on card, 1 section', () => {
            const solution = new DobbleSolution(4);
            expect(solution.getPossibleSymbolsAtSectionIndex(1)).toEqual([4,5,6])
        })
        it('Should return [7,8,9] in case of 4 symbols on card, 2 section', () => {
            const solution = new DobbleSolution(4);
            expect(solution.getPossibleSymbolsAtSectionIndex(2)).toEqual([7,8,9])
        })
        it('Should return [10, 11, 12] in case of 4 symbols on card, 3 section', () => {
            const solution = new DobbleSolution(4);
            expect(solution.getPossibleSymbolsAtSectionIndex(3)).toEqual([10,11,12])
        })
        it('Should throw in case of 4 symbols on card, 4 section given, as this is out of range. Sections 0,1,2,3 are available for 4 symbols on a card.', () => {
            const solution = new DobbleSolution(4);
            const func = () => solution.getPossibleSymbolsAtSectionIndex(4);
            expect(func).toThrow(DobbleSolution.errors)
        })
        it('Should throw in case of 4 symbols on card, -1 section given, as this is out of range. Sections 0,1,2,3 are available for 4 symbols on a card.', () => {
            const solution = new DobbleSolution(4);
            const func = () => solution.getPossibleSymbolsAtSectionIndex(-1);
            expect(func).toThrow(DobbleSolution.errors)
        })
        it('Should return [0,1,2,3,4,5] in case of 6 symbols on card, 0 section', () => {
            const solution = new DobbleSolution(6);
            expect(solution.getPossibleSymbolsAtSectionIndex(0)).toEqual([0,1,2,3,4,5])
        })
        it('Should return [26,27,28,29,30] in case of 6 symbols on card, 5 section', () => {
            const solution = new DobbleSolution(6);
            expect(solution.getPossibleSymbolsAtSectionIndex(5)).toEqual([26,27,28,29,30])
        })
        it('Should return [0,1] in case of 2 symbols on card, 0 section', () => {
            const solution = new DobbleSolution(2);
            expect(solution.getPossibleSymbolsAtSectionIndex(0)).toEqual([0,1])
        })
        it('Should return [2] in case of 2 symbols on card, 1 section', () => {
            const solution = new DobbleSolution(2);
            expect(solution.getPossibleSymbolsAtSectionIndex(1)).toEqual([2])
        })
    })
    describe('Testing shiftArray', () => {
        it('Should return [3,4,5,0,1,2] in case nrOfElements is 3', () => {
            const solution = new DobbleSolution(2);
            const arr = [0,1,2,3,4,5];
            expect(solution.shiftArray(arr, 3)).toEqual([3,4,5,0,1,2])
        });
        it('Should return [3,4,5,0,1,2] in case nrOfElements is 21', () => {
            const solution = new DobbleSolution(2);
            const arr = [0,1,2,3,4,5];
            expect(solution.shiftArray(arr, 21)).toEqual([3,4,5,0,1,2])
        })
        it('Should return [0,1,2,3,4,5] in case nrOfElements is 0', () => {
            const solution = new DobbleSolution(2);
            const arr = [0,1,2,3,4,5];
            expect(solution.shiftArray(arr, 0)).toEqual([0,1,2,3,4,5])
        })
        it('Should return [0,1,2,3,4,5] in case nrOfElements is 6', () => {
            const solution = new DobbleSolution(2);
            const arr = [0,1,2,3,4,5];
            expect(solution.shiftArray(arr, 6)).toEqual([0,1,2,3,4,5])
        })
    })
    describe('Testing orderSymbols', () => {
        it('Should return [ [ 0, 1, 2, 3 ], 0, 0, 0 ] if nrOfSymbolsOnCard is 4 and card 0 symbol 0 are given', () => {
            const solution = new DobbleSolution(4);
            const symbols = [0,1,2,3];
            const nrOfCard = 0;
            const nrOfSection = 0;
            const expected = [
                [0,1,2,3],
                0,
                0,
                0
            ]
            // console.log('expected')
            
            const result = solution.orderSymbols(symbols, nrOfCard, nrOfSection);

            // console.log(result)
            // console.log(expected)
            expect(result).toEqual(expected)
            
        });
        it('Should return [ [ 0, 1, 2, 3 ], 0, 0, 0 ] if soultion for 4 cards is generated, symbolNr is 0 and card generated is 1', () => {
            const solution = new DobbleSolution(4);
            const symbols = [0,1,2,3];
            const nrOfCard = 1;
            const nrOfSection = 0;
            const expected = [
                [0,1,2,3],
                0,
                0,
                0
            ]
            const result = solution.orderSymbols(symbols, nrOfCard, nrOfSection);
            expect(result).toEqual(expected);
        })
        it('Should return [ 1,1,1 ] if soultion for 4 cards is generated, symbolNr is 0 and card generated is 5', () => {
            const solution = new DobbleSolution(4);
            const symbols = [0,1,2,3];
            const nrOfCard = 5;
            const nrOfSection = 0;
            const expected = [1,1,1]
            const result = solution.orderSymbols(symbols, nrOfCard, nrOfSection);
            expect(result).toEqual(expected);
        })
    })
})
