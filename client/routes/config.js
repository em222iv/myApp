AccountsTemplates.configureRoute('signIn', {
    name: 'login',
    path: '/login',
    template: 'login',
    layoutTemplate: 'layout',
    layoutRegions: {
        header: 'header',
        footer: 'footer'
    },
    contentRegion: 'main'
});
AccountsTemplates.configureRoute('signUp', {
    name: 'signup',
    path: '/signup',
    template: 'signup',
    layoutTemplate: 'layout',
    layoutRegions: {
        header: 'header',
        footer: 'footer'
    },
    contentRegion: 'main'
});