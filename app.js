const textInput = document.getElementById("text");
const fileInput = document.getElementById("file");
const modeBtn = document.getElementById("mode-btn");
const destroyBtn = document.getElementById("destroy-btn");
const eraserBtn = document.getElementById("eraser-btn");
const colorOptions = Array.from(
  document.getElementsByClassName("color-option") //forEach문 사용하기 위해 HTMLCollection을 배열로 만들어줌
);
const color = document.getElementById("color");
const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector("canvas"); //js로 canvas 불러오기
const ctx = canvas.getContext("2d"); //context는 캔버스에 그림을 그릴 떄 사용하는 붓

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT; //css에서 캔버스 크기 설정 후 js에도 작성해줌(이후에는 js에서만 수정할 것임)
ctx.lineWidth = lineWidth.value; //굵기 초기값 5 주겠다는 의미
ctx.lineCap = "round";
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
  ctx.strokeStyle = event.target.value; //라인 색깔 변경해줌
  ctx.fillStyle = event.target.value; //채우기 색깔 변경해줌
}
function onColorClick(event) {
  const colorValue = event.target.dataset.color;
  ctx.strokeStyle = colorValue;
  ctx.fillStyle = colorValue;
  color.value = colorValue; //사용자가 현재 클릭한 색깔을 알려주기 위함
}
function onModeClick() {
  //Fill 또는 Draw 모드 변경 함수
  if (isFilling) {
    isFilling = false;
    modeBtn.innerText = "Fill";
  } else {
    isFilling = true;
    modeBtn.innerText = "Draw";
  }
}
function onCanvasClick() {
  //캔버스 색 채우기 함수
  if (isFilling) {
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }
}
function onDestroyClick() {
  //그림판 초기화 함수
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}
function onEraserClick() {
  //지우개 함수
  ctx.strokeStyle = "white";
  isFilling = false;
  modeBtn.innerText = "Fill";
}
function onFileChange(event) {
  const file = event.target.files[0]; //js를 이용해서 파일을 가져옴
  const url = URL.createObjectURL(file); //그 파일을 가리키는 url을 얻음
  const image = new Image();
  image.src = url;
  image.onload = function () {
    ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    fileInput.value = null; //파일 선택 리셋하는 용도
  };
}
function onDoubleClick(event) {
  const text = textInput.value;
  if (text !== "") {
    ctx.save(); //ctx의 현재 상태, 색상, 스타일 등을 저장함
    ctx.lineWidth = 1;
    ctx.font = "68px serif";
    ctx.fillText(text, event.offsetX, event.offsetY); //이 사이에서는 ctx 수정 가능
    ctx.restore(); //저장해둔 버전으로 되돌림
  }
}
canvas.addEventListener("dblclick", onDoubleClick);
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting); //커서가 캔버스 이탈시 그리기 중단
canvas.addEventListener("click", onCanvasClick); //click = mousedown + mouseup
lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);

colorOptions.forEach((color) => color.addEventListener("click", onColorClick));

modeBtn.addEventListener("click", onModeClick);
destroyBtn.addEventListener("click", onDestroyClick);
eraserBtn.addEventListener("click", onEraserClick);
fileInput.addEventListener("change", onFileChange);
