Template.signup.events({
    'click #create-account': function (event) {
        var data, validationErrors;
        event.preventDefault();

        var user = {
            username: document.getElementById('username').value,
            email: document.getElementById('email').value,
            password:document.getElementById('password').value,
        }

        console.log(user);
        //validate
        var validationErrors = false;
        if (validationErrors) {
            //Show the user the validation errors
        } else {
            return Meteor.call('createUserWithRole', user, 'standard', function (err, userId) {
                if (!err) {
                    console.log('succs');

                    //User created!!
                } else {
                    console.log('errs');
                    //Insertion Error
                }
            });
        }
    }
});