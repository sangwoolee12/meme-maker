const canvas = document.querySelector("canvas"); //js로 canvas 불러오기
const ctx = canvas.getContext("2d"); //context는 캔버스에 그림을 그릴 떄 사용하는 붓
canvas.width = 800;
canvas.height = 800; //css에서 캔버스 크기 설정 후 js에도 작성해줌(이후에는 js에서만 수정할 것임)
ctx.lineWidth = 2;

const colors = [
  "#ff3838",
  "#ffb8b8",
  "#c56cf0",
  "#ff9f1a",
  "#fff200",
  "#32ff7e",
  "#7efff5",
  "#18dcff",
  "#7d5fff",
];

function onClick(event) {
  ctx.beginPath();
  ctx.moveTo(0, 0);
  const color = colors[Math.floor(Math.random() * colors.length)];
  ctx.strokeStyle = color;
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
}

canvas.addEventListener("mousemove", onClick);
