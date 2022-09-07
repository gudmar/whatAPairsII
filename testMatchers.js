import { 
    countElementsOfArray, 
    allArrayElementsArePrimitive,
    ArrayElementsCounter,
    isPrimitive,
    areObjectsEqual,

} from './testMatchersFunctions.js'
const cpArr = arr => arr.map(_ => _);
const toHaveTheSameElements = (received, arr) => {
    if (received.length != arr.length) return {
        message: () => `
            Arrays have different length. Received: ${JSON.stringify(received)},
            expected: ${JSON.stringify(arr)}
        `,
        pass: false,
    };
    if ([received, arr].some(_ => !Array.isArray(_))) return {
        message: () => 'One of arguments is not an array',
        pass: false,
    } 
    const arr1 = cpArr(received);
    const arr2 = cpArr(arr);
    const result = arr1.reduce((acc, item) => {
        const index = acc.findIndex(el => el === item);
        if (index > -1) {
            acc.splice(index, 1);
        }
        return acc;
    }, arr2)
    return result.length === 0 ? {
        message: 'Arrays contain the same elements',
        pass: true,
    }: {
        message: `
            Arrays contain different elements. 
            Received: ${JSON.stringify(received)},expected: ${JSON.stringify(arr)}`,
        pass: false,
    };
}

function arraysHaveSamePrimitiveElements(arr1, arr2) {
    if (!allArrayElementsArePrimitive(arr1) || !allArrayElementsArePrimitive(arr2)) {
        throw new Error('arraysHaveSamePrimitiveElements: all elements in both arrays should be primitive, and at least one is not')
    }
    if (arr1.length !== arr2.length) return false
    const arr1Elements = new ArrayElementsCounter(arr1);
    const arr2Elements = new ArrayElementsCounter(arr2);
    if (arr1Elements.keys().length !== arr2Elements.keys().length) return false;
    const nrOfDifferences = arr1Elements.keys().reduce((acc, key) => {
        if (arr1Elements.get(key) !== arr2Elements.get(key)) acc += 1;
        return acc;
    }, 0)
    return nrOfDifferences === 0
}

function objectsEqual(obj1, obj2) {
    if (isPrimitive(obj1)) return obj1 === obj2;
    return areObjectsEqual(obj1, obj2);
}


export { arraysHaveSamePrimitiveElements, objectsEqual, toHaveTheSameElements }
