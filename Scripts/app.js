var movieRatingApp = angular.module('app', ['ngMaterial']);
google.charts.load('current', { packages: ['bar'] });
    
movieRatingApp.directive('starRatingComponent', function(){
    return{
        restrict:'EA',
        template:
        '<ul class="star-rating" ng-class="{readonlyClass: readonly}">' +
        '  <li ng-repeat="star in stars" class="star" ng-click="toggle($index)">' +
        '    <i class="material-icons">{{star.filled ? "star" : "star_border" }}</i>' + // or &#9733
        '  </li>' +
        '</ul>',
        scope:{
            ratingValue: '=ngModel',
            max: "=?",
            onRatingSelect: '&',
            readonly:'=?'
        },
        link: function(scope, elem, attr){
            if(scope.max == undefined){
                scope.max = 5;
            }
            function updateStars(){
                scope.stars=[];
                for(var i=0; i < scope.max; i++){
                    scope.stars.push({
                        filled:i < scope.ratingValue
                    })
                }
            }
            scope.toggle = function(index){
                if(scope.readonly == undefined || scope.readonly === false){
                    scope.ratingValue = index + 1;
                    scope.onRatingSelect({
                        rating: index + 1
                    });
                }
            }
            scope.$watch('ratingValue', function(oldValue, newValue){
                if(newValue){
                    updateStars();
                }
            })
        }
    }
});