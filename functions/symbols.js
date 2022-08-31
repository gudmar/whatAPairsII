
import { getArrayOfNull } from './arrayLogicFunctions.js'
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

const getListOfAllowedSymbols = (allSymbols, connectedCards) => {
    const listOfAllConnectedSymbols = connectCards.flat();
    allSymbols.reduce((acc, symbol) => {
        if (listOfAllConnectedSymbols.find(symbol)) acc.push(symbol);
        return acc;
    }, [])
}

export { 
    nextSymbolGenerator, 
    getAllSymbols, 
    getListOfAllowedSymbols,
    nextSymbolGetter,
}