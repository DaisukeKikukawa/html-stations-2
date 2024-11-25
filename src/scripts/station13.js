function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  // console.log(e.target.checked);
  let textArea = document.getElementById("text");
  if (e.target.checked) {
    textArea.style.backgroundColor = "red";
  } else {
    textArea.style.backgroundColor = "white";
  }
}
