angular.module('redmovie.controllers', [])

.controller('DashCtrl', function($scope) {
    var $grid = $('.test').masonry({
        itemSelector: '.grid-item',
        columnWidth: 160
    });
    $grid.on( 'click', '.grid-item', function() {
        // change size of item via class
        $( this ).toggleClass('grid-item--gigante');
        // trigger layout
        $grid.masonry();
    });

});