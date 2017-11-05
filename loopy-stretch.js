function loopyLighthouse(range, multiples, words) {
  if (range.length != 2 || multiples.length != 2 || words.length != 2)
    console.log("Inputs need to be arrays with 2 values");
  else if (typeof(range[0]) != "number" || typeof(range[1]) != "number" || typeof(multiples[0]) != "number" || typeof(multiples[1]) != "number")
    console.log("Range and multiples must be numbers");
  else if (range[1] < range[0])
    console.log("First range number must be lower than the second");
  else {
    for (var i = range[0]; i <= range[1]; i++) {
      if (i % (multiples[0] * multiples[1]) === 0)
        console.log(words[0]+words[1]);
      else if (i % multiples[0] === 0)
        console.log(words[0]);
      else if (i % multiples[1] === 0)
        console.log(words[1]);
      else
        console.log(i);
    }
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
