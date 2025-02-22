const modeBtn = document.getElementById("mode-btn");
const colorOptions = Array.from(
  document.getElementsByClassName("color-option") //HTMLCollection이므로 배열로 만들어줌
);
const color = document.getElementById("color");
const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector("canvas"); //js로 canvas 불러오기
const ctx = canvas.getContext("2d"); //context는 캔버스에 그림을 그릴 떄 사용하는 붓
canvas.width = 800;
canvas.height = 800; //css에서 캔버스 크기 설정 후 js에도 작성해줌(이후에는 js에서만 수정할 것임)
ctx.lineWidth = lineWidth.value; //굵기 초기값 5 주겠다는 의미
let isPainting = false;
let isFilling = false;

function onMove(event) {
  //마우스 커서 움직임에 따라 연필이 이동하는 함수
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.beginPath(); //경로 새시작하여 이전 선들의 굵기 유지시킴
  ctx.moveTo(event.offsetX, event.offsetY);
}

function startPainting() {
  //마우스 클릭상태 유지시 선이 그려지는 함수
  isPainting = true;
}

function cancelPainting() {
  //마우스 클릭상태 해제시 그리기 중단 함수
  isPainting = false;
}
function onLineWidthChange(event) {
  //굵기 바꾸는 함수
  ctx.lineWidth = event.target.value;
}
function onColorChange(event) {
  //색상 바꾸는 함수
  ctx.strokeStyle = event.target.value;
  ctx.fillStyle = event.target.value;
}
function onColorClick(event) {
  const colorValue = event.target.dataset.color;
  ctx.strokeStyle = colorValue;
  ctx.fillStyle = colorValue;
  color.value = colorValue;
}
function onModeClick() {
  if (isFilling) {
    isFilling = false;
    modeBtn.innerText = "Fill";
  } else {
    isFilling = true;
    modeBtn.innerText = "Draw";
  }
}
function onCanvasClick() {
  if (isFilling) {
    ctx.fillRect(0, 0, 800, 800);
  }
}
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting); //커서가 캔버스 이탈시 그리기 중단
canvas.addEventListener("click", onCanvasClick);
lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);

colorOptions.forEach((color) => color.addEventListener("click", onColorClick));

modeBtn.addEventListener("click", onModeClick);
