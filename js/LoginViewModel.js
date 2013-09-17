var LoginViewModel = function(makeLoginViewVisible) {
		
	var firebaseRoot = new Firebase("https://flat-tasks.firebaseio.com"); 
	
	var authClient = new FirebaseSimpleLogin(firebaseRoot, function(error, user) {
	 	if (error) {
	    	// an error occurred while attempting login
	    	console.log(error);
			alert("User name or password is not correct. Please try again.");
			self.isVisible(true);
	  	} else if (user) {
	    	// user authenticated with Firebase
	    	console.log('Logging In User ID: ' + user.id + ', Provider: ' + user.provider);  
	    	alert("LOGIN SUCCESSFUL. Create a new AppViewModel for your app");
	  	} else {
	    	// user is logged out
			console.log("User logged out");
	  	}
	});
	
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

