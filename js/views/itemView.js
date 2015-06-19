/**
 * Created by anuraggrover on 17/06/15.
 */

(function () {
    'use strict';

    define( [
        'jquery',
        'underscore',
        'views/baseView',
        'text!templates/itemTemplate.html',
        'text!templates/addingToCartAnimation.html'
    ], function ( $, _, BaseView, itemTemplate, addingToCartStyles ) {
        var ItemView,

            toggleGallery = function () {
                var that = this;

                that.$el.toggleClass( 'inverted' );

                if ( that.$( '.gallery-item.active').length === 0 ) {
                    that.$( '.gallery-item').first().addClass( 'active' );
                }
            },

            addToCart = function () {
                var that = this,
                    model = that.model,
                    image = model.get( 'images' )[0],
                    clonedImg, imagePosition, jStyle;

                imagePosition = that.$el.offset();
                jStyle = $( '<style></style>').html( addingToCartStyles( imagePosition )).appendTo( document.body );

                clonedImg = $( '<img class="cloned-img"/> ')
                    .attr( 'src', image)
                    .appendTo(
                        $( '#cloned-img-ctr').css( imagePosition).addClass( 'adding-to-cart ').on( 'animationEnd webkitAnimationEnd MSAnimationEnd', function () {
                            clonedImg.remove();
                            jStyle.remove();
                        } )
                    );
            },

            handleAction = function ( e ) {
                var that = this,
                    jTarget = $( e.currentTarget),
                    action = jTarget.attr( 'data-action' );

                switch ( action ) {
                    case 'add-to-cart':
                        addToCart.call( that );
                        break;

                    case 'toggle-gallery':
                        toggleGallery.call( that );
                        break;
                }
            };

        itemTemplate = _.template( itemTemplate );
        addingToCartStyles = _.template( addingToCartStyles );

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