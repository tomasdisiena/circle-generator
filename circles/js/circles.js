//--------- VARIABLES AND FUNCTIONS DECLARATION --------//

const n = prompt("How many circles to create?");
const container = document.querySelector(".circles-container");
const select = document.querySelector(".form-select");
const btnReset = document.querySelector(".btn-reset");
const checkbox = document.querySelector("#flexCheckDefault");
const lastCircle = document.createElement("div");
const circles = {};

function changeColors(e) {
    if (checkbox.checked) {
        this.style.backgroundColor = select.options[select.selectedIndex].value;
    } else {
        this.style.backgroundColor = select.options[select.selectedIndex].value;
        e.stopPropagation();
    }
}

function resetColors() {
    lastCircle.style.backgroundColor = "white";
    for (let i = 2; i <= n; i++) {
        circles["newCircle" + i].style.backgroundColor = "white";
    }
}

//-------------------------------------------------------//

//-- ASIGN STYLES AND APPEND THE MOST EXTERNAL CIRCLE ---//

lastCircle.classList.add('circle');
lastCircle.style.width = n * 50 + "px";
lastCircle.style.height = n * 50 + "px";
container.append(lastCircle);

//--------------------------------------------------------//

//----------------- GENERATE N CIRCLES -------------------//

for (let i = 2; i <= n; i++) {
    circles['newCircle' + i] = document.createElement("div");
    circles['newCircle' + i].classList.add('circle');
    circles['newCircle' + i].style.width = (n - i + 1) * 50 + "px";
    circles['newCircle' + i].style.height = (n - i + 1) * 50 + "px";
}

//--------------------------------------------------------//

//---------------- APPEND GENERATED CIRCLES --------------//

if (n > 1) {
    lastCircle.append(circles["newCircle2"]);
}

for (let i = 2; i < n; i++) {
    circles["newCircle" + i].append(circles["newCircle" + (i + 1)]);
}

// -------------- BUTTON FUNCTIONALITY ------------------//

lastCircle.addEventListener("click", changeColors);
for (let i = 2; i <= n; i++) {
    circles["newCircle" + i].addEventListener("click", changeColors);
}
btnReset.addEventListener("click", resetColors);

// ------------------------------------------------------//
