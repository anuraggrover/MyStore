/**
 * Created by anuraggrover on 16/06/15.
 */

( function () {
    'use strict';

    define ( [
        'underscore',
        'views/baseView',
        'text!templates/miniCart.html'
    ], function ( _, BaseView, miniCartTemplate ) {
        var MiniCartView;

        miniCartTemplate = _.template( miniCartTemplate );

        MiniCartView = BaseView.extend( {
            render: function () {
                var that = this;

                that.$el.html( miniCartTemplate() );

                return that;
            }
        } );

        return MiniCartView;
    } );

} )();