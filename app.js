const canvas = document.querySelector("canvas"); //js로 canvas 불러오기
const cxt = canvas.getContext("2d");  //context는 캔버스에 그림을 그릴 떄 사용하는 붓
canvas.width = 800;
canvas.height = 800;  //css에서 캔버스 크기 설정 후 js에도 작성해줌(이후에는 js에서만 수정할 것임)

cxt.fillRect(50, 50, 100, 200); //사각형 채우는 함수로, canvas에서 좌표는 좌상단 모서리기준 0,0