angular.module("messageBoard", ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){

	Parse.initialize("zhsfpUN2lBRPGI3Odk5l4I95ZfGWIUp5o2Z3ew3a", "LgsVjlzMtgxmeGBIp4YyJoMi5iuQxSSiXJho4kZr");
    
	$stateProvider
		.state('home',{
	      url: "/home",
	      templateUrl: "templates/message-board-home.html",
	      controller:'homeController'
	    })

	$urlRouterProvider.otherwise("/home");

})
.controller('homeController', function($scope){

	$scope.messageList = [{
		author: "Tom Hanks",
		message: "Welcome to Message Board"
	}, {
		author: "Sachin Tendulkar",
		message: "Good morning"
	}];

	$scope.postMessage = function(){
		$scope.messageList.push({
			author: $scope.author,
			message: $scope.newMessage
		});
	}

})

;