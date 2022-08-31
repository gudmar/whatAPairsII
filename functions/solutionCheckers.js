const errorMessages = {
    EMPTY_ARG: 'allArraysSomeSize: an empty array passed',
    NOT_ARR: 'allArraysSomeSize: arg is not an array',
    NOT_EVERY_ITEM_ARRAY: 'allArraysSomeSize: Not every item in array of arrays is an array.',
    SOLUTION_NOT_ARRAY: 'countSymbolsOnCardFromSolution: readySolution is not an array',
    ARR_ITEM_NOT_ARRAY: 'countSymbolsOnCardFromSolution: a element of readySolution is not an array',
    DIFFERENT_NR_ELEMENTS: 'countSymbolsOnCardsFromSolution: solution has different number of symbols on some cards',
}

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

export { errorMessages, allArraysSameSize, countSymbolsOnCardOnReadySolution }
