Transitioner.setTransitions({
    'home->lists': 'right-to-left',
    'lists->home': 'left-to-right',

    'home->about': 'right-to-left',
    'about->home': 'left-to-right',

    'lists->about': 'right-to-left',
    'about->lists': 'left-to-right',

    'lists->ingredients': 'right-to-left',
    'ingredients->lists': 'left-to-right',

    'lists->list': 'right-to-left',
    'list->lists': 'left-to-right',

    'default': 'fade'
});