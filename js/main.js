const form = document.querySelector("form");
const encryptButton = document.querySelector(".btn-encrypt");
const decryptButton = document.querySelector(".btn-decrypt");
const textarea = document.querySelector("textarea");
const copyButton = document.querySelector(".btn-copy");
const initialMessage = document.querySelector(".initial-message");
const messageFound = document.querySelector(".message-found");
const p = document.querySelector(".message-found p");

function validateText() {
  const text = textarea.value;
  const textIsValid = /^[a-z]{1,}$/.test(text);

  return textIsValid;
}

let words = [];

function encryptText() {
  const text = textarea.value;
  let encryptText = "";

  for (let i = 0; i < text.length; i++) {
    const letter = text[i];

    switch (letter) {
      case "e":
        encryptText += "enter";
        !words[i] ? words.push("enter") : null;
        break;
      case "i":
        encryptText += "imes";
        !words[i] ? words.push("imes") : null;
        break;
      case "a":
        encryptText += "ai";
        !words[i] ? words.push("ai") : null;
        break;
      case "o":
        encryptText += "ober";
        !words[i] ? words.push("ober") : null;
        break;
      case "u":
        encryptText += "ufat";
        !words[i] ? words.push("ufat") : null;
        break;
      default:
        encryptText += text[i];
        !words[i] ? words.push(text[i]) : null;
    }
  }

  return encryptText;
}

function decripyText() {
  let decripyText = "";

  for (let i = 0; i < words.length; i++) {
    switch (words[i]) {
      case "enter":
        words[i] = "a";
        break;
      case "imes":
        words[i] = "i";
        break;
      case "ai":
        words[i] = "a";
        break;
      case "ober":
        words[i] = "o";
        break;
      case "ufat":
        words[i] = "u";
        break;
      default:
        words[i] = words[i];
    }
  }

  decripyText = words.join("");

  return decripyText;
}

function showText(text) {
  p.textContent = text;
  textarea.value = "";
  textarea.focus();
}

function handleCryptography() {
  const textIsValid = validateText();

  if (!textIsValid) {
    return;
  }
 
  initialMessage.style.display = "none";
  messageFound.style.display = "flex";
  const text = encryptText();
  showText(text);
}

function handleDecryption() {
  const textIsValid = validateText();

  if (!textIsValid) {
    return;
  }

  const text = decripyText();
  showText(text);
}

function copyText() {
  const text = p.textContent;
  navigator.clipboard.writeText(text);
}

textarea.focus();

form.onsubmit = function(e) { e.preventDefault(); }
encryptButton.onclick = handleCryptography;
decryptButton.onclick = handleDecryption;
copyButton.onclick = copyText;
