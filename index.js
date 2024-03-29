let pagerDisplay = document.getElementById("pager-display");
let phoneDisplay = document.getElementById("phone-display");
const resetBtn = document.getElementById("reset-btn");
const sendBtn = document.getElementById("send-btn");
sendBtn.disabled = true;
let output = "";
const pagerSound = new Audio("/assets/pager.wav");

function keyPress(key) {
  sendBtn.disabled = false;
  if (output.length < 12) {
    output += key;
    phoneDisplay.textContent = output;
  }
}

function resetDisplay() {
  phoneDisplay.textContent = "";
  sendBtn.disabled = true;
  output = "";
}

function sendDisplay() {
  sendBtn.disabled;
}

function sendDisplay() {
  setTimeout(function () {
    pagerDisplay.textContent = output;
    output = "";
    phoneDisplay.textContent = "";
    pagerSound.play();
  }, 1500);
  sendBtn.disabled = true;
}
