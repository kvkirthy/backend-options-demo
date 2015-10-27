
angular.module("messageBoard", ['ui.router', 'firebase'])
.constant("messageBoardReference", {})
.config(function($stateProvider, $urlRouterProvider, messageBoardReference){
    
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