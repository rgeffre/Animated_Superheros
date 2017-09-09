  // Creating initial array of Superheros
 var heroes = ['Superman', 'Batman', 'Wolverine'];

//displayHero function re-renders the HTML to display the appropriate content
function displayHero() {

  var heroes = $(this).attr('data-name');
  var queryURL = 'http://api.giphy.com/v1/gifs/search?api_key=c3a6b1024d4240b6a7810e358792f08f&q=' +
      heroGif + '&limit=10&rating=g';

  // Creating the AJAX get request
  $.ajax({
    url: queryURL,
    method: 'GET'
    //callback response after the AJAX request comes back
  }).done(function(response) {

    console.log(response);

    //creating a div to hold the
    var heroDiv = $("<div class='hero'>");

    // Storing the rating data
    var rating = response.Rated;

    // Creating an element to have the rating displayed
    var pOne = $("<p>").text("Rating: " + rating);

    // Displaying the rating
    heroDiv.append(pOne);
  });
}

// Function for displaying hero data
  function renderButtons() {

    // Deleting the movies prior to adding new movies
    // (this is necessary otherwise you will have repeat buttons)
    $("#hero-buttons").empty();

    // Looping through the array of movies
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

    // Calling renderButtons which handles the processing of the array
    renderButtons();
  });

  // Adding a click event listener to all elements with a class of "movie"
  $(document).on("click", ".hero", displayHero);

  // Calling the renderButtons function to display the intial buttons
  renderButtons();






