onEvent("button1", "click", function( ) {
  setProperty("button1", "background-color", "#00ff03");
  setTimeout(function() {
    setScreen("screen2");
  }, 1000);
});
onEvent("button2", "click", function( ) {
  open("https://www.google.com/");
});
