movieRatingApp.controller('mainController', ['$scope', '$http', '$mdToast', function ($scope, $http, $mdToast) {

    $scope.movies = [
        { "$id": "1", "title": "Gone Girl", "image": "images/movie1.jpg", "rating": 3, "releaseDate": "2014-02-22" },
        { "$id": "2", "title": "The Good Life", "image": "images/movie2.jpg", "rating": "4", "releaseDate": "2014-06-24" },
        { "$id": "3", "title": "The Hero of Color City", "image": "images/movie3.jpg", "rating": "0", "releaseDate": "2014-11-23" },
        { "$id": "4", "title": "Guardians of the Galaxy", "image": "images/movie4.jpg", "rating": "5", "releaseDate": "2014-07-01" },
        { "$id": "5", "title": "The Drop", "image": "images/movie5.jpg", "rating": "0", "releaseDate": "2014-12-01" },
        { "$id": "6", "title": "If I Stay", "image": "images/movie6.jpg", "rating": "0", "releaseDate": "2018-01-01" }
    ];

    $scope.sortOptions = [
        {
            displayValue: "Name",
            mappingValue: "title"
        },
        {
            displayValue: "Release Date",
            mappingValue: "releaseDate"
        }
    ]

    $scope.updateChart = function () {
        buildChart();
    };
    $scope.charts = [
        {
            displayValue: "Column Chart",
            mappingValue: "ColumnChart"
        },
        {
            displayValue: "Bar Chart",
            mappingValue: "BarChart"
        }
    ]

    $scope.selectedChart = $scope.charts[0].mappingValue;

    buildChart();
    function buildChart() {
        $scope.myChartObject = {};

        $scope.myChartObject.type = $scope.selectedChart;
        var maxStar = 5;
        var movieData = [];
        for (var j = 0; j <= maxStar; j++) {
            var count = 0;
            for (var t = 0; t < $scope.movies.length; t++) {
                if (j == $scope.movies[t].rating) {
                    count++;
                }
            }
            movieData[j] = {
                c: [
                    { v: j + " Star" },
                    { v: count }
                ]
            }
        }
        $scope.myChartObject.data = {
            "cols": [
                { id: "t", label: "Rating", type: "string" },
                { id: "s", label: "Count", type: "number" }
            ], "rows": movieData
        };

        $scope.myChartObject.options = {
            'title': 'Movie Bar'
        };
    }

    $scope.$watch('movies', function(oldValue, newValue){
        if(newValue){

        }
    })

    // var counts = {};
    // angular.forEach($scope.movies, function(current){
    //     counts[current] = (counts[current] || 0)+1;
    // });
    // function drawChart() {
    //     // var data = new google.visualization.DataTable();
    //     // data.addColumn('number', 'Count');
    //     // data.addColumn('number', 'Star');

    //     var maxStar = 5;
    //     var movieCount = [];

    //     // movieCount = [[3, 0],
    //     // [4, 1],
    //     // [1, 2],
    //     // [2, 3],
    //     // [8, 4],
    //     // [12, 5]];

    //     var count = [0, 3, 0, 6, 0, 1];
    //     var rating = [0, 1, 2, 3, 4, 5];
    //     for (var i = 0; i < $scope.movies.length; i++) {

    //         // switch (parseInt($scope.movies[i].rating)) {
    //         //     case 0:
    //         //         count[0] += 1;
    //         //         break;
    //         //     case 1:
    //         //         count[1] += 1;
    //         //         break;
    //         //     case 2:
    //         //         count[2] += 1;
    //         //         break;
    //         //     case 3:
    //         //         count[3] += 1;
    //         //         break;
    //         //     case 4:
    //         //         count[4] += 1;
    //         //         break;
    //         //     case 5:
    //         //         count[5] += 1;
    //         //         break;
    //         // }
    //         //if (movieCount.indexOf(parseInt($scope.movies[i].rating)) == -1)
    //         movieCount.push(parseInt($scope.movies[i].rating));
    //         //     (movieCount[i])++
    //         // else
    //         //movieCount.push(parseInt($scope.movies[i].rating));
    //         //movieCount.indexOf($scope.movies[i].rating) == -1 ? movieCount.push($scope.movies[i].rating) : '';
    //     }

    //     for (var k = 0; k < maxStar; k++) {
    //         var myCount = 0;
    //         for(var c=0; c < $scope.movies.length; c++){
    //             if( k == $scope.movies[c].rating)
    //                 myCount++;
    //         }


    //         data.addRow([
    //             myCount, rating[k]
    //         ]);
    //     }
    //     // Instantiate and draw the chart.
    //     var chart = new google.visualization.BarChart(document.getElementById('movieChart'));
    //     chart.draw(data, null);
    //}

}]);