import { 
    getNrOfSymbols,
    getAllSymbols,
    getArray,
    getArrayOfSameElements,
} from './symbols.js'
import {
    getArraySlice
} from './arrayLogicFunctions.js'

class DobbleSolution {
    constructor(nrOfSymbolsOnCard){
        this.nrOfSymbolsOnCard = nrOfSymbolsOnCard;
        this.errors = {
            SECTION_INDEX_INVALID: 'Section index outside range. Nr of sections i equal to nr of symbols on a card starting from 0'
        }
    }

    get errors() {
        return this._errors;
    }
    set errors(val) {
        this._errors = val;
    }

    getRowSectionNr(nrOfCard){
        if (nrOfCard < this.nrOfSymbolsOnCard) return 0;
        // const result = Math.floor((nrOfCard + 1 - this.nrOfSymbolsOnCard) / this.nrOfSymbolsOnCard); 
        const result = Math.floor((nrOfCard + 1) / this.nrOfSymbolsOnCard); 
        // nrOfCard + 1, because nrOfCard is from 0 to nrOfSymbolsOnCard - 1;
        return result;    
    }

    getCardIndexInSection(nrOfCard){
        if (nrOfCard < this.nrOfSymbolsOnCard) return nrOfCard % this.nrOfSymbolsOnCard;
        const result = Math.floor((nrOfCard + 1 - this.nrOfSymbolsOnCard) % this.nrOfSymbolsOnCard); // nrOfCard + 1, because nrOfCard is from 0 to nrOfSymbolsOnCard - 1;
        return result;    
    }

    getPossibleSymbolsAtSectionIndex(colSectionNr) {
        if (colSectionNr >= this.nrOfSymbolsOnCard || colSectionNr < 0) throw new Error(this.errors.SECTION_INDEX_INVALID)
        const totalNumberOfSymbols = getNrOfSymbols(this.nrOfSymbolsOnCard);
        const allSymbols = getAllSymbols(totalNumberOfSymbols);
        const sectionIndexOffset = colSectionNr === 0 ? 0 : 1
        const startIndex = colSectionNr * (this.nrOfSymbolsOnCard - 1) + sectionIndexOffset;
        const endIndex = startIndex + this.nrOfSymbolsOnCard - sectionIndexOffset -1; // Next sections are shorter
        const result = getArraySlice(allSymbols, startIndex, endIndex); // include 0, not include nrOfSymbolsOnCard    
        return result;
    }

    shiftArray(arr, nrOfElements) {
        const correctedNrOfElements = nrOfElements % arr.length;
        const arrA = arr.slice(0, correctedNrOfElements);
        const arrB = arr.slice(correctedNrOfElements);
        return [arrB, arrA].flat();
    }

    orderSymbols(symbols, cardNr, symbolOnCardNr) {  // NOT EXECTLY WHAT WAS WANTED
            if (cardNr >= 0 && cardNr < this.nrOfSymbolsOnCard && symbolOnCardNr === 0) return [getArray(0, this.nrOfSymbolsOnCard), ...getArrayOfSameElements(this.nrOfSymbolsOnCard - 1, 0)]; // 1,1 section
            if (symbolOnCardNr === 0) return getArrayOfSameElements(this.getRowSectionNr(cardNr));
            // Array(this.nrOfSymbolsOnCard).fill(undefined).map(symbol => this.getRowSectionNr(cardNr)); // 1, Y section 
            if (cardNr === 0) return getPossibleSymbolsAtIndex(0);
            if (cardNr === 1) return getPossibleSymbolsAtIndex(1);
            if (symbolOnCardNr === 1) return getPossibleSymbolsAtIndex(symbolOnCardNr);
            const cardSection = getCardIndexInSection(cardNr);
            const cardSectionOffset = 1; // due to fact, that for section 0 and 1 already solved. A pattern starts from index === 2;
            const cardSymbolOffset = 1; // section 0 and 1 already solved;
            const multipliedOffset = (cardSection - cardSectionOffset) * (symbolOnCardNr - cardSymbolOffset);
            const possibleSymbols = getPossibleSymbolsAtIndex(symbolOnCardNr);
            const result = shiftArray(possibleSymbols, multipliedOffset);
        return result;
    }

}

export default DobbleSolution;