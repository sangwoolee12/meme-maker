const canvas = document.querySelector("canvas"); //js로 canvas 불러오기
const cxt = canvas.getContext("2d");  //context는 캔버스에 그림을 그릴 떄 사용하는 붓
canvas.width = 800;
canvas.height = 800;  //css에서 캔버스 크기 설정 후 js에도 작성해줌(이후에는 js에서만 수정할 것임)

cxt.rect(50, 50, 100, 100); //사각형 선 그리기(선의 색이 적용되지 않아 보이지 않음)
cxt.rect(150, 150, 100, 100);
cxt.rect(250, 250, 100, 100);
cxt.fill(); //색 채우기

cxt.beginPath(); //이전 경로와 단절하고 새 경로 시작(끊어가기 원할 때 사용)
cxt.rect(350, 350, 100, 100);
cxt.rect(450, 450, 100, 100);
cxt.fillStyle = "red";
cxt.fill();