'use strict';

angular.module('mean.auth')
.factory('Auth', ['$q', '$timeout', '$location', '$http' , authFactory]);

function authFactory($q, $timeout, $location, $http) {
    return {
        checkLoggedin: function() {
            var deferred = $q.defer();

            // Make an AJAX call to check if the user is logged in
            $http.get('/loggedin').success(function(user) {
            // Authenticated
                if (user !== '0') $timeout(deferred.resolve);

                // Not Authenticated
                else {
                    $timeout(deferred.reject);
                    $location.url('/login');
                } 
            });

            return deferred.promise;

        }
    };
}