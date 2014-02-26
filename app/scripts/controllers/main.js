'use strict';

angular.module('formationAngularjsAppApp')
  .controller('MainCtrl', function($scope, $http, $timeout, Tweet) {

    // Load tweets list
    function reload() {
      Tweet.query(function(tweets) {
        $scope.tweets = tweets;
        $timeout(reload, 1000);
      });
    }

    $scope.tweet = function() {
      $scope.error = null;
      Tweet.save({
        authorName: '@' + $scope.name,
        authorEmail: $scope.email,
        message: $scope.message
      }, function(newPost) {
        $scope.tweets.push(newPost);
        $scope.message = null;
      }, function(error) {
        $scope.error = error.data.message;
      })
    };

    reload();
  }
);
