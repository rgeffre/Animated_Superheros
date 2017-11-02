// Creating initial array of Superheros
var heroes = ['Superman', 'Batman', 'Wolverine'];

//displayHero function displays the content retrieved from the AJAX request
function displayHero() {
  //Creating the variable for the query
  var hero = $(this).attr("data-name");
  var queryURL = "http://cors.io/?u=https://api.giphy.com/v1/gifs/search?api_key=c3a6b1024d4240b6a7810e358792f08f&q=" +
      hero + "&limit=10&rating=G";

  // Creating the AJAX get request
  $.ajax({
    url: queryURL,
    method: 'GET'
    //callback response after the AJAX request comes back
  }).done(function(response) {
    console.log(queryURL);

    //saving the image url property
    var results = response.data;

    //Looping through each result item
    for (var i = 0; i < results.length; i++) {
      //creating a div to hold the images
      var heroDiv = $("<div class='heroes'>");

      //Creating a paragraph tag for the results rating
      var p = $("<p>").text('Rating: ' + results[i].rating);

      //creating an image tag
      var heroImage = $('<img>');

      //Setting the heroImage src attributes
      heroImage.attr("src", results[i].images.fixed_height_still.url);
      heroImage.attr("still", results[i].images.fixed_height_still.url);
      heroImage.attr("gif", results[i].images.fixed_height.url);
      heroImage.attr("animated", "false");
      heroImage.attr("alt", "superheroes");
      heroImage.attr("id", "animate");

      //Appending the paragraph and images to the heroDiv
      heroDiv.append(p);
      heroDiv.append(heroImage);

      //Prepending the heroDiv to the #heroes-view div in the HTML
      $("#heroes-view").prepend(heroDiv);

    }
  });
}

$(document).on("click", "#animate", function() {
  if ($(this).attr("animated") === "false") {
    $(this).attr("src", $(this).attr("gif"));
    $(this).attr("animated", "true");
  } else {
    $(this).attr("src", $(this).attr("still"));
    $(this).attr("animated", "false");
  }
});

// Function for displaying hero data
  function renderButtons() {

    // Deleting heroes before adding new ones
    // (this is necessary otherwise you will have repeat buttons)
    $("#hero-buttons").empty();

    // Looping through the array of heroes
    for (var i = 0; i < heroes.length; i++) {

      // Using jQuery and dynamically generating buttons for each hero in the array
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
//Displays images when the Superheroes button is clicked
$(document).on("click", ".hero", displayHero);

// Calling renderButtons which handles the processing of the array
renderButtons();









