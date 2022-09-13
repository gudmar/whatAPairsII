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

        it('Should return [[8],[9],[7]] in case of 10 row section, 2 symbols', () => {
            const solution = new DobbleSolution(4);
            const symbols = [7,8,9];
            const nrOfCard = 10;
            const nrOfSection = 2;
            const expected = [[8],[9],[7]];
            const result = solution.orderSymbols(symbols, nrOfCard, nrOfSection);
            expect(result).toEqual(expected);                         
        })

        // ===================================================
        // Testing 3 row section, 3 symbol
        // ===================================================

        it('Should return [[12],[10],[11]] in case of 10 row section, 3 symbols', () => {
            const solution = new DobbleSolution(4);
            const symbols = [10,11,12];
            const nrOfCard = 10;
            const nrOfSection = 3;
            const expected = [[12],[10],[11]];
            const result = solution.orderSymbols(symbols, nrOfCard, nrOfSection);
            expect(result).toEqual(expected);                         
        })


        // Seems to work. Should be tested with solutions above 4 sylmbols (this last scenarion), but must be tested from figher level, to make sure produces feasable solution
        
    })
    // describe('Testing getOrderedSymbolsForSection:', () => {
    //     it('Should return [0,1,2,3] for 0 section 0 card 4 symbolsOnCard', () => {
    //         const solution = new DobbleSolution(4);
    //         expect(solution.getOrderedSymbolsForSection(0,0)).toEqual([0,1,2,3]);
    //     })
    //     it('Should return [7,8,9] for 2 section 2 card 4 symbolsOnCard', () => {
    //         const solution = new DobbleSolution(4);
    //         expect(solution.getOrderedSymbolsForSection(2,2)).toEqual([7,8,9]);
    //     })
    //     it('Should return [] for 2 section 3 card 4 symbolsOnCard', () => {
    //         const solution = new DobbleSolution(4);
    //         expect(solution.getOrderedSymbolsForSection(2,3)).toEqual([]);
    //     })

    //     it('Should return [1] for 0 section 5 card 4 symbolsOnCard', () => {
    //         const solution = new DobbleSolution(4);
    //         expect(solution.getOrderedSymbolsForSection(5,0)).toEqual([1])
    //     })
    // })
    describe('Testing generateCardSymbol:', () => {
        it('Should return [0,1,2,3] in case nrOfSymbol is 0 and card is 0 and nrOfSymbolsOnCard is 4', () => {
            const solution = new DobbleSolution(4);
            expect(solution.generateCardSymbol(0,0)).toEqual([0,1,2,3]);
        })
        it('(F exp: [], rec: [4,5,6]) Should return [] in case nrOfSymbol is 1 and card is 0 and nrOfSymbolsOnCard is 4', () => {
            const solution = new DobbleSolution(4);
            expect(solution.generateCardSymbol(1,0)).toEqual([]);
        })
        it('(F exp[1] rec:1) Should return [1] in case nrOfSymbol is 0 and card is 5 and nrOfSymbolsOnCard is 4', () => {
            const solution = new DobbleSolution(4);
            expect(solution.generateCardSymbol(0,5)).toEqual([1]);
        })

        it('Should return [5] in case nrOfSymbol is 1 and card is 5 and nrOfSymbolsOnCard is 4', () => {
            const solution = new DobbleSolution(4);
            expect(solution.generateCardSymbol(1,5)).toEqual([5]);
        })

        it('(F exp[9] rec:undef)Should return [9] in case nrOfSymbol is 3 and card is 8 and nrOfSymbolsOnCard is 4', () => {
            const solution = new DobbleSolution(4);
            expect(solution.generateCardSymbol(3,8)).toEqual([10]);
        })

    })

    describe('Testing generateCard:', () => {
        // it('Should generate [0,1,2,3] for nrOfSymbolsInCard 4 and cardNr === 0', () => {
        //     const solution = new DobbleSolution(4);
        //     expect(solution.generateCard(0)).toEqual([0, 1, 2, 3])
        // })
        // it('Should generate [0,4,5,6] for nrOfSymbolsInCard 4 and cardNr === 1', () => {
        //     const solution = new DobbleSolution(4);
        //     expect(solution.generateCard(1)).toEqual([0, 4, 5, 6])
        // })
        // it('Should generate [0,10,11,12] for nrOfSymbolsInCard 4 and cardNr === 3', () => {
        //     const solution = new DobbleSolution(4);
        //     expect(solution.generateCard(3)).toEqual([0, 10, 11, 12])
        // })
        // 1 section
        // it('Should generate [1,4, 7, 10] for nrOfSymbolsInCard 4 and cardNr === 4', () => {
        //     const solution = new DobbleSolution(4);
        //     expect(solution.generateCard(5)).toEqual([1,4, 7, 10])
        // })

    })


})
