/**
 * Created by anuraggrover on 15/06/15.
 */

( function () {
    require( [ 'config' ], function () {
        require( [ 'bootstrap' ], function () {
            require( [
                'models/cartModel',
                'views/topNav',
                'views/sidebar',
                'views/workspace'
            ], function ( CartModel, TopNavView, SidebarView, WorkspaceView ) {
                var cartModel = new CartModel();

                ( new TopNavView( {
                    el: '#ms-top-nav'
                } ) ).render();

                ( new SidebarView( {
                    el: '#ms-sidebar',
                    cartModel: cartModel
                } ) ).render();

                ( new WorkspaceView( {
                    el: '#ms-workspace',
                    cartModel: cartModel
                } ) ).render();
            } );
        } );
    } );
} )();