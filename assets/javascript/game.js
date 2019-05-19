var randomResult;
var lost = 0;
var win = 0;
var previous = 0;

var startReset = function() {

  $(".crystals").empty();

  randomResult = Math.floor(Math.random() * 101) + 19;

  $("#result").html("Random Result: " + randomResult);

  for (var i = 0; i < 4; i++) {
    var random = Math.floor(Math.random() * 12) + 1;

    var crystal = $("<div>");
    crystal.attr({
      class: "crystal",
      "result-random": random
    });

    crystal.html(random);

    $(".crystals").append(crystal);
  }
};
startReset();

$(".crystal").on("click", function() {
  var num = parseInt($(this).attr("result-random"));
  previous += num;

  console.log(previous);

  if (previous > randomResult) {
    lost--;
    $("#lost").html(lost);

    startReset();
  } else if (previous === randomResult) {
    win++;
    $("#win").html(win);

    startReset();
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
