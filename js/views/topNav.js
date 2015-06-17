/**
 * Created by anuraggrover on 16/06/15.
 */

( function () {
    'use strict';

    define( [
        'underscore',
        'views/baseView',
        'text!templates/topNav.html'
    ], function ( _, BaseView, topNavTemplate ) {
        var TopNavView;

        topNavTemplate = _.template( topNavTemplate );

        TopNavView = BaseView.extend( {
            render: function () {
                var that = this;

                that.$el.html( topNavTemplate );

                return that;
            }
        } );

        return TopNavView;
    } );

} )();