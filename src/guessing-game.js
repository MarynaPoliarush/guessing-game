let number;
class GuessingGame {
    constructor() {
        this.minRange = null;
        this.maxRange = null;
        this.guessResult = null;
    }
    
    setRange(min, max) {
        this.minRange = min;
        this.maxRange = max;
        
    }

    guess() {
        this.guessResult= Math.round( (this.maxRange-this.minRange)/2 + this.minRange) ;
        console.log('logged guess',this.guessResult)
        return this.guessResult;
    }

    lower() {
        console.log('logged lower 1',this.guessResult)
        
            console.log('logged lower',this.guessResult)
            this.maxRange = Math.round( (this.maxRange-this.minRange)/2 + this.minRange);
        
    }

    greater() {
       
            console.log('logged greater',this.guessResult)
            this.minRange = Math.round( (this.maxRange-this.minRange)/2 + this.minRange);
           
        
    }

}

module.exports = GuessingGame;
