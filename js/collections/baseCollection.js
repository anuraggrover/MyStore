/**
 * Created by anuraggrover on 16/06/15.
 */

( function () {
    'use strict';

    define( [
        'jquery',
        'backbone'
    ], function ( $, Backbone ) {
        var BaseCollection;

        BaseCollection = Backbone.Collection.extend( {
            initialize: function ( options ) {
                var that = this,
                    deferred;

                deferred = that._deferred = $.Deferred();
                that.promise = deferred.promise();

                return Backbone.Collection.prototype.initialize.call( that, options );
            }
        } );

        return BaseCollection;
    } );

} )();