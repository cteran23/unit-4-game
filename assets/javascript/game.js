var randomResult;
var lost = 0;
var win = 0;
var previous = 0;

var startAndReset = function () {
  $(".crystals").empty();

  var images = [
    'https://i.pinimg.com/originals/bd/4e/0c/bd4e0c1db2341cb53a73f001abbbcbe5.jpg',
    'https://media.glamour.com/photos/58fa47ebe2ef792952c30dca/1:1/w_1578,h_1578,c_limit/crystalriver.jpg',
    'https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/1/10/Arena_Crystal.png/revision/latest?cb=20150825214845',
    'https://images.unsplash.com/photo-1546608135-e5de34abc308?ixlib=rb-1.2.1&w=1000&q=80'
  ]

  randomResult = Math.floor(Math.random() * 101) + 19;
  $("#result").html("Random Result: " + randomResult);

  for (var i = 0; i < 4; i++) {
    var random = Math.floor(Math.random() * 12) + 1;

    var crystal = $("<div>");
    crystal.attr({
      class: "crystal",
      "result-random": random
    });

    crystal.css({
      "background-image":"url('" + images[i] + "')",
      "background-size":"cover"
    })

    $(".crystals").append(crystal);

  }

  $("#previous").html("Total Score: " + previous);

};



startAndReset();

$(document).on("click", ".crystal", function () {
  var num = parseInt($(this).attr("result-random"));
  previous += num;

  $("#previous").html("Total Score: " + previous);

  console.log(previous);

  if (previous > randomResult) {
    lost++;
    $("#lost").html("You Lost: " + lost);
    previous = 0;
    startAndReset();

  } else if (previous === randomResult) {
    win++;
    $("#win").html("You Win: " + win);
    previous = 0;
    startAndReset();
  }
});

// Psuedo Code

// We need to generate a Random Number on the screen.

// This Random Number needs to be in between 19-120.

// We need Four Crystals that act as buttons.

// Every Crystal is attached a random number between 1-12.

// Each time we click on a Crystal, it should be adding the
// curent Crystal value to the Crystals number value chosen // prior.

// Crystal Values are added until your score equals that
// of the Random Number.

// If it is greater than Random Result, we lose and loss
// is counted against us.

// If it is equal, we win and count it as a win.

// Every time we win or lose, a new random number is
// attached to each respective crystal.

// After each round a new Random Number is also Generated.
