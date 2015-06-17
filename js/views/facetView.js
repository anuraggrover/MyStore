/**
 * Created by anuraggrover on 16/06/15.
 */

( function () {
    'use strict';

    define( [
        'jquery',
        'underscore',
        'views/baseView',
        'text!templates/facet.html'
    ], function ( $, _, BaseView, facetTemplate ) {
        var FacetView,

            handleCheckboxClick = function ( e ) {
                var that = this,
                    jTarget = $( e.currentTarget );

                jTarget.toggleClass( 'checked' );
            };

        facetTemplate = _.template( facetTemplate );

        FacetView = BaseView.extend( {
            className: 'facet-item',

            events: {
                'click .cb-ctr': handleCheckboxClick
            },

            render: function () {
                var that = this;

                that.$el.html( facetTemplate( {
                    facet: that.model.attributes
                } ) );

                return that;
            }
        } );

        return FacetView;
    } );

} )();