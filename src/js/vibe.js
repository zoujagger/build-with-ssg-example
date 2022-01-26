
// Bank some good vibe options
const vibes = [
    "... and you are awesome",
    "... have a wonderful day !",
    "... and you've got this",
    "... ans so is this puppy"
];

// choose a random good vibe
var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

// display a good vibe randomised
document.querySelector(".vibe").append(vibe);