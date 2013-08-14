//Todo - add a logic here to see if the MoviesApp is defined before doing this.
Jargo.MovieDetailView = Backbone.View.extend({
  template: Jargo.template("MovieDetails"),

  initialize : function(options){
    this.movies = options.movies;
    this.currentMovieName = options.movieName;
    this.currentMovie = this.getCurrentMovieObject(this.movies,this.currentMovieName);
  },

  render : function(){

    // console.log("I am going to show you this movie - "+this.currentMovieName);
    var movieDetailsPage = $(this.template(this));
    return movieDetailsPage;
  },

  //Define variables for the template
  movieName: function(){
    return this.currentMovie.english;
  },

  moviePicUrl: function(){
    return this.currentMovie.audioUrl;
  },

  trailerUrl: function(){
    return this.currentMovie.polish;
  },

  movieDetailPageId: function(){
    return "MovieDetailPageId";
  },

  //iterates through all movies and sets the current movie Object
  //Todo - What happens if you dont find the movie
  getCurrentMovieObject: function(movies, currentMovieName){
    var currentMovie;
    $.each(movies, function(i, movie){
      if(movie.english == currentMovieName){
        currentMovie = movie;
        return false;
      }
    });
    return currentMovie;
  }
});
