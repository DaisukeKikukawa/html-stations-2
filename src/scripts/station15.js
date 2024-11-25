// 、HTML にあるボタンを押した際に、div#fuits内がulとliを使ったリスト表示に変化するようにしてください。
function displayList() {
  const fruits = document.getElementById('fruits');
  fruits.innerHTML = `
    <ul>
      <li>りんご</li>
      <li>バナナ</li>
      <li>みかん</li>
    </ul>
  `;
}
