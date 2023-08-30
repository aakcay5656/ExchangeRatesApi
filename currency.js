class Currency{
    constructor(firstCurrency,secondCurrency){
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.url="https://v6.exchangerate-api.com/v6/b629ec80f0cd7cd8d9ee49de/latest/";
        this.amount=null;
    }
    exchange(){
        return new Promise((resolve,reject) =>{
            fetch(this.url+this.firstCurrency).then(response=>response.json())
            .then(data=>{
                const parity=data.conversion_rates[this.secondCurrency];
                const amount2=Number(this.amount);
    
                let total=parity *amount2;
    
                resolve(total);
    
            }).catch(error=>reject(error));    


        });
        
       
    }

    changeAmount(amount){
        this.amount = amount;

    }
    changeFirstCurrency(newFirstCurrency){
        this.firstCurrency = newFirstCurrency;

    }
    changeSecondCurrency(newSecondCurrency){
        this.secondCurrency = newSecondCurrency;
        
    }
} 