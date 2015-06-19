/**
 * Created by anuraggrover on 16/06/15.
 */

( function () {
    'use strict';

    define ( [
        'underscore',
        'backbone',
        'collections/cartItems',
        'views/baseView',
        'views/cartItemView',
        'text!templates/miniCart.html'
    ], function ( _, Backbone, CartItemCollection, BaseView, CartItemView, miniCartTemplate ) {
        var MiniCartView,

            addCartItem = function ( model ) {
                var that = this,
                    cartItemView = new CartItemView( {
                        model: model
                    } );

                that.$( '.cart-items' ).append( cartItemView.render().el );
                that.$( '.cart-items-ctr' ).removeClass( 'empty' );
            },

            removeCartItem = function () {
                var that = this;

                that.$( '.cart-items-ctr' ).toggleClass( 'empty', that.cartItems.isEmpty() );
            };

        miniCartTemplate = _.template( miniCartTemplate );

        MiniCartView = BaseView.extend( {
            initialize: function ( options ) {
                var that = this;

                BaseView.prototype.initialize.call( that, options );

                that.cartItems = new CartItemCollection();

                that.listenTo( Backbone.Notifications, 'item:added', function ( model ) {
                    that.cartItems.add( model );
                } );

                that.listenTo( Backbone.Notifications, 'item:removed', function ( model ) {
                    that.cartItems.remove( model );
                } );

                that.listenTo( that.cartItems, 'add', addCartItem );
                that.listenTo( that.cartItems, 'remove', removeCartItem );
            },
            render: function () {
                var that = this;

                that.$el.html( miniCartTemplate() );

                return that;
            }
        } );

        return MiniCartView;
    } );

} )();