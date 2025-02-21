const canvas = document.querySelector("canvas"); //js로 canvas 불러오기
const cxt = canvas.getContext("2d"); //context는 캔버스에 그림을 그릴 떄 사용하는 붓
canvas.width = 800;
canvas.height = 800; //css에서 캔버스 크기 설정 후 js에도 작성해줌(이후에는 js에서만 수정할 것임)

cxt.fillRect(200, 200, 50, 200); //왼쪽 벽 만들기
cxt.fillRect(400, 200, 50, 200); //오른쪽 벽 만들기
cxt.lineWidth = 2; //선 굵기 조절
cxt.fillRect(300, 300, 50, 100); //문 만들기
cxt.fillRect(200, 200, 200, 20); //천장 만들기
cxt.moveTo(200, 200); //지붕 만들기 위해 연필 이동
cxt.lineTo(325, 100);
cxt.lineTo(450, 200);
cxt.fill();
