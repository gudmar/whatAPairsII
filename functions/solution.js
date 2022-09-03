import { and, xor } from './arrayLogicFunctions.js'
import { errorMessages, getErrorInCaseArrayOfArraysTypeMismatch } from './errors.js'
import { getArrayOfNull } from './arrayLogicFunctions.js';
import { getListOfAllowedSymbols, getAllSymbols } from './symbols.js'

const getFirstNotConnectedCardIndex = (solution, card) => {
    // if -1 returned, all cards connected
    const err = getErrorInCaseArrayOfArraysTypeMismatch(solution);
    if (err) throw err;
    console.log(solution)
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

// const getFirstNotConnectedCardIndex = (solution, addedCard) => {
//     return solution.findIndex(card => !card.reduce((acc, symbol) => {
//         if (addedCard.find(addedSymbol => addedSymbol === symbol)) acc = true;
//         return acc;
//     }, false))
// }
const getFirstNotConnectedCard = (solution, addedCard) => {
    const firstNotConnectedCardIndex = getFirstNotConnectedCardIndex(solution, addedCard);
    return firstNotConnectedCardIndex === -1 ? undefined : solution[firstNotConnectedCardIndex];
}

const connectCard = (addedCard, solution, nrOfSymbolsOnACard) => {
    // const listOfAllowedSymbols = getListOfAllowedSymbols(solution, addedCard);    
    const listOfAllowedSymbols = getListOfAllowedSymbols(getAllSymbols(nrOfSymbolsOnACard), getConnectedCards(solution, addedCard))
    if (listOfAllowedSymbols.length === 0) throw new Error('connectCard: no symbols left');
    // const notConnectedCardsWithAllowedSymbol = getNotConnectedCardsWithAllowedSymbol(solution, listOfAllowedSymbols);
    const notConnectedCardsWithAllowedSymbol = getNotConnectedCardsWithAllowedSymbol(solution, addedCard, nrOfSymbolsOnACard);
    if (notConnectedCardsWithAllowedSymbol.length > 0) {
        const targetCard = notConnectedCardsWithAllowedSymbol[0];
        const allowedSymbol = and(listOfAllowedSymbols, targetCard);
        console.log('allowedSymbol : ', allowedSymbol) 
        addedCard.push(allowedSymbol[0]);
        return;
    }    

    const cardToConnectIndex = getFirstNotConnectedCardIndex(solution, addedCard);
    const connectorSymbol = listOfAllowedSymbols[0];
    console.log('NOT connected card', cardToConnectIndex)
    solution[cardToConnectIndex].push(connectorSymbol);
    addedCard.push(connectorSymbol);    
}

export { 
    
    getConnectedCards, 
    getNotConnectedCardsWithAllowedSymbol,
    getFirstNotConnectedCard, //not tested
    getFirstNotConnectedCardIndex, 
    connectCard,
}