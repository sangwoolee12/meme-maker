const canvas = document.querySelector("canvas"); //js로 canvas 불러오기
const ctx = canvas.getContext("2d"); //context는 캔버스에 그림을 그릴 떄 사용하는 붓
canvas.width = 800;
canvas.height = 800; //css에서 캔버스 크기 설정 후 js에도 작성해줌(이후에는 js에서만 수정할 것임)
ctx.lineWidth = 2;
let isPainting = false;

function onMove(event) {
  //마우스 커서 움직임에 따라 연필이 이동하는 함수
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
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

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting); //커서가 캔버스 이탈시 그리기 중단
