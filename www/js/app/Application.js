(function(){
  var Jargo = {};
  window.Jargo = Jargo;

  //given the name of the template, it returns the compiled javascript of that template.
  MoviesApp.template = function(name) {
    return Mustache.compile($('#'+name+'-template').html());
  };

  //This is the entry point to our client side application
  Jargo.boot = function(container){

    //Todo : Use the input parameter #Movies container in here.
  	//Get the json from the server
    $.getJSON("./polish.json", function(moviesDetails){

  		container = $(container);
	  	var router = new Jargo.Router({el: container, movies: moviesDetails});
    	Backbone.history.start();
    });
  }

})()