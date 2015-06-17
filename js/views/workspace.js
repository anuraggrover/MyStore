/**
 * Created by anuraggrover on 16/06/15.
 */

( function () {
    'use strict';

    define ( [
        'collections/storeItems',
        'views/baseView',
        'views/itemView'
    ], function ( StoreItemCollection, BaseView, ItemView ) {
        var WorkspaceView;

        WorkspaceView = BaseView.extend( {
            initialize: function ( options ) {
                var that = this;

                BaseView.prototype.initialize.call( that, options );
                that.storeItems = new StoreItemCollection();
            },

            render: function () {
                var that = this,
                    storeItems = that.storeItems,
                    itemViewEls = [];

                storeItems.fetch().done( function () {
                    storeItems.forEach( function ( storeItemModel ) {
                        var itemView = new ItemView( {
                            model: storeItemModel
                        } );

                        itemViewEls.push( itemView.render().el );
                    } );
                } );

                that.$( '.item-views-ctr' ).html( itemViewEls );

                return that;
            }
        } );

        return WorkspaceView;
    } );

} )();