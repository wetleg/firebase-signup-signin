var ViewModels = {
    signupVM : new SignUpViewModel(true),
    loginVM : new LoginViewModel(false)
    
}


ko.applyBindings(ViewModels);