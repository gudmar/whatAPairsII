import { and, xor } from './arrayLogicFunctions.js'
import { errorMessages, getErrorInCaseArrayOfArraysTypeMismatch } from './errors.js'
import { getArrayOfNull } from './arrayLogicFunctions.js';
import { getListOfAllowedSymbols, getAllSymbols } from './symbols.js'

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

const getNotConnectedCardsWithAllowedSymbol = (solution, addedCard, nrOfSymbolsOnACard) => {
    const listOfAllowedSymbol = getListOfAllowedSymbols(getAllSymbols(nrOfSymbolsOnACard), getConnectedCards(solution, addedCard))
    return solution.filter((card) => {
    // // if (isCardConnected(card, addedCard)) return false; // NOT NEEDED, card having an allowed symbol will be not connected
        return card.reduce((acc, symbol) => {
            if (listOfAllowedSymbol.find(s => s === symbol)) acc = true;
            return acc;
        }, false)
    })
}

export { getFirstNotConnectedCardIndex, getConnectedCards, getNotConnectedCardsWithAllowedSymbol }