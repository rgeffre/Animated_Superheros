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



//creating a div to hold the images
var heroDiv = $("div class='heroes'>");

//Storing the rating data
var rating = response.Rating
