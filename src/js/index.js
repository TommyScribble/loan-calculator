class LoanCalculator {
    constructor() {
        this.input = {
        loanAmount: document.getElementsByClassName('js-valueLoan')[0],
        annualInterest:document.getElementsByClassName('js-valueInterest')[0],
        repaymentPeriod: document.getElementsByClassName('js-valueLoanPeriod')[0],
        interest: document.getElementsByClassName('js-total-interest')[0]
    }    
}


calculateInterest(loanAmount, annualInterest, repaymentPeriod) {
    //Calulate interest
    var yearlyInterest = (loanAmount / 100 ) * annualInterest;
    var monthlyInterest = yearlyInterest / 12;
    var totalInterest = yearlyInterest * repaymentPeriod;
    this.displayCalculation(totalInterest.toFixed(2), 'js-total-interest');
    this.calculateMonthleyPayments(this.input.loanAmount.innerHTML, monthlyInterest, this.input.repaymentPeriod.innerHTML);
    this.calculateTotalPayments(this.input.loanAmount.innerHTML, totalInterest);
}

calculateMonthleyPayments(loanAmount, monthlyInterest, repaymentPeriod) {
    var loanPerMonth = loanAmount / repaymentPeriod / 12;
    var monthlypayment = loanPerMonth + monthlyInterest;
    this.displayCalculation(monthlypayment.toFixed(2), 'js-monthly-payment')
}

calculateTotalPayments(loanAmount, totalInterest) {
    var totalPayments = +loanAmount + +totalInterest;
    this.displayCalculation(totalPayments.toFixed(2), 'js-total-payment')
}


collectData(inputID, outputID) {
//Collect data from form
    var calculateButton = document.getElementsByClassName('js-calculate')[0];

    var total;

    calculateButton.addEventListener('click', () => {
        total = document.getElementsByClassName(`${inputID}`)[0].innerHTML;
        this.displayCalculation(total, outputID);
            this.calculateInterest(this.input.loanAmount.innerHTML, this.input.annualInterest.innerHTML, this.input.repaymentPeriod.innerHTML);
    })
}
    
    
displayCalculation(total, outputID) {
    //Display the calculations
    document.getElementsByClassName(`${outputID}`)[0].innerHTML= `£ ${total}`;
}
    
updateInput(inputID, outputClass) {
    //Update outputs with input from range slider
    var slider = document.getElementById(`${inputID}`),
        sliderOutput = document.getElementsByClassName(`${outputClass}`)[0];

    sliderOutput.innerHTML = slider.value;

    slider.addEventListener('input', () => {
        sliderOutput.innerHTML = slider.value;
    }, false);
}
}

const calculator = new LoanCalculator;

calculator.updateInput('loanAmount', 'js-valueLoan');
calculator.updateInput('annualInterest', 'js-valueInterest');
calculator.updateInput('repaymentPeriod', 'js-valueLoanPeriod');
calculator.collectData('js-valueLoan', 'js-total-loan');