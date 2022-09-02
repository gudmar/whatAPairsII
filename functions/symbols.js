
import { getArrayOfNull, xor } from './arrayLogicFunctions.js'
import { getNrOfSymbols } from './calculation.js'

function *nextSymbolGenerator(nrOfSymbolsToGenerate) {
            const symbols = getArrayOfNull(nrOfSymbolsToGenerate).map( (_, index) => index);
            yield* symbols;
        }
const nextSymbolGetter = nrOfSymbolsToGenerate => {
    const generator = nextSymbolGenerator(nrOfSymbolsToGenerate);
    return {
        generate: () => {
            const next = generator.next();
            return next.value;
        }
    }
}

const getAllSymbols = (nrOfSymbolsOnCard) => getArrayOfNull(getNrOfSymbols(nrOfSymbolsOnCard)).map( (_, index) => index);

const getListOfNotRepeatingElements = (arr) => arr.reduce(
    (acc, item) => {
        if (acc.find(i => i === item) === undefined) acc.push(item);
        return acc;
    }, []
)

const getListOfRestrictedSymbols = (connectedCards) => 
    getListOfNotRepeatingElements(connectedCards.flat());

const getListOfAllowedSymbols = (allSymbols, connectedCards) => {
    return xor(getListOfRestrictedSymbols(connectedCards), allSymbols);
}

export { 
    nextSymbolGenerator, 
    getAllSymbols, 
    getListOfAllowedSymbols,
    nextSymbolGetter,
}