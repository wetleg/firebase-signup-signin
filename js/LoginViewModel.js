var LoginViewModel = function(makeLoginViewVisible) {
	
	var userAddress = "https://flat-tasks.firebaseio.com/users";
	var firebaseUserRef = new Firebase(userAddress);
	
	var self = this;
	self.userName = ko.observable("");      
	self.userPassword = ko.observable(""); 
	self.isVisible = ko.observable(makeLoginViewVisible); 
	
	self.makeVisible = function() {
		self.isVisible(true);
		ViewModels.signupVM.isVisible(false);
	}
	
	self.login = function() {
		console.log("logging in");
		self.isVisible(false);
		authClient.login('password', {
			email: self.userName(),
		  	password: self.userPassword()
	  	});     
	}

}

