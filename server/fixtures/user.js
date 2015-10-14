Meteor.methods({
    'createUserWithRole': function(user, role) {
        var userId;

        Meteor.call('createUserNoRole', user, function(err, result) {
            if (err) {
                return err;
            }
            Roles.addUsersToRoles(result, role);
            return userId = result;
        });
        return userId;
    },
    'createUserNoRole': function(user) {
        //Do server side validation
        return Accounts.createUser({
            username: user.username,
            email: user.email,
            password: user.password,
        });
    }
});