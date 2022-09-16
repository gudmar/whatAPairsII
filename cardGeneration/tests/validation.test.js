import { toHaveTheSameElements } from "../../testMatchers.js"
import { 
    isPrimaryNumber, 
    commonSymbolsBetweenArrays,
    errors,
    cardsAboveIndexNotValidWithCardAtIndex,
    cardsConnectExactlyOnce,
    allSymbolsRepeatDesiredNrOfTimes,
    isSolutionValid,
} from "../validation.js"
expect.extend({toHaveTheSameElements})

describe('Testing validation', () => {
    describe('Testing isPrimaryNumber', () => {
        it('Should return true for 1', () => {
            expect(isPrimaryNumber(1)).toBe(true);
        });
        it('Should return true for 2', () => {
            expect(isPrimaryNumber(2)).toBe(true);
        });
        it('Should return true for 3', () => {
            expect(isPrimaryNumber(3)).toBe(true);
        });
        it('Should return true for 5', () => {
            expect(isPrimaryNumber(5)).toBe(true);
        });
        it('Should return true for 7', () => {
            expect(isPrimaryNumber(7)).toBe(true);
        });
        it('Should return true for 101', () => {
            expect(isPrimaryNumber(101)).toBe(true);
        });
        it('Should return false for 55', () => {
            expect(isPrimaryNumber(55)).toBe(false);
        });
        it('Should return false for 123', () => {
            expect(isPrimaryNumber(123)).toBe(false);
        });
    });
    describe('Testing commonSymbolsBetweenArrays', () => {
        it('Should return [1, 2, 3] for [6, 4, 3, 2, 1, 0, 9] and [1, A, B, 3, C, D, 2]', () => {
            const arr1 = [6, 4, 3, 2, 1, 0, 9];
            const arr2 = [1, 'A', 'B', 3, 'C', 'D', 2];
            expect(commonSymbolsBetweenArrays(arr1, arr2)).toHaveTheSameElements([1,2,3]);
        });
        it('Should return [1, 2, 3] for [6, 4, 3, 2, 1, 2, 2, 3, 0, 9] and [1, 3, A, 2, B, 3, C, D, 2]', () => {
            const arr1 = [6, 4, 3, 2, 1, 2, 2, 3, 0, 9];
            const arr2 = [1, 3, 'A', 2, 'B', 3, 'C', 'D', 2];
            expect(commonSymbolsBetweenArrays(arr1, arr2)).toHaveTheSameElements([1,2,3, 2, 3]);
        });
        it('Should return [] for [6, 4, 0, 9, Z] and [1, 3, A, 2, B, 3, C, D, 2]', () => {
            const arr1 = [6, 4, 0, 9, 'Z'];
            const arr2 = [1, 3, 'A', 2, 'B', 3, 'C', 'D', 2];
            console.log(commonSymbolsBetweenArrays(arr1, arr2))
            expect(commonSymbolsBetweenArrays(arr1, arr2)).toHaveTheSameElements([]);
        })
    })
    describe('Testing cardsAboveIndexNotValidWithCardAtIndex', () => {
        it('Should throw an error if index > solution lenght', () => {
            const solution = [
                [1,2,3],
                [2,3,4],
                [3,4,5]
            ]
            expect(() => cardsAboveIndexNotValidWithCardAtIndex(solution, 5)).toThrow(errors.TOO_BIG_INDEX)
        });
        it('Should return an empty array in case all cards above index are connected exectly once to card at index (0).', () => {
            const validSolution = [
                [0, 1, 6],
                [1, 2, 3],
                [2, 0, 4],
                [0, 3, 5],
                [1, 4, 5],
                [2, 5, 6],
                [3, 4, 6]
            ];
            expect(cardsAboveIndexNotValidWithCardAtIndex(validSolution, 0).length).toBe(0)
        });
        it('Should return an empty array in case all cards above index are connected exectly once to card at index (4).', () => {
            const validSolution = [
                [0, 1, 6],
                [1, 2, 3],
                [2, 0, 4],
                [0, 3, 5],
                [1, 4, 5],
                [2, 5, 6],
                [3, 4, 6]
            ];
            expect(cardsAboveIndexNotValidWithCardAtIndex(validSolution, 4).length).toBe(0)
        });
        it('Should return a non empty report in case there is a card above index that has too many connections to card at index.', () => {
            const validSolution = [
                [0, 1, 6],
                [1, 2, 3],
                [2, 0, 4],
                [0, 3, 5],
                [1, 4, 5],
                [2, 5, 6],
                [3, 5, 6]
            ];
            expect(cardsAboveIndexNotValidWithCardAtIndex(validSolution, 3).length).toBe(1)
        })
        it('Should return a non empty report in case there is a card above index that has no connections to card at index.', () => {
            const validSolution = [
                [0, 1, 6],
                [1, 2, 3],
                [2, 0, 4],
                [0, 3, 5],
                [1, 4, 5],
                [2, 5, 6],
                [9, 4, 6]
            ];
            expect(cardsAboveIndexNotValidWithCardAtIndex(validSolution, 3).length).toBe(1)
        })
        it('Should return an empty array in case all cards above index are connected exectly once to card at index (4), but card below index has too many connections to card at index', () => {
            const validSolution = [
                [0, 1, 6],
                [1, 2, 3],
                [2, 0, 4],
                [0, 4, 5],
                [1, 4, 5],
                [2, 5, 6],
                [3, 4, 6]
            ];
            expect(cardsAboveIndexNotValidWithCardAtIndex(validSolution, 4).length).toBe(0)
        });
    });
    describe('Testing cardsConnectExactlyOnce', () => {
        it('Sould return true in case a valid solution (2x3 instanve) is given', () => {
            const validSolution = [
                [0,1],
                [1,2],
                [2,0]
            ]
            expect(cardsConnectExactlyOnce(validSolution).length).toBe(0);
        })
        it('Sould return false in case there is a validation in solution (2x3 instanve)', () => {
            const validSolution = [
                [0,1],
                [1,2],
                [2,1]
            ]
            expect(cardsConnectExactlyOnce(validSolution).length).toBe(1);
        });
        it('Sould return true in case a valid solution (3x7 instanve) is given', () => {
            const validSolution = [
                [0, 1, 6],
                [1, 2, 3],
                [2, 0, 4],
                [0, 3, 5],
                [1, 4, 5],
                [2, 5, 6],
                [3, 4, 6]
            ];
            expect(cardsConnectExactlyOnce(validSolution).length).toBe(0);
        })
        it('Sould return true in case a valid solution (3x6 instanve, so one card taken away) is given', () => {
            const validSolution = [
                [0, 1, 6],
                [1, 2, 3],
                [2, 0, 4],
                [0, 3, 5],
                [1, 4, 5],
                [2, 5, 6],
            ];
            expect(cardsConnectExactlyOnce(validSolution).length).toBe(0);
        })
        it('Sould return empty array if cards connect exactly once, but there is an additional symbol in one of them', () => {
            const validSolution = [
                [0, 1, 6],
                [1, 2, 3],
                [2, 0, 4],
                [0, 3, 5, 9],
                [1, 4, 5],
                [2, 5, 6],
            ];
            expect(cardsConnectExactlyOnce(validSolution).length).toBe(0);
        })
        it('Sould return a non empty report in case one card misses a symbol, and some connections are gone', () => {
            const validSolution = [
                [0, 1, 6],
                [1, 2, 3],
                [2, 0, 4],
                [0, 3],
                [1, 4, 5],
                [2, 5, 6],
            ];
            expect(cardsConnectExactlyOnce(validSolution).length).toBe(1);
        })
    });
    describe('Testing allSymbolsRepeatDesiredNrOfTimes', () => {
        it('Should return true in case each symbol repetes exectly nrOfSymbolsOnACard times', () => {
            const validSolution = [
                [0, 1, 6],
                [1, 2, 3],
                [2, 0, 4],
                [0, 3, 5],
                [1, 4, 5],
                [2, 5, 6],
                [3, 4, 6]
            ];
            expect(allSymbolsRepeatDesiredNrOfTimes(validSolution).result).toBe(true)
        })
        it('Should return false in case all cards are connected with exactly one symbol, but they do not repeat desired number of times', () => {
            const validSolution = [
                [0, 1, 6],
                [1, 2, 3],
                [2, 0, 4],
                [0, 3, 5],
                [1, 4, 5],
                [2, 5, 6],
            ];
            expect(allSymbolsRepeatDesiredNrOfTimes(validSolution).result).toBe(false)
        });
    })
    describe('Testing isSolutionValid', () => {
        it('Should return true if solution has desired number of cards, each card has the same number of symbols, each symbol repeats the same nr of times, each card is connected with all other cards with exectly one symbol', () => {
            const validSolution = [
                [0, 1, 6],
                [1, 2, 3],
                [2, 0, 4],
                [0, 3, 5],
                [1, 4, 5],
                [2, 5, 6],
                [3, 4, 6]
            ];
            expect(isSolutionValid(validSolution)).toBe(true);
        })
        it('Should return false if not all symbols repeat desired nr of times.', () => {
            const validSolution = [
                [0, 1, 6],
                [1, 2, 3],
                [2, 0, 4],
                [0, 3, 5],
                [1, 4, 5],
                [2, 5, 6],
            ];
            expect(isSolutionValid(validSolution)).toBe(false);
        })
        it('Should return false if there is an additional symol in one of cards', () => {
            const validSolution = [
                [0, 1, 6],
                [1, 2, 3],
                [2, 0, 4],
                [0, 3, 5],
                [1, 4, 5],
                [2, 5, 6],
                [3, 4, 6, 9]
            ];
            expect(isSolutionValid(validSolution)).toBe(false);
        })
        it('Should return false if one of cars is not connected to some cards', () => {
            const validSolution = [
                [0, 1, 6],
                [1, 2, 3],
                [2, 0, 4],
                [0, 3, 5],
                [1, 4, 5],
                [2, 5, 6],
                [3, 4, 9]
            ];
            expect(isSolutionValid(validSolution)).toBe(false);
        })
    })
});
