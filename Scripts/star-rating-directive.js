movieRatingApp.directive('starRatingComponent', function(){
    return{
        restrict:'EA',
        template:
        '<ul class="star-rating" ng-class="{readonlyClass: isReadOnly}">' +
        '  <li ng-repeat="star in stars" class="star" ng-click="toggle($index)">' +
        '    <i class="material-icons">{{star.filled ? "star" : "star_border" }}</i>' + // or &#9733
        '  </li>' +
        '</ul>',
        scope:{
            movie: '=ngModel',
            max: "=?",
            onRatingSelect: '&?',
            releaseDate:'=?'
        },
        link: function(scope, elem, attr){
            if(scope.max == undefined){
                scope.max = 5;
            }
            function updateStars(){
                scope.isReadOnly = isFutureDate(scope.releaseDate);
                scope.stars=[];
                for(var i=0; i < scope.max; i++){
                    scope.stars.push({
                        filled:i < scope.movie.rating
                    })
                }
            }

            function isFutureDate (date) {
                return new Date(date) > new Date() ? true : false;
            };


            scope.toggle = function(index){
                if((!isFutureDate(scope.releaseDate)) ){
                    scope.movie.rating = index + 1;
                    scope.onRatingSelect({
                        rating: index + 1
                    });
                }
            }
            scope.$watch('movie.rating', function(oldValue, newValue){
                if(newValue){
                    updateStars();
                }
            })
        }
    }
});