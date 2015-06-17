/**
 * Created by anuraggrover on 17/06/15.
 */

(function () {
    'use strict';

    define( [
        'underscore',
        'views/baseView',
        'text!templates/itemTemplate.html'
    ], function ( _, BaseView, itemTemplate ) {
        var ItemView;

        itemTemplate = _.template( itemTemplate );

        ItemView = BaseView.extend( {
            tagName: 'article',
            className: 'ms-item',

            render: function () {
                var that = this;

                that.$el.html( itemTemplate( that.model.attributes ) );

                return that;
            }
        } );

        return ItemView;
    } );

})();