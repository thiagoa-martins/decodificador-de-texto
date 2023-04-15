const form = document.querySelector("form");
const encryptButton = document.querySelector(".btn-encrypt");
const decryptButton = document.querySelector(".btn-decrypt");
const textarea = document.querySelector("textarea");
const p = document.querySelector("p");
const copyButton = document.querySelector(".btn-copy");

function jumpLine() {
  document.write("<br/><br/>");
}

function show(phrase) {
  document.write(phrase);
  jumpLine();
}

const words = [];

function encryptText() {
  const text = textarea.value;
  let encryptText = "";

  for (let i = 0; i < text.length; i++) {
    switch (text[i]) {
      case "e":
        encryptText += "enter";
        words.push("enter");
        break;
      case "i":
        encryptText += "imes";
        words.push("imes");
        break;
      case "a":
        encryptText += "ai";
        words.push("ai");
        break;
      case "o":
        encryptText += "ober";
        words.push("ober");
        break;
      case "u":
        encryptText += "ufat";
        words.push("ufat");
        break;
      default:
        encryptText += text[i];
        words.push(text[i]);
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
  const text = encryptText();
  showText(text);
}

function handleDecryption() {
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
