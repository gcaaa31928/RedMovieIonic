angular.module('redmovie.services', [])

    .factory('Movies', function ($http, $q) {
        var factory = {};
        factory.apiKey = "62d7ef004fb9942c77a27bdcbb08af39";
        factory.populariyUrl = "https://api.themoviedb.org/3/discover/movie?api_key="
            + factory.apiKey
            + "&language=zh-TW&sort_by=popularity.desc&include_adult=false&include_video=true";
        factory.imageUrl = "https://image.tmdb.org/t/p/w500";
        factory.movies = {};

        factory.handleMovies = function (results) {
            angular.forEach(results, function (result) {
                result.posterUrl = factory.imageUrl + result.poster_path;
            }.bind(this));
        };

        factory.getPopularityMovies = function (pageIndex) {
            return $q(function (resolve, reject) {
                var url = this.populariyUrl + "&page=" + pageIndex;
                $http.get(url).then(function (response) {
                    response = response.data;
                    var results = response.results;
                    console.log(results);
                    factory.handleMovies(results);
                    resolve(results);
                }, function (response) {
                });
            }.bind(this));
        };


        return factory;
    });