movieRatingApp.controller('mainController', ['$scope', '$http', '$mdToast', function ($scope, $http, $mdToast) {
    google.charts.setOnLoadCallback(drawChart);

    $scope.movies = [
        { "$id": "1", "title": "Gone Girl", "image": "Images/movie1.jpg", "rating": "3", "releaseDate": "2014-02-22" },
        { "$id": "2", "title": "The Good Life", "image": "Images/movie2.jpg", "rating": "4", "releaseDate": "2014-06-24" },
        { "$id": "3", "title": "The Hero of Color City", "image": "Images/movie3.jpg", "rating": "0", "releaseDate": "2014-11-23" },
        { "$id": "4", "title": "Guardians of the Galaxy", "image": "Images/movie4.jpg", "rating": "5", "releaseDate": "2014-07-01" },
        { "$id": "5", "title": "The Drop", "image": "Images/movie5.jpg", "rating": "0", "releaseDate": "2014-12-01" },
        { "$id": "6", "title": "If I Stay", "image": "Images/movie6.jpg", "rating": "0", "releaseDate": "2018-01-01" }
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
    $scope.currentDate = new Date();

    $scope.isUpcoming = function (index) {
        return new Date($scope.movies[index].releaseDate) > new Date() ? true : false;
    }
    // $http.get('https://api.myjson.com/bins/136jkr').then(function(response){
    //     $scope.movies = response.data;
    // }), function(error){
    //     $mdToast.show(
    //         $mdToast.simple()
    //         .textContent("Data is not loaded! Please try again later")
    //         .position('bottom left')
    //     );
    // };

    $scope.updateChart = function (rating) {
        drawChart();
    }
    function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('number', 'Count');
        data.addColumn('number', 'Star');

        var maxStar = 5;
        var movieCount = [];

        // movieCount = [[3, 0],
        // [4, 1],
        // [1, 2],
        // [2, 3],
        // [8, 4],
        // [12, 5]];

        var count = [0, 3, 0, 6, 0, 1];
        var rating = [0, 1, 2, 3, 4, 5];
        for (var i = 0; i < $scope.movies.length; i++) {

            // switch (parseInt($scope.movies[i].rating)) {
            //     case 0:
            //         count[0] += 1;
            //         break;
            //     case 1:
            //         count[1] += 1;
            //         break;
            //     case 2:
            //         count[2] += 1;
            //         break;
            //     case 3:
            //         count[3] += 1;
            //         break;
            //     case 4:
            //         count[4] += 1;
            //         break;
            //     case 5:
            //         count[5] += 1;
            //         break;
            // }
            //if (movieCount.indexOf(parseInt($scope.movies[i].rating)) == -1)
            movieCount.push(parseInt($scope.movies[i].rating));
            //     (movieCount[i])++
            // else
            //movieCount.push(parseInt($scope.movies[i].rating));
            //movieCount.indexOf($scope.movies[i].rating) == -1 ? movieCount.push($scope.movies[i].rating) : '';
        }

        for (var k = 0; k < count.length; k++) {
            data.addRow([
                count[k], rating[k]
            ]);
        }
        // Instantiate and draw the chart.
        var chart = new google.visualization.BarChart(document.getElementById('movieChart'));
        chart.draw(data, null);
    }

}]);
