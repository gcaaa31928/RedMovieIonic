angular.module('redmovie.controllers', [])

    .controller('DashCtrl', function ($scope, Movies) {
        var pageIndex = 1;
        $scope.movies = {};
        Movies.getPopularityMovies(pageIndex).then(
            function (results) {
                $scope.movies = results;
            }
        );

        $scope.getMoviesSize = function(movie) {
            if (movie.vote_average >=7)
                return 'large';
            else if(movie.vote_average >=5)
                return 'big';
            else if(movie.vote_average >= 3)
                return 'mid';
            else return 'small';
        };


        var $grid = $('.movies.content').masonry({
            itemSelector: '.movies.item',
            columnWidth: 160
        });
        $grid.on('click', '.movies.item', function () {
            // change size of item via class
            $(this).toggleClass('grid-item--gigante');
            // trigger layout
            $grid.masonry();
        });

    });