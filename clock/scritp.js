const box = document.getElementById("mainBox");

const numberBlocks = [
  // 0
  [1, 2, 3, 4, 6, 7, 9, 10, 12, 13, 14, 15],
  // 1
  [2, 3, 6, 9, 12, 15],
  // 2
  [1, 2, 3, 6, 9, 8, 7, 10, 13, 14, 15],
  // 3
  [1, 2, 3, 6, 7, 8, 9, 12, 13, 14, 15],
  //4
  [1, 4, 7, 8, 3, 6, 9, 12, 15],
  // 5
  [3, 2, 1, 4, 7, 8, 9, 12, 15, 14, 13],
  // 6
  [3, 2, 1, 4, 7, 10, 13, 14, 15, 12, 9, 8],
  // 7
  [1, 2, 3, 6, 9, 12, 15],
  // 8
  [1, 2, 3, 4, 6, 7, 8, 9, 10, 12, 13, 14, 15],
  // 9
  [3, 2, 1, 4, 7, 8, 9, 6, 12, 15],
];

function template(v, p) {
  return `<div id="${v}${p}" class="number">
    <div id="1" class="block hide"></div>
    <div id="2" class="block hide"></div>
    <div id="3" class="block hide"></div>
    <div id="4" class="block hide"></div>
    <div id="5" class="block hide"></div>
    <div id="6" class="block hide"></div>
    <div id="7" class="block hide"></div>
    <div id="8" class="block hide"></div>
    <div id="9" class="block hide"></div>
    <div id="10" class="block hide"></div>
    <div id="11" class="block hide"></div>
    <div id="12" class="block hide"></div>
    <div id="13" class="block hide"></div>
    <div id="14" class="block hide"></div>
    <div id="15" class="block hide"></div>
  </div>`;
}

function dots() {
  return `<div class="dots">
    <div id="1" class="block"></div>
    <div id="2" class="block"></div>
    <div id="3" class="block"></div>
    <div id="4" class="block"></div>
    <div id="5" class="block"></div>
  </div>`;
}

function getHour() {
  const date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  hours = (hours < 10 ? "0" + hours : hours).toString().split("");
  minutes = (minutes < 10 ? "0" + minutes : minutes).toString().split("");
  seconds = (seconds < 10 ? "0" + seconds : seconds).toString().split("");

  displayHour(hours, minutes, seconds);
}

function displayHour(h, m, s) {
  const times = [h, m, s];
  let value = "";

  times.forEach((t, index) => {
    if (index === 0) {
      value = "hours";
    } else if (index === 1) {
      value = "minutes";
    } else if (index === 2) {
      value = "seconds";
    }

    t.forEach((e, i) => {
      const number = [...document.getElementById(`${value}${i}`).children];

      number.forEach((b) => {
        if (!numberBlocks[e].includes(parseInt(b.id))) {
          b.classList.add("hide");
        } else {
          b.classList.remove("hide");
        }
      });
    });
  });
}

function init() {
  setInterval(getHour, 1000);
  box.insertAdjacentHTML("beforeend", template("hours", 0));
  box.insertAdjacentHTML("beforeend", template("hours", 1));
  box.insertAdjacentHTML("beforeend", dots());
  box.insertAdjacentHTML("beforeend", template("minutes", 0));
  box.insertAdjacentHTML("beforeend", template("minutes", 1));
  box.insertAdjacentHTML("beforeend", dots());
  box.insertAdjacentHTML("beforeend", template("seconds", 0));
  box.insertAdjacentHTML("beforeend", template("seconds", 1));
}

init();
