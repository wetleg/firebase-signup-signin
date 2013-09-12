var SignUpViewModel = function() {
	
	var firebaseRoot = new Firebase("https://flat-tasks.firebaseio.com"); 

	var authClient = new FirebaseSimpleLogin(firebaseRoot, function(error, user) {
	 	if (error) {
	    	// an error occurred while attempting login
	    	console.log(error);
			alert("User name or password is not correct. Please try again.");
	  	} else if (user) {
	    	// user authenticated with Firebase
	    	console.log('Logging In User ID: ' + user.id + ', Provider: ' + user.provider);  
	    	
	  	} else {
	    	// user is logged out
	    	console.log('User is logged out');
	  	}
	});
	
	
	var self = this;
	
	self.userName = ko.observable();
	self.userPassword = ko.observable();
	
	self.signup = function() {
		
		console.log( "Signing up "+self.userName() );
		
		authClient.createUser(self.userName(), self.userPassword(), function(error, user) {
		 	
			if (!error) {
				console.log( "Signed up "+self.userName() );
		    	console.log('Firebase User Id: ' + user.id + ', and Email: ' + user.email);
			
		  	} else {
				alert( error.message +" Please login. Thank you.");
			}
		});
		
	}

}

ko.applyBindings(new SignUpViewModel(), document.getElementById("welcome") );