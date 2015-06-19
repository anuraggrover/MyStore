/**
 * Created by anuraggrover on 19/06/15.
 */

( function () {
    'use strict';

    define( [
        'jquery',
        'underscore',
        'backbone',
        'views/baseView',
        'text!templates/cartItemTemplate.html'
    ], function ( $, _, Backbone, BaseView, cartItemTemplate ) {
        var CartItemView,

            handleAction = function ( e ) {
                var that = this,
                    action = $( e.currentTarget ).attr( 'data-action' );

                switch( action ) {
                    case 'remove-item':
                        Backbone.Notifications.trigger( 'item:removed', that.model );
                        that.remove();

                        break;
                }
            };

        cartItemTemplate = _.template( cartItemTemplate );

        CartItemView = BaseView.extend( {
            className: 'cart-item clearfix',

            events: {
                'click [data-action]': handleAction
            },

            render: function () {
                var that = this;

                that.$el.html( cartItemTemplate( that.model.attributes ) );

                return that;
            }
        } );

        return CartItemView;
    } );

} )();