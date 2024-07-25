var resultWrapper = document.querySelector(".spin-result-wrapper"),
  wheel = document.querySelector(".wheel-img");

function spin() {
  wheel.classList.contains("rotated") ||
  (wheel.classList.add("super-rotation"),
    setTimeout(function () {
      resultWrapper.style.display = "block";
    }, 8e3),
    setTimeout(function () {
      $(".spin-wrapper").slideUp(), $("#boxes").slideUp(), $(".order_block").slideDown(), start_timer();
    }, 1e4),
    wheel.classList.add("rotated"));
}

$("a[href^='#']").click(function () {
});


$('a').on('touchend, click', function (e) {
  e.preventDefault();
  if ($(window).width() < 760) {
    $("body,html").animate({scrollTop: $(".scroll-mob").offset().top - 10}, 600);
  } else {
    $("body,html").animate({scrollTop: $(".toscroll").offset().top - 10}, 600);
  }
})


var closePopup = document.querySelector(".close-popup");
$(".close-popup, .pop-up-button").click(function (e) {
  e.preventDefault(), $(".spin-result-wrapper").fadeOut();
  let t = $("#roulette");
  t || (t = $("#order_form"));
  let r = t.offset().top;
  $("body,html").animate({scrollTop: r}, 800);
});
var intr,
  time = 600;

function start_timer() {
  intr = setInterval(tick, 1e3);
}

function tick() {
  time -= 1;
  var e = Math.floor(time / 60),
    t = time - 60 * e;
  0 == e && 0 == t && clearInterval(intr), (t = t >= 10 ? t : "0" + t), $("#min").html("0" + e), $("#sec").html(t);
}

