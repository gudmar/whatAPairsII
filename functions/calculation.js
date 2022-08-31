
const getNrOfSymbols = nrOfSymbolsOnCard => nrOfSymbolsOnCard * (nrOfSymbolsOnCard - 1) + 1;
const getNrOfCards   = nrOfSymbolsOnACard => nrOfSymbolsOnCard * (nrOfSymbolsOnCard - 1) + 1

export { getNrOfCards, getNrOfSymbols }