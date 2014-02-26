'use strict';

angular.module('formationAngularjsAppApp')
  .controller('AnswerCtrl', function($scope, $http, $routeParams, $location, Answer) {
    $scope.tweetId = $routeParams.tweet;

    // Load tweets list
    Answer.query({ id: $scope.tweetId },
      function(tweets) { $scope.tweets = tweets },
      function() { $location.url("/"); }
    )

    // Reply
    $scope.reply = function() {
      $scope.error = null;
      Answer.save(
        { id: $scope.tweetId },
        { authorName: '@' + $scope.name,
          authorEmail: $scope.email,
          message: $scope.message },
        function(data) {
          $scope.message = null;
          $scope.tweets.push(data);
        },
        function(error) {
          $scope.error = error.data.message;
        });
    }

  }
);