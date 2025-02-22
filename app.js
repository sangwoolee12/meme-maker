const canvas = document.querySelector("canvas"); //js로 canvas 불러오기
const cxt = canvas.getContext("2d"); //context는 캔버스에 그림을 그릴 떄 사용하는 붓
canvas.width = 800;
canvas.height = 800; //css에서 캔버스 크기 설정 후 js에도 작성해줌(이후에는 js에서만 수정할 것임)

cxt.fillRect(210 - 40, 200 - 30, 15, 100);
cxt.fillRect(350 - 40, 200 - 30, 15, 100);
cxt.fillRect(260 - 40, 200 - 30, 60, 200);

cxt.arc(250, 100, 50, 0, 2 * Math.PI); //원을 그리는 메소드
cxt.fill();

cxt.beginPath(); //색 바꾸기 위해 경로 새시작
cxt.fillStyle = "white";
cxt.arc(260 + 10, 80, 8, Math.PI, 2 * Math.PI);
cxt.arc(220 + 10, 80, 8, Math.PI, 2 * Math.PI); //x좌표, y좌표, 반지름, 시작각도(3시를 기준으로 시계방향으로 시작 각도 설정(원주율로 지정), 끝 각도)
cxt.fill();
