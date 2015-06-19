/**
 * Created by anuraggrover on 19/06/15.
 */

( function () {
    'use strict';

    define( [
        'underscore',
        'backbone'
    ], function ( _, Backbone ) {
        Backbone.Notifications = {};

        _.extend( Backbone.Notifications, Backbone.Events );
    } );

} )();