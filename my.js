function randvalue() {
  return Math.floor(Math.random() * 255);
}

for (let i = 1; i <= 15; i++) {
  if (
    i == 1 ||
    i == 2 ||
    i == 3 ||
    i == 4 ||
    i == 9 ||
    i == 11 ||
    i == 12 ||
    i == 13
  ) {
    setTimeout(function k() {
      setInterval(function set() {
        document.documentElement.style.setProperty(
          "--color" + i + "",
          "rgb(" + randvalue() + "," + randvalue() + "," + randvalue() + ")"
        );
      }, 4000);
    }, 2000);
  } else {
    setInterval(function set() {
      document.documentElement.style.setProperty(
        "--color" + i + "",
        "rgb(" + randvalue() + "," + randvalue() + "," + randvalue() + ")"
      );
    }, 4000);
  }
}
