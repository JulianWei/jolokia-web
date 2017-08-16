angular.module("myApp").component('threadChart', {
    templateUrl: '/static/component/charts/simpleChart.html',
    bindings: {
    },
    controllerAs: 'ctx',
    controller: function($rootScope, DashboardService, UtilService){
        this.labels = DashboardService.threadChartData().labels;
        this.series = DashboardService.threadChartData().series;
        this.data = DashboardService.threadChartData().data;

        this.datasetOverride = [
            UtilService.chartColor(150,187,205),
            UtilService.chartColor(220,220,220)
        ];

        this.options = {
            scales: {
                yAxes: [{
                    id: 'y-axis-thread1',
                    type: 'linear',
                    display: true,
                    position: 'left',
                    ticks: {
                        beginAtZero:true,
                    },
                    scaleLabel:{
                        display: true,
                        labelString: 'Number of Threads',
                        fontColor: "#666666"
                    }
                }]
            },
            legend: {
                display:true
            }
        };

        this.onClick = function (points, evt) {
            console.log(points, evt);
        };
    }
});
