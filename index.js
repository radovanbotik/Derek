const slider = document.querySelector(".image-slider");
const faces = [...document.querySelectorAll(".image-slider img")];

const expressions = Array.from(slider.children);
expressions.forEach((expr, index) => {
  const height =
    expr.getBoundingClientRect().bottom - expr.getBoundingClientRect().top;
  expr.style.top = `${height * index}px`;
});

let counter = 0;

let interval = setInterval(() => {
  counter++;
  if (counter === expressions.length) {
    counter = 0;
    expressions.forEach(exp => {
      exp.style.transform = `translateY(0px)`;
    });
    clearInterval(interval);
    document.body.removeChild(document.querySelector(".intro"));
  }

  expressions[counter].style.transform = `translateY(-${250 * counter}px)`;
}, 1500);
