import { toHaveTheSameElements } from "../../testMatchers.js"
import { isSolutionValid } from "../validation.js"
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
        it('Should return 1 if nrOfSymbolsOnCard is 4 and nrOfCard is 6', () => {
            const solution = new DobbleSolution(4);
            expect(solution.getRowSectionNr(4)).toBe(1)
        }) 
        it('Should return 2 if nrOfSymbolsOnCard is 4 and nrOfCard is 7', () => {
            const solution = new DobbleSolution(4);
            expect(solution.getRowSectionNr(7)).toBe(2)
        })   
        it('Should return 2 if nrOfSymbolsOnCard is 4 and nrOfCard is 9', () => {
            const solution = new DobbleSolution(4);
            expect(solution.getRowSectionNr(7)).toBe(2)
        }) 
        it('Should return 3 if nrOfSymbolsOnCard is 4 and nrOfCard is 10', () => {
            const solution = new DobbleSolution(4);
            expect(solution.getRowSectionNr(10)).toBe(3)
        }) 
    });
    describe('Testing getCardIndexInSection', () => {

        // 0 1 2 3 4 | 5 6 7 8 | 9 10 11 12 | 13 14 15 16 

        it('Should return 0 in case nrOfCard is 0', () => {
            const solution = new DobbleSolution(5);
            expect(solution.getCardIndexInSection(0)).toBe(0)
        })
        it('Should return 0 in case nrOfCard is 5 and nrOfSymbolsOnCard is 5', () => {
            const solution = new DobbleSolution(5);
            expect(solution.getCardIndexInSection(5)).toBe(0)
        })
        it('Should return 0 in case nrOfCard is 9 and nrOfSymbolsOnCard is 5', () => {
            const solution = new DobbleSolution(5);
            expect(solution.getCardIndexInSection(9)).toBe(0)
        })
        it('Should return 1 in case nrOfCard is 10 and nrOfSymbolsOnCard is 5', () => {
            const solution = new DobbleSolution(5);
            expect(solution.getCardIndexInSection(10)).toBe(1)
        })
        it('Should return 0 in case nrOfCard is 13 and nrOfSymbolsOnCard is 5', () => {
            const solution = new DobbleSolution(5);
            expect(solution.getCardIndexInSection(13)).toBe(0)
        })
        it('Should return 5 in case nrOfCard is 14 and nrOfSymbolsOnCard is 5', () => {
            const solution = new DobbleSolution(5);
            expect(solution.getCardIndexInSection(14)).toBe(1)
        })
        it('Should return 2 in case nrOfCard is 15 and nrOfSymbolsOnCard is 5', () => {
            const solution = new DobbleSolution(5);
            expect(solution.getCardIndexInSection(15)).toBe(2)
        })

        it('Should return 2 in case of 9 card in nrOfSymbolsOnCard 4 solution', () => {
            // index: 0  1  2  3  4  5  6  7  8  9  10
            // card:  0  1  2  3 |0  1  2 |0  1  2 | 0
            const solution = new DobbleSolution(4);
            expect(solution.getCardIndexInSection(9)).toBe(2); 
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
    describe('Testing getMultipliedOffset', () => {
        it('Should throw in case cardNr < nrOfSymbolsOnCard', () => {
            const solution = new DobbleSolution(4);
            const nrOfCard = 3;
            const symbolOnCardNr = 3;
            const tested = () => solution.getMultipliedOffset(nrOfCard, symbolOnCardNr);
            const expected = solution.errors.CARD_INDEX_TOO_SMALL('getMultipliedOffset');
            expect(tested).toThrow(expected);
        })
        it('Should throw in case symbolOnCardNr is < 1', () => {
            const solution = new DobbleSolution(4);
            const nrOfCard = 4;
            const symbolOnCardNr = 0;
            const tested = () => solution.getMultipliedOffset(nrOfCard, symbolOnCardNr);
            const expected = solution.errors.SYMBOL_INDEX_TOO_SMALL('getMultipliedOffset');
            expect(tested).toThrow(expected);
        })
        it('Should return 0 for cardNr 4 symbolOnCardNr 1, nrOfSymbolsOnCard is 4', () => {
            const solution = new DobbleSolution(4);
            const nrOfCard = 4;
            const symbolOnCardNr = 1;
            const tested = solution.getMultipliedOffset(nrOfCard, symbolOnCardNr);
            const expected = 0;
            expect(tested).toBe(expected);
        })
        it('Should return 0 for cardNr 8 symbolOnCardNr 1, nrOfSymbolsOnCard is 4', () => {
            const solution = new DobbleSolution(4);
            const nrOfCard = 8;
            const symbolOnCardNr = 1;
            const tested = solution.getMultipliedOffset(nrOfCard, symbolOnCardNr);
            const expected = 0;
            expect(tested).toBe(expected);
        })
        it('Should return 0 for cardNr 4 symbolOnCardNr 2, nrOfSymbolsOnCard is 4', () => {
            const solution = new DobbleSolution(4);
            const nrOfCard = 4;
            const symbolOnCardNr = 2;
            const tested = solution.getMultipliedOffset(nrOfCard, symbolOnCardNr);
            const expected = 0;
            expect(tested).toBe(expected);
        })
        it('Should return 0 for cardNr 4 symbolOnCardNr 3, nrOfSymbolsOnCard is 4', () => {
            const solution = new DobbleSolution(4);
            const nrOfCard = 4;
            const symbolOnCardNr = 3;
            const tested = solution.getMultipliedOffset(nrOfCard, symbolOnCardNr);
            const expected = 0;
            expect(tested).toBe(expected);
        })
        it('Should return 1 for cardNr 7 symbolOnCardNr 2, nrOfSymbolsOnCard is 4', () => {
            const solution = new DobbleSolution(4);
            const nrOfCard = 7;
            const symbolOnCardNr = 2;
            const tested = solution.getMultipliedOffset(nrOfCard, symbolOnCardNr);
            const expected = 1;
            expect(tested).toBe(expected);
        })
        it('Should return 1 for cardNr 8 symbolOnCardNr 2, nrOfSymbolsOnCard is 4', () => {
            const solution = new DobbleSolution(4);
            const nrOfCard = 8;
            const symbolOnCardNr = 2;
            const tested = solution.getMultipliedOffset(nrOfCard, symbolOnCardNr);
            const expected = 1;
            expect(tested).toBe(expected);
        })
        it('Should return 2 for cardNr 8 symbolOnCardNr 3, nrOfSymbolsOnCard is 4', () => {
            const solution = new DobbleSolution(4);
            const nrOfCard = 8;
            const symbolOnCardNr = 3;
            const tested = solution.getMultipliedOffset(nrOfCard, symbolOnCardNr);
            const expected = 2;
            expect(tested).toBe(expected);
        })
        it('Should return 2 for cardNr 10 symbolOnCardNr 2, nrOfSymbolsOnCard is 4', () => {
            const solution = new DobbleSolution(4);
            const nrOfCard = 10;
            const symbolOnCardNr = 2;
            const tested = solution.getMultipliedOffset(nrOfCard, symbolOnCardNr);
            const expected = 2;
            expect(tested).toBe(expected);
        })
        it('Should return 2 for cardNr 12 symbolOnCardNr 2, nrOfSymbolsOnCard is 4', () => {
            const solution = new DobbleSolution(4);
            const nrOfCard = 12;
            const symbolOnCardNr = 2;
            const tested = solution.getMultipliedOffset(nrOfCard, symbolOnCardNr);
            const expected = 2;
            expect(tested).toBe(expected);
        })
        it('Should return 4 for cardNr 11 symbolOnCardNr 3, nrOfSymbolsOnCard is 4', () => {
            const solution = new DobbleSolution(4);
            const nrOfCard = 10;
            const symbolOnCardNr = 3;
            const tested = solution.getMultipliedOffset(nrOfCard, symbolOnCardNr);
            const expected = 4;
            expect(tested).toBe(expected);
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
                [0],
                [0],
                [0]
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
                [0],
                [0],
                [0]
            ]
            const result = solution.orderSymbols(symbols, nrOfCard, nrOfSection);
            expect(result).toEqual(expected);
        })
        it('Should return [ [1],[1],[1] ] if soultion for 4 cards is generated, symbolNr is 0 and card generated is 5', () => {
            const solution = new DobbleSolution(4);
            const symbols = [0,1,2,3];
            const nrOfCard = 5;
            const nrOfSection = 0;
            const expected = [[1],[1],[1]]
            const result = solution.orderSymbols(symbols, nrOfCard, nrOfSection);
            expect(result).toEqual(expected);
        })
        it('Should return [ [3],[3],[3] ] if soultion for 4 cards is generated, symbolNr is 0 and card generated is 12', () => {
            const solution = new DobbleSolution(4);
            const symbols = [0,1,2,3];
            const nrOfCard = 12;
            const nrOfSection = 0;
            const expected = [[3],[3],[3]]
            const result = solution.orderSymbols(symbols, nrOfCard, nrOfSection);
            expect(result).toEqual(expected);
        })        
        it('Should return [ [5],[5],[5],[5],[5] ] if soultion for 6 cards is generated, symbolNr is 0 and card generated is 30', () => {
            const solution = new DobbleSolution(6);
            const symbols = [0,1,2,3,4,5];
            const nrOfCard = 30;
            const nrOfSection = 0;
            const expected = [[5],[5],[5],[5],[5]]
            const result = solution.orderSymbols(symbols, nrOfCard, nrOfSection);
            expect(result).toEqual(expected);
        })
//=============================================================
        it('Should return [ [4],[5],[6] ] if soultion for 4 cards is generated, symbolNr is 1 and card generated is 5', () => {
            const solution = new DobbleSolution(4);
            const symbols = [4,5,6];
            const nrOfCard = 5;
            const nrOfSection = 1;
            const expected = [[4],[5],[6]];
            const result = solution.orderSymbols(symbols, nrOfCard, nrOfSection);
            expect(result).toEqual(expected);
        })
        it('Should return [ [4],[5],[6] ] if soultion for 4 cards is generated, symbolNr is 1 and card generated is 12', () => {
            const solution = new DobbleSolution(4);
            const symbols = [4,5,6];
            const nrOfCard = 12;
            const nrOfSection = 1;
            const expected = [[4],[5],[6]]
            const result = solution.orderSymbols(symbols, nrOfCard, nrOfSection);
            expect(result).toEqual(expected);
        })
        it('Should return [ [6],[7],[8],[9],[10] ] if soultion for 6 cards is generated, symbolNr is 1 and card generated is 15', () => {
            const solution = new DobbleSolution(6);
            const symbols = [6,7,8,9,10];
            const nrOfCard = 15;
            const nrOfSection = 1;
            const expected = [[6],[7],[8],[9],[10]]
            const result = solution.orderSymbols(symbols, nrOfCard, nrOfSection);
            expect(result).toEqual(expected);
        })
//======================================================
        it('Should return [[],[4,5,6],[],[]] in case of solution for 4 symbols, 1 symbol, 0 card', () => {
            const solution = new DobbleSolution(4);
            const symbols = [4,5,6];
            const nrOfCard = 0;
            const nrOfSection = 1;
            const expected = [[],[4,5,6],[],[]];
            const result = solution.orderSymbols(symbols, nrOfCard, nrOfSection);
            expect(result).toEqual(expected);            
        })        
        it('Should return [[],[4,5,6],[],[]] in case of solution for 4 symbols, 1 symbol, 1 card', () => {
            const solution = new DobbleSolution(4);
            const symbols = [4,5,6];
            const nrOfCard = 1;
            const nrOfSection = 1;
            const expected = [[],[4,5,6],[],[]]
            const result = solution.orderSymbols(symbols, nrOfCard, nrOfSection);
            expect(result).toEqual(expected);            
        })  
        it('Should return [[],[4,5,6],[],[]] in case of solution for 4 symbols, 1 symbol, 2 card', () => {
            const solution = new DobbleSolution(4);
            const symbols = [4,5,6];
            const nrOfCard = 2;
            const nrOfSection = 1;
            const expected = [[],[4,5,6],[],[]]
            const result = solution.orderSymbols(symbols, nrOfCard, nrOfSection);
            expect(result).toEqual(expected);            
        })  

        it('Should return [[],[],[],[],[],[26,27,28,29,30]] in case of solution for 6 symbols, 5 symbol, 5 card', () => {
            const solution = new DobbleSolution(6);
            const symbols = [26,27,28,29,30];
            const nrOfCard = 5;
            const nrOfSection = 5;
            const expected = [[],[],[],[],[],[26,27,28,29,30]]
            const result = solution.orderSymbols(symbols, nrOfCard, nrOfSection);
            expect(result).toEqual(expected);            
        })
        // ===================================================
        // Testing 1 row section, all symbols
        // ===================================================
        it('Should return [[7],[8],[9]] in case of 4 symbols on a card, card nr 5, symbol 2', () => {
            const solution = new DobbleSolution(4);
            const symbols = [7,8,9];
            const nrOfCard = 5;
            const nrOfSection = 2;
            const expected = [[7], [8],[9]];
            const result = solution.orderSymbols(symbols, nrOfCard, nrOfSection);
            expect(result).toEqual(expected);             
        })
        it('Should return [[26],[27],[28],[29],[30]] in case of 6 symbols on a card, card nr 7, symbol 5', () => {
            const solution = new DobbleSolution(6);
            const symbols = [26,27,28,29,30];
            const nrOfCard = 7;
            const nrOfSection = 5;
            const expected = [[26],[27],[28],[29],[30]];
            const result = solution.orderSymbols(symbols, nrOfCard, nrOfSection);
            console.log('RES');
            console.log(result)

            expect(result).toEqual(expected);             
        })
        // ===================================================
        // Testing 2 row section, 2 symbol
        // ===================================================
        it('Should return [[8],[9],[7]] in case of 2 row section, 2 symbols', () => {
            const solution = new DobbleSolution(4);
            const symbols = [7,8,9];
            const nrOfCard = 7;
            const nrOfSection = 2;
            const expected = [[8],[9],[7]];
            const result = solution.orderSymbols(symbols, nrOfCard, nrOfSection);
            expect(result).toEqual(expected);                         
        })
        // ===================================================
        // Testing 2 row section, 3 symbol
        // ===================================================
        it('Should return [[12],[10],[11]] in case of 2 row section, 2 symbols', () => {
            const solution = new DobbleSolution(4);
            const symbols = [10,11,12];
            const nrOfCard = 7;
            const nrOfSection = 3;
            const expected = [[12],[10],[11]];
            const result = solution.orderSymbols(symbols, nrOfCard, nrOfSection);
            expect(result).toEqual(expected);                         
        })
        // ===================================================
        // Testing 3 row section, 2 symbol
        // ===================================================

        it('Should return [[12],[10],[11]] in case of nrOfCard 10, 2 symbols', () => {
            const solution = new DobbleSolution(4);
            const symbols = [10,11,12];
            const nrOfCard = 10;
            const nrOfSection = 2;
            const expected = [[12],[10],[11]];
            const result = solution.orderSymbols(symbols, nrOfCard, nrOfSection);
            expect(result).toEqual(expected);                         
        })

        // ===================================================
        // Testing 3 row section, 3 symbol
        // ===================================================

        it('Should return [[12],[10],[11]] in case of 10 card, 3 symbol, 4 symbols on a card', () => {
            const solution = new DobbleSolution(4);
            const symbols = [10,11,12];
            const nrOfCard = 10;
            const nrOfSection = 3;
            const expected = [[11],[12],[10]];
            const result = solution.orderSymbols(symbols, nrOfCard, nrOfSection);
            expect(result).toEqual(expected);                         
        })
        
    })

    describe('Testing generateCardSymbol:', () => {
        it('Should return [0,1,2,3] in case nrOfSymbol is 0 and card is 0 and nrOfSymbolsOnCard is 4', () => {
            const solution = new DobbleSolution(4);
            expect(solution.generateCardSymbol(0,0)).toEqual([0,1,2,3]);
        })
        it('Should return [] in case nrOfSymbol is 1 and card is 0 and nrOfSymbolsOnCard is 4', () => {
            const solution = new DobbleSolution(4);
            expect(solution.generateCardSymbol(1,0)).toEqual([]);
        })
        it('Should return [1] in case nrOfSymbol is 0 and card is 5 and nrOfSymbolsOnCard is 4', () => {
            const solution = new DobbleSolution(4);
            expect(solution.generateCardSymbol(0,5)).toEqual([1]);
        })

        it('Should return [5] in case nrOfSymbol is 1 and card is 5 and nrOfSymbolsOnCard is 4', () => {
            const solution = new DobbleSolution(4);
            expect(solution.generateCardSymbol(1,5)).toEqual([5]);
        })

        it('Should return [9] in case nrOfSymbol is 3 and card is 8 and nrOfSymbolsOnCard is 4', () => {
            const solution = new DobbleSolution(4);
            expect(solution.generateCardSymbol(3,8)).toEqual([10]);
        })
        it('Should return [11] in case nrOfSymbol is 3 and card is 10 and nrOfSymbolsOnCard is 4', () => {
            const solution = new DobbleSolution(4);
            expect(solution.generateCardSymbol(3,10)).toEqual([11]);
        })

    })

    describe('Testing generateCard:', () => {
        it('Should generate [0,1,2,3] for nrOfSymbolsInCard 4 and cardNr === 0', () => {
            const solution = new DobbleSolution(4);
            expect(solution.generateCard(0)).toEqual([0, 1, 2, 3])
        })
        it('Should generate [0,4,5,6] for nrOfSymbolsInCard 4 and cardNr === 1', () => {
            const solution = new DobbleSolution(4);
            expect(solution.generateCard(1)).toEqual([0, 4, 5, 6])
        })
        it('Should generate [0,10,11,12] for nrOfSymbolsInCard 4 and cardNr === 3', () => {
            const solution = new DobbleSolution(4);
            expect(solution.generateCard(3)).toEqual([0, 10, 11, 12])
        })
        // 1 section
        it('Should generate [1, 5, 8, 11] for nrOfSymbolsInCard 4 and cardNr === 5', () => {
            const solution = new DobbleSolution(4);
            expect(solution.generateCard(5)).toEqual([1, 5, 8, 11])
        })
        it('Should generate [1, 6, 7, 18] for nrOfSymbolsInCard 4 and cardNr === 6', () => {
            const solution = new DobbleSolution(4);
            expect(solution.generateCard(6)).toEqual([1, 6, 9, 12])
        })
        // 2 section
        it('Should generate [2, 4, 8, 12] for nrOfSymbolsInCard 4 and cardNr === 7', () => {
            const solution = new DobbleSolution(4);
            expect(solution.generateCard(7)).toEqual([2, 4, 8, 12])
        })
        it('Should generate [2, 5, 9, 10] for nrOfSymbolsInCard 4 and cardNr === 8', () => {
            const solution = new DobbleSolution(4);
            expect(solution.generateCard(8)).toEqual([2, 5, 9, 10])
        })
        it('Should generate [2, 6, 7, 11] for nrOfSymbolsInCard 4 and cardNr === 9', () => {
            const solution = new DobbleSolution(4);
            expect(solution.generateCard(9)).toEqual([2, 6, 7, 11])
        })

        // 3 section
        it('Should generate [3, 4, 9, 11] for nrOfSymbolsInCard 4 and cardNr === 10', () => {
            const solution = new DobbleSolution(4);
            expect(solution.generateCard(10)).toEqual([3, 4, 9, 11])
        })
        it('Should generate [3, 6, 8, 10] for nrOfSymbolsInCard 4 and cardNr === 12', () => {
            const solution = new DobbleSolution(4);
            expect(solution.generateCard(12)).toEqual([3, 6, 8, 10])
        })
    });
    describe('Testing generateSolution', () => {
        it('Should return a valid solution for 3 symbols on a card', () => {
            const solution = new DobbleSolution(3);
            const result = solution.generateSolution();
            // console.log({
            //     solution: result,
            // })
            expect(isSolutionValid(result)).toBe(true);
        })
        it('Should return a valid solution for 2 symbols on a card', () => {
            const solution = new DobbleSolution(2);
            const result = solution.generateSolution();
            // console.log({
            //     solution: result,
            // })
            expect(isSolutionValid(result)).toBe(true);
        })
        it('Should return a valid solution for 4 symbols on a card', () => {
            const solution = new DobbleSolution(4);
            const result = solution.generateSolution();
            // console.log({
            //     solution: result,
            // })
            expect(isSolutionValid(result)).toBe(true);
        })
        // For 5 false
        it('Should return a valid solution for 6 symbols on a card', () => {
            const solution = new DobbleSolution(6);
            const result = solution.generateSolution();
            // console.log({
            //     solution: result,
            // })
            expect(isSolutionValid(result)).toBe(true);
        })
        // For 7 fail
        it('Should return a valid solution for 8 symbols on a card', () => {
            const solution = new DobbleSolution(8);
            const result = solution.generateSolution();
            // console.log({
            //     solution: result,
            // })
            expect(isSolutionValid(result)).toBe(true);
        })
        // Like in algorithm description: fails for each solution that
        // nrOfSymbolsOnCard !== primary + 1;
        it('Should return a valid solution for 9 symbols on a card', () => {
            const solution = new DobbleSolution(12);
            const result = solution.generateSolution();
            // console.log({
            //     solution: result,
            // })
            expect(isSolutionValid(result)).toBe(true);
        })
        it('Should return a valid solution for 9 symbols on a card', () => {
            const solution = new DobbleSolution(14);
            const result = solution.generateSolution();
            // console.log({
            //     solution: result,
            // })
            expect(isSolutionValid(result)).toBe(true);
        })
    })


})
