const body = document.body;
const btn1 = document.getElementById("btn1");
const btn2 = document.querySelector(".btn2");

const defaultText = "Klik Saya 1";
btn1.textContent = defaultText;

btn1.style.border = "none";
btn1.style.padding = "8px";
btn1.style.fontSize = "24px";
btn1.style.background = "tomato";

function clickButton() {
  btn1.style.background = "aqua";
  const newText = document.createElement("p");
  newText.textContent = "HALO BUNG! APA KABAR?";
  body.append(newText);
}

function ubahText() {
  btn1.textContent = "wkwkwkwk";
}

function oriText() {
  btn1.textContent = defaultText;
}

// Tugas!
// Button ke-2
const defaultText2 = "Klik Saya 2";
btn2.textContent = defaultText2;

btn2.style.display = "block";
btn2.style.background = "salmon";
btn2.style.padding = "7px 14px";
btn2.style.fontSize = "1.3rem";
btn2.style.border = "none";
btn2.style.borderRadius = "6px";

function cetakText() {
  const membuat = document.createElement("h3");
  membuat.textContent = "Alfin Budiyanto";
  body.append(membuat);
}

function ubahWarnaText() {
  const copy = document.createElement("h3");
  copy.textContent = "Alfin Budiyanto";
  copy.style.color = "salmon";
  body.append(copy);
}
