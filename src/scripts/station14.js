const alertButton = document.getElementsByTagName("button")[0];
// console.log(alertButton);
alertButton.addEventListener("click", alertMessage);

function alertMessage() {
  alert("ECMAScript");
}
