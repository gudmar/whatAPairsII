import { 
    getNrOfSymbols,
    getAllSymbols,
    getArray,
    getArrayOfSameElements,
} from './symbols.js'
import {
    getArraySlice, getArrayOfNull
} from './arrayLogicFunctions.js'

class DobbleSolution {
    constructor(nrOfSymbolsOnCard){
        this.nrOfSymbolsOnCard = nrOfSymbolsOnCard;
        this.allSymbols = getAllSymbols(nrOfSymbolsOnCard);
        this.possibleNrOfCards = (nrOfSymbolsOnCard) * (nrOfSymbolsOnCard - 1) + 1;
        this.errors = {
            SECTION_INDEX_INVALID: 'Section index outside range. Nr of sections i equal to nr of symbols on a card starting from 0',
            CARD_INDEX_TOO_SMALL: functionName => `Card index is too small to be handled in ${functionName}`,
            SYMBOL_INDEX_TOO_SMALL: functionName => `Symbol index too small to be handled in ${functionName}`,
        }
    }

    get errors() {
        return this._errors;
    }
    set errors(val) {
        this._errors = val;
    }

    get nrOfSymbols() {
        return this.nrOfSymbolsOnCard * (this.nrOfSymbolsOnCard -1) + 1
    }
    get nrOfCards() {
        return this.nrOfSymbols;
    }

    getRowSectionNr(nrOfCard){
        if (nrOfCard < this.nrOfSymbolsOnCard) return 0;
        const getResultForNextSection = (cardNr, nestingLevel) => {
            if (cardNr < 0) throw new Error('There is a mistake in getRowSectionNr')
            if (cardNr < this.nrOfSymbolsOnCard) return nestingLevel;
            return getResultForNextSection(cardNr - (this.nrOfSymbolsOnCard - 1), nestingLevel + 1);
        }
        return getResultForNextSection(nrOfCard - this.nrOfSymbolsOnCard + 1, 1 )
    }

    // getCardIndexInSection(nrOfCard){
    //     if (nrOfCard < this.nrOfSymbolsOnCard) return nrOfCard % this.nrOfSymbolsOnCard;
    //     const nrOfCardWithoutZeroSection = nrOfCard - this.nrOfSymbolsOnCard;
    //     const nrOfSection = Math.floor(nrOfCardWithoutZeroSection / (this.nrOfSymbolsOnCard - 1));
    //     return nrOfCardWithoutZeroSection - nrOfSection * (this.nrOfSymbolsOnCard - 1)
    //     const result = Math.floor((nrOfCard - this.nrOfSymbolsOnCard) % this.nrOfSymbolsOnCard); // nrOfCard + 1, because nrOfCard is from 0 to nrOfSymbolsOnCard - 1;
    //     return result;    
    // }

    getCardIndexInSection(nrOfCard){

    // WORKS FINE!!!!! TESTED !!!! Just above version is better for performance
    // where below is better for readebility. In this case this alg is not called too often, 
    //computers are fast, so perhaps it is even better

        const getIndexInSection = (nrOfSymbolsOnCard, nrOfCard, isFirstCall) => {
            if (nrOfCard < nrOfSymbolsOnCard) return nrOfCard % nrOfSymbolsOnCard;
            const nrOfSymbolsNext = isFirstCall ? nrOfSymbolsOnCard - 1 : nrOfSymbolsOnCard;
            return getIndexInSection(nrOfSymbolsNext, nrOfCard - nrOfSymbolsOnCard, false)
        }
        return getIndexInSection(this.nrOfSymbolsOnCard, nrOfCard, true);
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

    orderSymbolsForCardSection0(symbols, nrOfCard, nrOfSymbol) {

    }

    getMultipliedOffset(cardNr, symbolOnCardNr) {
        if (cardNr < this.nrOfSymbolsOnCard) throw new Error(this.errors.CARD_INDEX_TOO_SMALL('getMultipliedOffset'));
        if (symbolOnCardNr < 1) throw new Error(this.errors.SYMBOL_INDEX_TOO_SMALL('getMultipliedOffset'));
        const cardSection = this.getRowSectionNr(cardNr);
        const cardSectionOffset = 1; // due to fact, that for section 0 and 1 already solved. A pattern starts from index === 2;
        const cardSymbolOffset = 1; // section 0 and 1 already solved;
        const multipliedOffset = (cardSection - cardSectionOffset) * (symbolOnCardNr - cardSymbolOffset);
        // console.log({
        //     functionName: 'getMultipliedOffset',
        //     cardNr, symbolOnCardNr, cardSection, result: multipliedOffset,
        // })
        return multipliedOffset;
    }

    orderSymbols(symbols, cardNr, symbolOnCardNr) {  // NOT EXECTLY WHAT WAS WANTED
            if (cardNr >= 0 && cardNr < this.nrOfSymbolsOnCard && symbolOnCardNr === 0) return [getArray(0, this.nrOfSymbolsOnCard), ...getArrayOfSameElements(this.nrOfSymbolsOnCard - 1, [0])]; // 1,1 section
            if (symbolOnCardNr === 0) return getArrayOfSameElements(symbols.length - 1, [symbols[this.getRowSectionNr(cardNr)]]);
            if (cardNr >= 0 && cardNr < this.nrOfSymbolsOnCard) {
                const resultArr = getArrayOfSameElements(this.nrOfSymbolsOnCard, []);
                resultArr[symbolOnCardNr] = symbols;
                return resultArr;
                return cardNr === symbolOnCardNr ? symbols : [];
            }
            if (symbolOnCardNr === 1) return symbols.map(_ => [_]);
            const multipliedOffset = this.getMultipliedOffset(cardNr, symbolOnCardNr);
            const result = this.shiftArray(symbols, multipliedOffset).map(_=>[_]);
            // console.log({
            //     functionName: 'orderSymbols', symbols, cardNr, symbolOnCardNr, multipliedOffset, result,
            // })
        return result;
    }

    generateCardSymbol(nrOfSymbol, nrOfCard) {
        const rowSectionNr = this.getRowSectionNr(nrOfCard)
        const colSectionNr = nrOfSymbol;
        const indexInSection = this.getCardIndexInSection(nrOfCard);
        const possibleSymbolsAtIndex = this.getPossibleSymbolsAtSectionIndex(colSectionNr);
        const orderedSymbolsInSection = this.orderSymbols(possibleSymbolsAtIndex, nrOfCard, colSectionNr); // 5 failed
        // console.log({
        //     name: 'generateCardSymbol',
        //     nrOfCard,
        //     nrOfSymbol,
        //     possibleSymbolsAtIndex,
        //     rowSectionNr, colSectionNr, indexInSection, orderedSymbolsInSection,
        //     result: orderedSymbolsInSection
        // })
        return orderedSymbolsInSection[indexInSection]
    }

    generateCard(nrOfCard) {
        const result = getArrayOfNull(this.nrOfSymbolsOnCard).reduce((acc, _, symbolNr) => {
            const cardSymbol = this.generateCardSymbol(symbolNr, nrOfCard)
            acc.push(cardSymbol)
            return acc;
        }, [])
        // console.log({name:'generateCard', nrOfCard, result})
        return result.flat();
    }

    generateSolution() {
        const solution = [];
        for(let cardNr = 0; cardNr < this.nrOfCards; cardNr++) {
            const nextCard = this.generateCard(cardNr)
            solution.push(nextCard)
        }
        console.log({
            name: 'finalSolution',
            nrOfCards: this.nrOfCards,
            solution,
        })
        return solution;
    }


}

export default DobbleSolution;