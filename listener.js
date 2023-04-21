document.body.addEventListener("keydown", (event) => {
  if (event.isComposing || event.keyCode === 229) {
    return;
  } else if(event.keyCode >= '37' && event.keyCode <= '40') {
	navigationHandler(event.keyCode - 37);
  }
});