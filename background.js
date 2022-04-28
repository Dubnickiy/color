//задаем цвет кнопки
const btn = document.body.children[0];
const btnWrapper = document.querySelector(".buttons");

makeNineButtons()
btn.onmouseover = changeBtnColor;
btn.onclick = changeBackgroundColor;

function rnd() {
    let num = Math.random() * 256;
    return Math.floor(num);
}
rnd();

function genRGB() {
    return "rgb(" + rnd() + ", " + rnd() + ", " + rnd() + ")";
}
genRGB();

function changeBtnColor(btn) {
    btn.style = "background: " + genRGB();
}

function changeBackgroundColor(color) {
    document.body.style.background = color;
}

function makeNineButtons() {
  let html = ""
  for (let i = 1; i < 10; i++) {
      html = html + `<button>${i}</button>`  
  }
  btnWrapper.innerHTML = html

  for (let i = 0; i < 9; i++) {
      const btn = btnWrapper.children[i];
    changeBtnColor(btn)
      btn.onmouseover = function () {
        changeBackgroundColor(btn.style.background)
    }
  }
}
