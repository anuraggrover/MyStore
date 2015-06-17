/**
 * Created by anuraggrover on 16/06/15.
 */

(function () {
    'use strict';

    define ( [
        'collections/baseCollection'
    ], function ( BaseCollection ) {
        var Facets,
            categoryFacet = {
                label: 'categories',
                key: 'CATEGORY',
                values: [
                    {
                        key: 'NEW_ARRIVALS',
                        label: 'new arrivals'
                    }, {
                        key: 'NEW_ARRIVALS',
                        label: 'new arrivals'
                    }, {
                        key: 'NEW_ARRIVALS',
                        label: 'new arrivals'
                    }, {
                        key: 'NEW_ARRIVALS',
                        label: 'new arrivals'
                    }, {
                        key: 'NEW_ARRIVALS',
                        label: 'new arrivals'
                    }, {
                        key: 'NEW_ARRIVALS',
                        label: 'new arrivals'
                    }, {
                        key: 'NEW_ARRIVALS',
                        label: 'new arrivals'
                    }
                ]
            },

            dummyFacets = [ categoryFacet ];

        Facets = BaseCollection.extend( {
            fetch: function () {
                var that = this;

                that.add( dummyFacets );

                that._deferred.resolve();

                return that.promise;
            }
        } );

        return Facets;
    } );

})();