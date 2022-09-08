
class DobbleSolution {
    constructor(nrOfSymbolsOnCard){
        this.nrOfSymbolsOnCard = nrOfSymbolsOnCard;
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

}

export default DobbleSolution;