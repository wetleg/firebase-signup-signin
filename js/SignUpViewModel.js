var SignUpViewModel = function(makeLoginViewVisible) {
	
	var firebaseRoot = new Firebase("https://flat-tasks.firebaseio.com"); 
	
	authClient = new FirebaseSimpleLogin(firebaseRoot, function(error, user) {
	 	if (error) {
	    	// an error occurred while attempting login
	    	console.log(error);
			alert("User name or password is not correct. Please try again.");
	  	} else if (user) {
	    	// user authenticated with Firebase
	    	console.log('Logging In User ID: ' + user.id + ', Provider: ' + user.email);  
	    	alert("Create a new AppViewModel for your app")
	  	} else {
	    	// user is logged out
			console.log("User logged out");
	  	}
	});
	
	var self = this;
	
	self.userName = ko.observable();
	self.userPassword = ko.observable();
	self.isVisible = ko.observable(makeLoginViewVisible);
	
	self.signup = function() {
		
		console.log( "Signing up "+self.userName() );
		
		authClient.createUser(self.userName(), self.userPassword(), function(error, user) {
		 	// do signup authentication checks here
			if (!error) {
				// User not signed up so .... sign her up
				console.log( "Signed up "+self.userName() );
		    	console.log('Firebase User Id: ' + user.id + ', and Email: ' + user.email);
				alert(user.email + " has successfully signed up. Please login.");
			
		  	} else {
				// User already signed up
				alert( error.message +" Please login. Thank you.");
			}
		});
		
	}
	
	self.goToLogin = function() {
		
		self.isVisible(false);
			
		
	}

}


