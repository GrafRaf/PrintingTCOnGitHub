angular.module('ngView', [], function ($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: '/templates/main.html',
        controller: ServicesController
    });

    $routeProvider.when('/services', {
        templateUrl: '/templates/services.html',
        controller: ServicesController
    });

    $routeProvider.when('/services/:serviceId', {
        templateUrl: '/templates/service.html',
        controller: ServiceController
    });

    $routeProvider.when('/contacts', {
        templateUrl: '/templates/contacts.html',
        controller: ContactsController
    });

    // configure html5 to get links working on jsfiddle
    $locationProvider.html5Mode(true);
});

function MainCntl($scope, $route, $routeParams, $location) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
}

function SerivesController($scope, $routeParams) {
    $scope.name = "ServicesController";
    $scope.params = $routeParams;
}

function ServiceController($scope, $routeParams) {
    $scope.name = "ServiceController";
    $scope.params = $routeParams;
}

function ContactsController($scope, $routeParams) {
    $scope.name = "ContactsController";
    $scope.params = $routeParams;
}