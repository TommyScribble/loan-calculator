var calculateButton = document.getElementsByClassName('js-calculate')[0];
var loan = 0;
var interestInteger = 0;
calculateButton.addEventListener('click', () => {

    loan = document.getElementsByClassName('js-valueLoan')[0].value;
    loanInteger = parseInt(loan, 10);
    interest = document.getElementsByClassName('js-total-interest')[0].innerHTML.replace(/[^0-9.-]+/g,"");
    interestSlice = interest.slice(0, 3);
    interestInteger = parseInt(interestSlice, 10)
    
    google.charts.load("current", { packages: ["corechart"] });
    
    google.charts.setOnLoadCallback(drawChart);

    
    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Payment type', 'Total (in pounds sterling)'],
            ['Loan', loanInteger],
            ['Interest', interestInteger]
        ]);

        var options = {
            backgroundColor: 'transparent',
            chartArea: {'width': '100%', 'height': '100%'},
            pieSliceTextStyle: {
                color: 'none',
            },
            pieHole: 0.8,
            colors: ['#ffffff', '#2a72db'],
        };

        var chart = new google.visualization.PieChart(document.getElementById('chart'));
        chart.draw(data, options);
    }
})