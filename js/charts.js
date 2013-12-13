$(document).ready(function(){

    if ($('#heart_container_chart').length) {
        $('#heart_container_chart').highcharts({
            chart: {
                backgroundColor:'transparent',
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                margin: [0, 0, 0, 0],
                spacingTop: 0,
                spacingBottom: 0,
                spacingLeft: 0,
                spacingRight: 0
            },
            title: {
                text: ''
            },
            tooltip: {
                pointFormat: '{series.name}'
            },
            plotOptions: {
                pie: {
                    borderWidth: 0,
                    size:'100%',
                    innerSize: 45,
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        color: '#ffffff',
                        distance: -20,
                        formatter: function() {
                            return this.point.name;
                        },
                        style: {
                            fontSize: '14px'
                        }
                    }
                }
            },
            series: [{
                type: 'pie',
                name: 'Year Stat',
                data: [
                    {
                        name: '-6',
                        y: 6,
                        color: '#656869',
                        borderWidth: 0
                    },
                    {
                        name: '+11',
                        y: 11,
                        color: '#be9a58',
                        borderWidth: 0
                    },
                    {
                        name: '+18',
                        y: 18,
                        color: '#ba724e',
                        borderWidth: 0
                    },
                    {
                        name: '+65',
                        y: 65,
                        color: '#7db4c1',
                        borderWidth: 0
                    }
                ]
            }]
        });
    }

    // HighCharts
    if ($('#spiderweb_container_chart').length) {
        $('#spiderweb_container_chart').highcharts({

            chart: {
                backgroundColor:'transparent',
                polar: true,
                type: 'line',
                plotBackgroundColor: //'#0b1928'
            {
                    linearGradient: [11, 25, 40, 500],
                    stops: [
                        [0, 'rgba(11, 25, 40, 1)'],
                        [1, 'rgba(11, 25, 40, 0)']
                    ]
                }
            },

            title: {
                text: 'Budget vs spending',
                x: -80
            },

            pane: {
                size: '80%'
            },

            xAxis: {
                categories: [
                    '2013', '2045', '2045', '2045',
                    '2045', '2045', '2045', '2045',
                    '1967', '2045', '2045', '2045',
                    '2045', '2045', '2045', '2045'
                ],
                tickmarkPlacement: 'on',
                lineWidth: 0
            },

            yAxis: {
                lineWidth: 0,
                min: 0
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y}</b><br/>'
            },

            legend: {
                align: 'right',
                verticalAlign: 'top',
                y: 70,
                layout: 'vertical'
            },

            series: [{
                name: 'Line 1',
                color: '#2a8db2',
                data: [
                    43000, 19000, 60000, 35000,
                    17000, 10000, 35000, 17000,
                    10000, 35000, 17000, 10000,
                    35000, 17000, 20000, 17000
                ],
                pointPlacement: 'on'
            }, {
                name: 'Line 2',
                color:'#e87901',
                data: [
                    50000, 39000, 42000, 31000,
                    26000, 14000, 42000, 31000,
                    50000, 39000, 45000, 31000,
                    26000, 14000, 42000, 31000
                ],
                pointPlacement: 'on'
            }]

        });
    }
}); //end jQuery
