(function(){
  var Jargo = {};
  window.Jargo = Jargo;

  //given the name of the template, it returns the compiled javascript of that template.
  Jargo.template = function(name) {
    return Mustache.compile($('#'+name+'-template').html());
  };

  //This is the entry point to our client side application
  Jargo.boot = function(container){

    // Todo : Use the input parameter #Movies container in here.
    // Get the json from the server
    $.getJSON("./polish.json", function(moviesDetails){

      container = $(container);
      var router = new Jargo.Router({el: container, movies: moviesDetails});
      Backbone.history.start();
    });
  };

  playAudio = function(src){
    // Prepends any additional path information
    src = '' + src;

    var media = new Media(src, success, error_error);

    media.play();
  };

  function success() {
    // ignore
  }

  function error_error(e) {
    alert('error playing ' + src);
    alert(e.message);
  }

})();