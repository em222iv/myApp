Template.header.rendered = function() {
    $( '#left-menu').click(function() {
        $( '#left-menu')
            .sidebar('toggle')
        ;
    });
};
