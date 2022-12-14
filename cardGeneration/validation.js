import ArrayElementsCounter from './arrayElementsCounter.js';
import { and } from './arrayLogicFunctions.js';

const errors = {
    TOO_BIG_INDEX: 'Given index is too big',
    ARG_NOT_ARRAY: 'Function argument is not an array',
    ARG_ARR_TOO_SMALL: 'Function array argument not large enough',
}

const reasons = {
    TOO_MANY_CONNECTIONS: 'Too many conections',
    NOT_ENOUGH_CONNECTIONS: 'Not enough connections',
    CARDS_NOT_EQUAL: (cards) => `Cards ${JSON.stringify(cards)} have different length`,
    SYMBOLS_REPEAT_DIFFERENT_TIMES:'Symbols repeat different nr of times'
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

const cardsAboveIndexNotValidWithCardAtIndex = (solution, index) => {
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
               reason: reasons.TOO_MANY_CONNECTIONS,
           })
           
       }
       if (commonSymbols.length === 0) {
           raport.push({
               cardA: cardAtIndex,
               cardB: card,
               reason: reasons.NOT_ENOUGH_CONNECTIONS,
           })
       }
       return raport
   }, [])
}

const cardsConnectExactlyOnce = solution => {
   if (!Array.isArray(solution)) throw new Error(errors.ARG_NOT_ARRAY)
   if (solution.length < 3) throw new Error(errors.ARG_ARR_TOO_SMALL)
   const raport = [];
   for (let index = 0; index < solution.length - 1; index++) {
       const partRaport = cardsAboveIndexNotValidWithCardAtIndex(solution, index);
       if (partRaport.length > 0) raport.push(partRaport);
   }
   return raport;
}

const allSymbolsRepeatDesiredNrOfTimes = solution => {

    if (!Array.isArray(solution)) throw new Error(errors.ARG_NOT_ARRAY)
    const solutionSymbolCounter = new ArrayElementsCounter(solution.flat());
    const desiredNumberOfRepetitions = solution[0].length;
    const cardsWithNotEqualLenght = solution.filter(card => card.length !== desiredNumberOfRepetitions)
    if (cardsWithNotEqualLenght > 0) return {
        result: false, reason: reasons.CARDS_NOT_EQUAL(cardsWithNotEqualLenght)
    }
    // if (solution.some(card => card.length !== desiredNumberOfRepetitions)) return false;
    const symbolRepetitions = solutionSymbolCounter.values();
    const result = symbolRepetitions.every(nrOfRepetitions => nrOfRepetitions === desiredNumberOfRepetitions);
    console.log({
        name: 'allSymbolsRepeatDesiredNrOfTims',
        reason: reasons.SYMBOLS_REPEAT_DIFFERENT_TIMES,
        repetitions: solutionSymbolCounter.getAll()
    })
    return result ? {result} : {result: false, reason: reasons.CARDS_NOT_EQUAL('')}
    // return symbolRepetitions.every(nrOfRepetitions => nrOfRepetitions === desiredNumberOfRepetitions);
}

// const allCardsHaveEqualLength = (solution) => {
//     const nrOfCards = solution[0].length;
//     return solution.every(card => card.length === nrOfCards)
// }

const allCardsConnectedWithSilgleSymbol = solution => cardsConnectExactlyOnce(solution).length === 0;

const isSolutionValid = solution => {
    const symbolsRepetitionReport = allSymbolsRepeatDesiredNrOfTimes(solution);
    // if (!symbolsRepetitionReport.result) console.log({
    //     functionName: 'isSolutionValid',
    //     symbolsRepetitionReport,
    // })
    if (!allSymbolsRepeatDesiredNrOfTimes(solution).result) return false;
    const cardsRepetitions = cardsConnectExactlyOnce(solution);
    // if (cardsRepetitions.length > 0) console.log({
    //     functionName: 'isSolutionValid',
    //     cardsRepetitions: cardsRepetitions.map(
    //         card => JSON.stringify(card) + '\n'
    //     )
    // }, '\n');
    return cardsRepetitions.length === 0
}

export {
    isPrimaryNumber,
    errors,
    reasons,
    isSolutionValid,
    cardsConnectExactlyOnce,
    cardsAboveIndexNotValidWithCardAtIndex,
    // haveCardsInSolutionUniqueSymbols,
    commonSymbolsBetweenArrays,
    // areElementsOfArrayUnique, 
    // allCardsHaveEqualLength,
    allSymbolsRepeatDesiredNrOfTimes,
    allCardsConnectedWithSilgleSymbol
}
