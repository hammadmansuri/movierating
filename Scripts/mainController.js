movieRatingApp.controller('mainController', ['$scope', '$http', '$mdToast', function($scope, $http, $mdToast){
    
    $http.get('assets/movies.json').success(function(data){

    }).error(function(error){
        $mdToast.show(
            $mdToast.simple()
            .textContent("Data is not loaded! Please try again later")
            .position('bottom left')
        );
    });
}]);