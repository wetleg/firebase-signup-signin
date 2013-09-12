var SignUpViewModel = function() {
	
	var firebaseRoot = new Firebase("https://flat-tasks.firebaseio.com"); 
	
	
	var authClient = new FirebaseSimpleLogin(firebaseRoot, function(error, user) {
	 	// do login authentication checks
	});
	
	
	var self = this;
	
	self.userName = ko.observable();
	self.userPassword = ko.observable();
	
	self.signup = function() {
		
		console.log( "Signing up "+self.userName() );
		
		authClient.createUser(self.userName(), self.userPassword(), function(error, user) {
		 	// do signup authentication checks here
			if (!error) {
				// User not signed up so .... sign her up
				console.log( "Signed up "+self.userName() );
		    	console.log('Firebase User Id: ' + user.id + ', and Email: ' + user.email);
			
		  	} else {
				// User already signed up
				alert( error.message +" Please login. Thank you.");
			}
		});
		
	}

}

ko.applyBindings(new SignUpViewModel(), document.getElementById("welcome") );