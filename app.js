const canvas = document.querySelector("canvas"); //js로 canvas 불러오기
const cxt = canvas.getContext("2d");  //context는 캔버스에 그림을 그릴 떄 사용하는 붓
canvas.width = 800;
canvas.height = 800;  //css에서 캔버스 크기 설정 후 js에도 작성해줌(이후에는 js에서만 수정할 것임)

cxt.moveTo(50, 50); //선을 긋지 않고 연필(좌표)을 이동시킴
cxt.lineTo(150, 50);  //선을 그으면서 연필을 이동시킴
cxt.lineTo(150, 150); //수평인 직선을 그으려면 두 y값이 같아야함
cxt.lineTo(50, 150);  //라인이 끝난 지점이 다음에 시작하는 브러쉬 좌표임
cxt.lineTo(50, 50); //fillReact = fill + Rect = fill + (moveTo + lineTo)
cxt.fill();
cxt.stroke();