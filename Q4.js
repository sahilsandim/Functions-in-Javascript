function calculateTax(){
    let taxRate;
    function calculateTaxRate(income){
        if(income<10000){
            return taxRate = 0.1;
        }
        else if(income<30000){
            return taxRate = 0.2;
        }
        else{
            return taxRate = 0.3;
        }
    

        }
        function TaxtobePaid(income){
            calculateTaxRate(income);
            return income * taxRate;
    }
    
   return TaxtobePaid;


}

const TaxCalculation = calculateTax();

console.log(TaxCalculation(20000));
console.log(TaxCalculation(32000));
console.log(TaxCalculation(50000));