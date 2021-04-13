let slide = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".indicator");
let before = document.querySelector(".before");
let id = 0;
let last = slide.length - 1;
let after = id + 1;
function next() {
  if (id == slide.length - 1) {
    id = 0;
    last = slide.length - 1;
    after = 1;
  } else {
    id++;
    after = id + 1;
    last = id - 1;
  }
  let second = (slide[id].style.display = "block");
  let prev = (slide[last].style.display = "none");
  dots[id].style.background = "dimgray";
  dots[last].style.background = "darkgray";
  displayPrev(slide, last);
  displayNext(slide, after);
}
function prev() {
  if (id != 0) {
    id--;
    after = id - 1;
    last = id + 1;
  } else {
    id = slide.length - 1;
    after = 4;
    last = 0;
  }
  let next = (slide[id].style.display = "block");
  let prev = (slide[last].style.display = "none");
  dots[id].style.background = "dimgray";
  dots[last].style.background = "darkgray";
  displayPrev(slide, after);
  displayNext(slide, last);
}
function displayPrev(slide, id) {
  let a = (id == -1) ? 5 : id;
  document.querySelector(".before")
    .innerHTML = slide[a].innerHTML;
}
function displayNext(slide, id) {
  let a = (id == slide.length) ? 0 : id;
  document.querySelector(".after")
    .innerHTML = slide[a].innerHTML;
}
function makeElement(slide) {
  var before = document.createElement("div");
  before.innerHTML = slide[slide.length - 1].innerHTML;
  before.setAttribute("class", "before");
  var after = document.createElement("div");
  after.innerHTML = slide[1].innerHTML;
  after.setAttribute("class", "after");
  var parent = document.querySelector(".slider");
  parent.append(before, after);
}
makeElement(slide);
console.log(slide);