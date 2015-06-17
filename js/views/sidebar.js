/**
 * Created by anuraggrover on 16/06/15.
 */

( function () {
    'use strict';

    define ( [
        'underscore',
        'collections/facets',
        'views/baseView',
        'views/miniCart',
        'views/facetView',
        'text!templates/sidebar.html'
    ], function ( _, FacetCollection, BaseView, MiniCartView, FacetView, sidebarTemplate ) {
        var SidebarView;

        sidebarTemplate = _.template( sidebarTemplate );

        SidebarView = BaseView.extend( {
            initialize: function ( options ) {
                var that = this;

                BaseView.prototype.initialize.call( that, options );
                that.facets = new FacetCollection();
            },

            render: function () {
                var that = this,
                    facets = that.facets,
                    miniCartView;

                that.$el.html( sidebarTemplate() );

                miniCartView = new MiniCartView();
                that.$( '.cart-info').html( miniCartView.render().el );

                facets.fetch().done( function ( ) {
                    facets.forEach( function ( facetModel ) {
                        var facetView = new FacetView( {
                            model: facetModel
                        } );

                        that.$( '.facets-ctr' ).append( facetView.render().el );
                    } );
                } );

                return that;
            }
        } );

        return SidebarView;
    } );

} )();