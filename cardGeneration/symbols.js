
import { getArrayOfNull } from "./arrayLogicFunctions.js";

const getNrOfSymbols = (nrOfSymbolsOnCard) => 
    nrOfSymbolsOnCard * (nrOfSymbolsOnCard - 1) + 1;  // Not according to the alg from web page, but for my worked so far;

const getNrOfSymbolsAccordingToWebPage = nrOfSymbolsOnCard => nrOfSymbolsOnCard*nrOfSymbolsOnCard + nrOfSymbolsOnCard + 1;

const getAllSymbols = (nrOfSymbolsOnCard) => getArrayOfNull(getNrOfSymbols(nrOfSymbolsOnCard)).map( (_, index) => index);

const getArray = (start, end) => getArrayOfNull(end - start).map( (_, index) => index + start);

const getArrayOfSameElements = (length, element) => getArrayOfNull(length).map((item => element));


export {
    getNrOfSymbols,
    getAllSymbols,
    getArray,
    getArrayOfSameElements
}