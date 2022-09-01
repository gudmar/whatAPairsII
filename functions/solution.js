import { and, xor } from './arrayLogicFunctions.js'
import { errorMessages, getErrorInCaseArrayOfArraysTypeMismatch } from './errors.js'

const getFirstNotConnectedCardIndex = (solution, card) => {
    // if -1 returned, all cards connected
    const err = getErrorInCaseArrayOfArraysTypeMismatch(solution);
    if (err) throw err;
    return solution.reduce((acc, solutionCard, index) => {
        if ((xor(solutionCard, card).length === 0) && (acc === -1)) acc = index;
        return acc;
    }, -1)        
}

export { getFirstNotConnectedCard }