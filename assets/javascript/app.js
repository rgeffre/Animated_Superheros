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

      // Calling renderButtons which handles the processing of the array
      renderButtons();
    });

  //displayHero function displays the content retrieved from the AJAX request
  function displayHero() {
    //Creating the variable for the query
    var queryURL = 'http://api.giphy.com/v1/gifs/search?api_key=c3a6b1024d4240b6a7810e358792f08f&q=' +
        hero + '&limit=10&rating=g';

    // Creating the AJAX get request
    $.ajax({
      url: queryURL,
      method: 'GET'
      //callback response after the AJAX request comes back
    }).done(function(response) {
      console.log(response);
      //saving the image url property
      var imageURL = response.data.image_original_url;

      //creating a div to hold the images
      var heroDiv = $("<div class='heroes'>");

      //Creating a paragraph tag for the results rating
      var p = $("<p>").text('Rating: ' + rating);

      //creating an image tag
      var heroImage = $('<img>');

      //Setting the heroImage src attributes
      heroImage.attr("src", imageUrl);
      heroImage.attr("alt", "superheroes");

      //Appending the paragraph and images to the heroDiv
      heroDiv.append(p);
      heroDiv.append(heroImage);

      //Prepending the heroDiv to the #heroes-view div in the HTML
      $("#heroes-view").prepend(heroDiv);
    });
  }

    $(document).on("click", ".hero", renderButtons);

  // Calling renderButtons which handles the processing of the array
  renderButtons();










