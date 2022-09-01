const errorMessages = {
    EMPTY_ARG: 'an empty array passed',
    NOT_ARR: 'arg is not an array',
    NOT_EVERY_ITEM_ARRAY: 'Not every item in array of arrays is an array.',
    SOLUTION_NOT_ARRAY: 'readySolution is not an array',
    ARR_ITEM_NOT_ARRAY: 'a element of readySolution is not an array',
    DIFFERENT_NR_ELEMENTS: 'countSymbolsOnCardsFromSolution: solution has different number of symbols on some cards',
    TOO_MANY_SYMBOLS_REPEAT: 'Too many symbols repeat',
}

const getErrorInCaseArrayOfArraysTypeMismatch = (arrOfArrays) => {
    if (!Array.isArray(arrOfArrays)) return new Error(errorMessages.NOT_ARR);
    if (arrOfArrays.length === 0) return new Error(errorMessages.EMPTY_ARG);
    if (arrOfArrays.some(arr => !Array.isArray(arr))) return new Error(errorMessages.NOT_EVERY_ITEM_ARRAY)
}

export { errorMessages, getErrorInCaseArrayOfArraysTypeMismatch }