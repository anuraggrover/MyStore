/**
 * Created by anuraggrover on 16/06/15.
 */

requirejs.config( {
    paths: {
        'underscore':   '../libs/js/lodash',
        'jquery':   '../libs/js/jquery-2.1.4',
        'bootstrap': '../libs/js/bootstrap',
        'backbone':  '../libs/js/backbone',
        'models':    'models',
        'views':     'views',
        'text':      '../libs/js/require/text',
        'templates': '../templates'
    },

    shim: {
        'backbone': {
            deps: [ 'underscore', 'jquery' ]
        },

        'bootstrap': {
            deps: [ 'jquery' ]
        }
    }
} );