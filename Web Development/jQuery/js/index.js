const h1 = $("h1");
const buttons = $("button");
const a = $("a");
const input = $("input");
const document1 = $(document);

// h1.addClass("big-title margin-50");

// h1.text("Bye");

// a.attr("href", "https://yahoo.com/");

// console.log(h1.attr("class"));

// buttons.click(function (e) {
//   h1.css("color", "red");
//   setTimeout(function () {
//     h1.css("color", "yellow");
//   }, 100);
// });

// input.keypress(function (e) {
//   console.log(e.key);
// });

// document1.keypress((e) => {
//   h1.text(e.key);
// });

buttons.on("click", (e) => {
  h1.slideUp().slideDown().animate({ opacity: 0.5 });
});
