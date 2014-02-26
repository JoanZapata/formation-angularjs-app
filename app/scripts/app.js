'use strict';

angular.module('formationAngularjsAppApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])

  // Configure routes
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/:tweet', {
        templateUrl: 'views/answer.html',
        controller: 'AnswerCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

  // Configure 'ago' filter
  .filter('ago', function () {
    return function (time) {
      return moment(time).fromNow();
    };
  })

  //////////////////////////////////////
  ////// REST sources //////////////////
  //////////////////////////////////////

  .factory('Tweet', function ($resource) {
    return $resource('http://localhost:8080/tweets')
  })

  .factory('Answer', function ($resource) {
    return $resource('http://localhost:8080/tweets/:id/answers')
  });

