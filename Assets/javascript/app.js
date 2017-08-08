  // creates an array based on comic book and movie Superheros and saves it to an array called topics
 var topics = ['Superman', 'Batman', 'Wolverine']

 // Function to display the buttons
 function displayButtons () {
  // Deleting button contents before adding new buttons to avoid duplicates
   $('hero-buttons').empty()
  // looping through array
   for (var i = 0; i < topics.length; i++) {
    // Dynamically generating buttons for each topic in the array
     var a = $('<button>')
    // adding a class to the buttons
     a.addClass('hero')
    // adding a data-attribute
     a.attr('data-name', topics[i])
    // creating the text label for each button
     a.text(topics[i])
    // Adding the button to the hero-buttons div
     $('#hero-buttons').append(a)
   }
 }
// Adding function to handle events when the submit button is clicked
 $('#add-hero').on('click', function (event) {
   event.preventDefault()
  // Captures the input from the textbox
   var newHero = $('#superhero-input').val().trim()
   console.log(newHero) // testing code, to be removed when completed
  // Adds new topic content to the array
   topics.push(newHero)
   console.log(topics) // testing code, to be removed once completed
 })
 displayButtons()
 // Create event listener for the hero-buttons
 $('.hero').on('click', function () {
   var heroGif = $(this).attr('data-name')
  // Storing the giphy API for the superhero images

   var queryURL = 'http://api.giphy.com/v1/gifs/search?api_key=c3a6b1024d4240b6a7810e358792f08f&q=' + heroGif + '&limit=10&rating=g'
  // Performing the AJAX GET request
   $.ajax({
     url: queryURL,
     method: 'GET'
   })

  // Callback response after the AJAX request comes back
  .done(function (response) {
    console.log(response)
    var imageUrl = response.data.image_original_url
    var heroImage = $('<img>')
    heroImage.attr('src', imageUrl)
    heroImage.attr('alt', 'superhero image')
    $('#superheros').append(heroImage)
  })
 })
