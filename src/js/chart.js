google.charts.load("current", { packages: ["corechart"] });

google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Payment type', 'Total (in pounds sterling)'],
        ['Loan', 7500],
        ['Interest', 750]
    ]);

    var options = {
        backgroundColor: 'transparent',
        chartArea: {'width': '100%', 'height': '100%'},
        legend: 'none',
        pieSliceTextStyle: {
            color: 'none',
          },
        pieHole: 0.8,
        colors: ['#ffffff', '#2a72db'],
    };

    var chart = new google.visualization.PieChart(document.getElementById('chart'));
    chart.draw(data, options);
    console.log('CHART', chart)
}
