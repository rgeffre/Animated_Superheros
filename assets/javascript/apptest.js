// creates an array based on comic book and movie Superheros and saves it to an array called topics
var topics = ['Superman', 'Batman', 'Wolverine'];

//Create event handler to capture the data when the submit button is clicked
$('#add-hero').on('click', function (event) {
  event.preventDefault();
//capture input from form submission
  var newHero = $('#superhero-input').val().trim();
  console.log(newHero);// display data

//adds new content to array
  topics.push(newHero);
  console.log(topics);//confirm data added to array.

//loop through the array and generate buttons for each object
function displayButtons() {
  for (var i = 0; i < topics.length; i++) {

    //dynamically create buttons for each item in the array
    var newBtn = $('button');
    //adding a class to the new buttons
    newBtn.addClass('hero');
    //adding a data-attribute
    newBtn.attr('data-name', topics[i]);
    //create the text label for each button
    newBtn.text(topics[i]);
    //adding the button to the hero-buttons div
    $('#hero-buttons').append(newBtn);
  });






//Storing the rating data
var rating = response.Rating


$(".gif").on("click", function() {
  // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
  var state = $(this).attr("data-state");
  // If the clicked image's state is still, update its src attribute to what its data-animate value is.
  // Then, set the image's data-state to animate
  // Else set src to the data-still value
  if (state === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  } else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }
});