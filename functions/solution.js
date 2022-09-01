import { and, xor } from './arrayLogicFunctions.js'
import { errorMessages, getErrorInCaseArrayOfArraysTypeMismatch } from './errors.js'
import { getArrayOfNull } from './arrayLogicFunctions.js';

const getFirstNotConnectedCardIndex = (solution, card) => {
    // if -1 returned, all cards connected
    const err = getErrorInCaseArrayOfArraysTypeMismatch(solution);
    if (err) throw err;
    return solution.reduce((acc, solutionCard, index) => {
        if ((and(solutionCard, card).length === 0) && (acc === -1)) acc = index;
        return acc;
    }, -1)        
}

const getConnectedCards = (solution, addedCard) => solution.filter((card) => and(card, addedCard).length === 1 );


export { getFirstNotConnectedCardIndex, getConnectedCards, }