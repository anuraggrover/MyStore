/**
 * Created by anuraggrover on 17/06/15.
 */

(function () {
    'use strict';

    define( [
        'jquery',
        'underscore',
        'views/baseView',
        'text!templates/itemTemplate.html'
    ], function ( $, _, BaseView, itemTemplate ) {
        var ItemView,

            toggleGallery = function () {
                var that = this;

                that.$el.toggleClass( 'inverted' );

                if ( that.$( '.gallery-item.active').length === 0 ) {
                    that.$( '.gallery-item').first().addClass( 'active' );
                }
            },

            handleAction = function ( e ) {
                var that = this,
                    jTarget = $( e.currentTarget),
                    action = jTarget.attr( 'data-action' );

                switch ( action ) {
                    case 'add-to-cart':
                        break;

                    case 'toggle-gallery':
                        toggleGallery.call( that );
                        break;
                }
            };

        itemTemplate = _.template( itemTemplate );

        ItemView = BaseView.extend( {
            tagName: 'article',
            className: 'ms-item',

            events: {
                'click [data-action]': handleAction
            },

            render: function () {
                var that = this;

                that.$el.html( itemTemplate( {
                    item:       that.model.attributes,
                    galleryId: _.uniqueId( 'gallery-id-' )
                } ) );

                return that;
            }
        } );

        return ItemView;
    } );

})();