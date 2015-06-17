/**
 * Created by anuraggrover on 16/06/15.
 */

( function () {
    'use strict';

    define( [
        'underscore',
        'views/baseView',
        'text!templates/facet.html'
    ], function ( _, BaseView, facetTemplate ) {
        var FacetView;

        facetTemplate = _.template( facetTemplate );

        FacetView = BaseView.extend( {
            className: 'facet-item',

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