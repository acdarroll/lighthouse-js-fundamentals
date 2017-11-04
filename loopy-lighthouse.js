function loopyLighthouse() {
  for (var i = 0; i <= 100; i++) {
    var num = 100 + i;
    if (num % 12 === 0)
      console.log("LoopyLighthouse");
    else if (num % 3 === 0)
      console.log("Loopy");
    else if (num % 4 === 0)
      console.log("Lighthouse");
    else
      console.log(num);
  }
}

loopyLighthouse();