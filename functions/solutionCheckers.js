import { and } from './arrayLogicFunctions.js';
import { errorMessages, getErrorInCaseArrayOfArraysTypeMismatch } from './errors.js'



const allArraysSameSize = arrOfArrays => {
    if (!Array.isArray(arrOfArrays)) throw new Error(errorMessages.NOT_ARR);
    if (arrOfArrays.length === 0) throw new Error(errorMessages.EMPTY_ARG);
    if (arrOfArrays.some(arr => !Array.isArray(arr))) throw new Error(errorMessages.NOT_EVERY_ITEM_ARRAY)
    return arrOfArrays.every((item) => item.length === arrOfArrays[0].length)
}

const countSymbolsOnCardOnReadySolution = (readySolution) => {
    if (!allArraysSameSize(readySolution)) throw new Error(errorMessages.DIFFERENT_NR_ELEMENTS)
    if (!Array.isArray(readySolution)) throw new Error(errorMessages.SOLUTION_NOT_ARRAY)
    if (readySolution.length === 0) return 0;
    if (!Array.isArray(readySolution[0])) throw new Error(errorMessages.SOLUTION_NOT_ARRAY) ;
    return readySolution[0].length;
}

const allCardsAreConnectedToAddedCard = (solution, card) => {
    const err = getErrorInCaseArrayOfArraysTypeMismatch(solution);
    if (err) throw err;
    return solution.reduce((acc, solutionCard) => {
        const commonElementsNumber = and(solutionCard, card).length;
        if (commonElementsNumber > 1) throw new Error(errorMessages.TOO_MANY_SYMBOLS_REPEAT)
        if (commonElementsNumber !== 1) acc = false;
        return acc;
    }, true)
}

export { errorMessages, allArraysSameSize, countSymbolsOnCardOnReadySolution, allCardsAreConnectedToAddedCard }
