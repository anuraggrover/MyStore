/**
 * Created by anuraggrover on 16/06/15.
 */

( function () {
    'use strict';

    define( [
        'underscore',
        'backbone',
        'jquery'
    ], function ( _, Backbone, $ ) {
        var BaseView;

        BaseView = Backbone.View.extend( {
            initialize: function ( options ) {
                var that = this;

                _.extend( that, options );

                return Backbone.View.prototype.initialize.call( that, options );
            },

            render: $.noop
        } );

        return BaseView;
    } );

} )();