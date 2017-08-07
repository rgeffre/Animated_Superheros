// Declare required variables

// creates an array based on comic book and movie Superheros and saves it to an array called topics
var topics = ['Superman', 'Batman', 'Wolverine']

// Function to display the buttons
function displayButtons () {
// Deleting button contents before adding new buttons to avoid duplicates
  $('hero-buttons').empty()
  for (var i = 0; i < topics.length; i++) {
    var a = $('<button>')
    a.text(topics[i])
    $('#hero-buttons').append(a)
  }
}
$('#add-hero').on('click', function (event) {
  	event.preventDefault()
// capture the input from the textbox
  	var newHero = $('#superhero-input').val().trim()
  	console.log(newHero)
// add new content to the array
  	topics.push(newHero)
  	console.log(topics)
})

displayButtons()
