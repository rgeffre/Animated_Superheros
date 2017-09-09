  // Creating initial array of Superheros
 var heroes = ['Superman', 'Batman', 'Wolverine'];

  // Function for displaying hero data
  function renderButtons() {

    // Deleting heroes before adding new ones
    // (this is necessary otherwise you will have repeat buttons)
    $("#hero-buttons").empty();

    // Looping through the array of heroes
    for (var i = 0; i < heroes.length; i++) {

      // Using jQuery and dynamicaly generating buttons for each hero in the array
      var a = $("<button>");
      // Adding a class of hero to our button
      a.addClass("hero");
      // Adding a data-attribute
      a.attr("data-name", heroes[i]);
      // Providing the initial button text
      a.text(heroes[i]);
      // Adding the button to the buttons-view div
      $("#hero-buttons").append(a);
    }
  }

  // This function handles events when the add-hero button is clicked
  $("#add-hero").on("click", function(event) {
    event.preventDefault();
    // This line grabs the input from the textbox
    var hero = $("#hero-input").val().trim();

    // Adding the hero from the textbox to our array
    heroes.push(hero);

    //creating the queryURL using the data stored in the hero variable
    var queryURL = 'http://api.giphy.com/v1/gifs/search?api_key=c3a6b1024d4240b6a7810e358792f08f&q=' +
        hero + '&limit=10&rating=g';

    // Creating the AJAX get request
    $.ajax({
      url: queryURL,
      method: 'GET'
      //callback response after the AJAX request comes back
    }).done(function(response) {

      console.log(response);

      var reqResults = response.data;

      // Calling renderButtons which handles the processing of the array
      renderButtons();
    });
  });
  // Calling renderButtons which handles the processing of the array
  renderButtons();










