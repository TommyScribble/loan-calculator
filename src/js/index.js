class LoanCalculator {
    constructor() {
        this.input = {
        loanAmount: document.getElementsByClassName('js-valueLoan')[0],
        annualInterest:document.getElementsByClassName('js-valueInterest')[0],
        repaymentPeriod: document.getElementsByClassName('js-valueLoanPeriod')[0]
    }    
}

updateResultsTitle(loanYears) {
    document.getElementsByClassName('js-title')[0].innerHTML = `Your loan over ${loanYears} years`
}

displayCalculation(total, outputID) {
    //Display the calculations
    document.getElementsByClassName(`${outputID}`)[0].innerHTML= `£ ${total}`;
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

calculateInterest(loanAmount, annualInterest, repaymentPeriod) {
    //Calulate interest
    var yearlyInterest = (loanAmount / 100 ) * annualInterest;
    var monthlyInterest = yearlyInterest / 12;
    var totalInterest = yearlyInterest * repaymentPeriod;

    this.calculateMonthleyPayments(this.input.loanAmount.value, monthlyInterest, this.input.repaymentPeriod.value);
    this.calculateTotalPayments(this.input.loanAmount.value, totalInterest);

    this.displayCalculation(totalInterest.toFixed(2), 'js-total-interest');
}

collectData() {
    //Collect data from form
    var calculateButton = document.getElementsByClassName('js-calculate')[0];

    calculateButton.addEventListener('click', () => {
            this.calculateInterest(this.input.loanAmount.value, this.input.annualInterest.value, this.input.repaymentPeriod.value);
            this.updateResultsTitle(calculator.input.repaymentPeriod.value);
    })
}

    
updateInput(inputID, outputClass) {
    //Update outputs with input from range slider
    var slider = document.getElementById(`${inputID}`),
        sliderOutput = document.getElementsByClassName(`${outputClass}`)[0];

    sliderOutput.value = slider.value;

    slider.addEventListener('input', (e) => {
        sliderOutput.value = e.target.value;
    }, false);
    sliderOutput.addEventListener('input', (e) => {
        slider.value = e.target.value;
    }, false);
}
}

const calculator = new LoanCalculator;

calculator.updateInput('loanAmount', 'js-valueLoan');
calculator.updateInput('annualInterest', 'js-valueInterest');
calculator.updateInput('repaymentPeriod', 'js-valueLoanPeriod');
calculator.collectData();