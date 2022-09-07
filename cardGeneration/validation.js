import ArrayElementsCounter from './arrayElementsCounter.js';
import { and } from './arrayLogicFunctions.js';

const errors = {
    TOO_BIG_INDEX: 'Given index is too big',
    ARG_NOT_ARRAY: 'Function argument is not an array',
    ARG_ARR_TOO_SMALL: 'Function array argument not large enough',
}

const isPrimaryNumber = (nr) => {
    let dividenda = Math.floor(nr / 2);
    let nrOfDivisions = 0;
    for (let i = dividenda; dividenda > 0; dividenda--) {
        nrOfDivisions = nr % dividenda === 0 ? nrOfDivisions + 1 : nrOfDivisions;
        if (nrOfDivisions > 1) return false;
    }
    return true;
}

// const areElementsOfArrayUnique = (arr) => {
//     const countedElements = new ArrayElementsCounter(arr);
//     countedElements.log();
//     const values = countedElements.values();
//     return !values.some(item => item > 1)
// }

const commonSymbolsBetweenArrays = (arr1, arr2) => and(arr1, arr2);

// const haveCardsInSolutionUniqueSymbols = (solution) => {
//    return solution.every(card => areElementsOfArrayUnique(card))
// }

const notValidCardsAboveIndex = (solution, index) => {
   if (solution.length <= index + 1) throw new Error(errors.TOO_BIG_INDEX)
   const cardAtIndex = solution[index];
   const cardsFromIndex = solution.slice(index + 1);
   return cardsFromIndex.reduce((raport, card) => {
       const commonSymbols = commonSymbolsBetweenArrays(cardAtIndex, card);
       if (commonSymbols.length > 1) {
           raport.push({
               cardA: cardAtIndex,
               cardB: card,
               repeatingSymbols: commonSymbols,
               reason: 'Too many connections'
           })
           
       }
       if (commonSymbols.length === 0) {
           raport.push({
               cardA: cardAtIndex,
               cardB: card,
               reason: 'Not enough connections'
           })
       }
       return raport
   }, [])
}

const notValidCards = solution => {
   if (!Array.isArray(solution)) throw new Error(errors.ARG_NOT_ARRAY)
   if (solution.length < 3) throw new Error(errors.ARG_ARR_TOO_SMALL)
   const raport = [];
   for (let index = 0; index < solution.length - 1; index++) {
       const partRaport = notValidCardsAboveIndex(solution, index);
       if (partRaport.length > 0) raport.push(partRaport);
   }
   return raport;
}

const allSymbolsRepeatDesiredNrOfTimes = solution => {

    if (!Array.isArray(solution)) throw new Error(errors.ARG_NOT_ARRAY)
    const solutionSymbolCounter = new ArrayElementsCounter(solution.flat());
    const desiredNumberOfRepetitions = solution[0].length;
    if (solution.some(card => card.length !== desiredNumberOfRepetitions)) return false;
    const symbolRepetitions = solutionSymbolCounter.values();
    const result = symbolRepetitions.every(nrOfRepetitions => nrOfRepetitions === desiredNumberOfRepetitions);
    return symbolRepetitions.every(nrOfRepetitions => nrOfRepetitions === desiredNumberOfRepetitions);
}

// const allCardsHaveEqualLength = (solution) => {
//     const nrOfCards = solution[0].length;
//     return solution.every(card => card.length === nrOfCards)
// }

const allCardsConnectedWithSilgleSymbol = solution => notValidCards(solution).length === 0;

const isSolutionValid = solution => {
    if (!allSymbolsRepeatDesiredNrOfTimes(solution)) return false;
    return notValidCards(solution).length === 0
}

export {
    isPrimaryNumber,

    isSolutionValid,
    notValidCards,
    notValidCardsAboveIndex,
    // haveCardsInSolutionUniqueSymbols,
    commonSymbolsBetweenArrays,
    // areElementsOfArrayUnique, 
    // allCardsHaveEqualLength,
    allSymbolsRepeatDesiredNrOfTimes,
    allCardsConnectedWithSilgleSymbol
}
