$(() => {
  $("#gobble").on('submit', (event) => {
    event.preventDefault();
    const inputText = $("#turkey-input-text").val();

    const list = $("#turkeys li");
    list.each(function(index) {
      const currentLI = this;
      const theTurkey = $(currentLI).text();

      if (theTurkey === inputText) {
        $(currentLI).effect("puff", {}, 1000, () => {
          console.log("callback");
        });
      } else {
        // $("<li>")
        //   .text(inputText)
        //   .css({"color": "brown"})
        //   .appendTo(list);
      }
    });
  });
});


function handleSubmit(event) {
  event.preventDefault();
  console.log("😻");
}

$("#gobble").on('submit', handleSubmit);