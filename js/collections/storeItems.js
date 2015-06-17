/**
 * Created by anuraggrover on 17/06/15.
 */

( function () {
    'use strict';

    define( [
        'collections/baseCollection'
    ], function ( BaseCollection ) {
        var StoreItemCollection,
            dummyItems = [ {
                image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1.jpg',
                label: 'fluted hem dress',
                desc: 'summer dress',
                price: '39$',
                sizes: [ 's', 'm', 'l', 'xl' ],
                colors: [ 'blue', 'red', 'white', 'green' ]
            }, {
                image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2.jpg',
                label: 'pleat printed dress',
                desc: 'summer dress',
                price: '39$',
                sizes: [ 's', 'm', 'l', 'xl' ],
                colors: [ 'blue', 'red', 'white', 'green' ]
            }, {
                image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/3.jpg',
                label: 'flowy shirt dress',
                desc: 'summer dress',
                price: '39$',
                sizes: [ 's', 'm', 'l', 'xl' ],
                colors: [ 'blue', 'red', 'white', 'green' ]
            } ];

        StoreItemCollection = BaseCollection.extend( {
            fetch: function () {
                var that = this;

                that.add( dummyItems );

                that._deferred.resolve();

                return that.promise;
            }
        } );

        return StoreItemCollection;
    } );

} )();