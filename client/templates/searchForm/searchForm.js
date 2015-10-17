Template.searchForm.events({
    "click .addItem": function (event) {
        // Prevent default browser form submit
        event.preventDefault();

        var method = $("#search").attr("class");
        if($("#search").attr("class")  == "insertList"){
            Meteor.call("insertList", $("#search").val());
        } else if(method == "insertIngredient"){
            Meteor.call("insertIngredient", $("#search").val());
        }

        $("#search").val('');
        $('#allLists').show();
    }, /**
     * Created by erikmagnusson on 2015-10-17.
     */
    'input #search': function (event) {
        if(this._id,event.target.value.length > 0) {
            $('#allLists').hide();
        }
        else{
            $('#allLists').show();
        }
    },
});