var SignUpViewModel = function() {

	var self = this;
	
	self.userName = ko.observable();
	self.userPassword = ko.observable();
	
	self.signup = function() {
		console.log( "signing up "+self.userName() );
		
	}

}

ko.applyBindings(new SignUpViewModel(), document.getElementById("welcome") );