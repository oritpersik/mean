'use strict';

//Setting up route
angular.module('mean.articles')
.config(['$stateProvider', articlesConfig]);


function articlesConfig ($stateProvider) {
    // Check if the user is connected

    // states for my app
    $stateProvider
    .state('all articles', {
        url: '/articles',
        templateUrl: 'articles/views/list.html',
        resolve: {
          loggedin: function(Auth) {
            return Auth.checkLoggedin();
        } 
    }
})
    .state('create article', {
        url: '/articles/create',
        templateUrl: 'articles/views/create.html',
        resolve: {
          loggedin: function(Auth) {
            return Auth.checkLoggedin();
        } 
    })
    .state('edit article', {
        url: '/articles/:articleId/edit',
        templateUrl: 'articles/views/edit.html',
        resolve: {
          loggedin: function(Auth) {
            return Auth.checkLoggedin();
        } 
    })
    .state('article by id', {
        url: '/articles/:articleId',
        templateUrl: 'articles/views/view.html',
        resolve: {
          loggedin: function(Auth) {
            return Auth.checkLoggedin();
        } 
    });
}
