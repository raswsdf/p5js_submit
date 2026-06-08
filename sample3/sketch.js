/******************************************
1. mouse:
 - 마우스 위치를 향해 모든 사과가 모여 이동
 - 마우스를 클릭하면 사과가 원래 자리로 돌아가고, 다시 클릭하면 다시 마우스를 따라감
2. keyboard:
 - 방향키(상, 하, 좌, 우)를 누르면 사과가 해당 방향으로 화면 밖으로 떨어짐
 - 사과가 모두 사라지면 캐릭터의 입이 가로로 긴 타원으로 바뀜 + gif는 스페이스바로 저장
************************************************/

let ox1 = 100, oy1 = 200, s1 = 50; // 사과 원래 위치와 크기
let ox2 = 500, oy2 = 100, s2 = 80;
let ox3 = 30, oy3 = 120, s3 = 90;
let ox4 = 500, oy4 = 380, s4 = 80;
let ox5 = 320, oy5 = 40, s5 = 30;
let x1, y1, x2, y2, x3, y3, x4, y4, x5, y5; // 현재 사과 위치 저장

let followMouse = true; // true면 마우스 따라감, false면 원위치로 복귀
let falling = false; // 방향키 누르면 true
let vx = 0, vy = 0; // 떨어지는 방향
let allGone = false; // 사과가 다 화면 밖으로 나갔는지

function setup() {
  createCanvas(600, 400);
  x1 = ox1; y1 = oy1; // 처음엔 원위치
  x2 = ox2; y2 = oy2;
  x3 = ox3; y3 = oy3;
  x4 = ox4; y4 = oy4;
  x5 = ox5; y5 = oy5;
}

function draw() {
  background(200, 255, 200); // 옅은 초록
  if (!falling && !allGone) { // 사과 이동
    if (followMouse) {
      let mx = constrain(mouseX, 0, width);
      let my = constrain(mouseY, 0, height);
      x1 += (mx - x1) * 0.1; y1 += (my - y1) * 0.08;
      x2 += (mx - x2) * 0.1; y2 += (my - y2) * 0.08;
      x3 += (mx - x3) * 0.1; y3 += (my - y3) * 0.08;
      x4 += (mx - x4) * 0.1; y4 += (my - y4) * 0.08;
      x5 += (mx - x5) * 0.1; y5 += (my - y5) * 0.08;
    } else {
      x1 += (ox1 - x1) * 0.1; y1 += (oy1 - y1) * 0.05;
      x2 += (ox2 - x2) * 0.1; y2 += (oy2 - y2) * 0.05;
      x3 += (ox3 - x3) * 0.1; y3 += (oy3 - y3) * 0.05;
      x4 += (ox4 - x4) * 0.1; y4 += (oy4 - y4) * 0.05;
      x5 += (ox5 - x5) * 0.1; y5 += (oy5 - y5) * 0.05;
    }
  }
  if (falling && !allGone) { // 방향키 방향으로 떨어짐
    x1+=vx; y1+=vy; 
    x2+=vx; y2+=vy; 
    x3+=vx; y3+=vy; 
    x4+=vx; y4+=vy; 
    x5+=vx; y5+=vy;
  }
  if (falling && (x1 < -s1 || x1 > width + s1 || y1 < -s1 || y1 > height + s1) && (x2 < -s2 || x2 > width + s2 || y2 < -s2 || y2 > height + s2) && (x3 < -s3 || x3 > width + s3 || y3 < -s3 || y3 > height + s3) && (x4 < -s4 || x4 > width + s4 || y4 < -s4 || y4 > height + s4) && (x5 < -s5 || x5 > width + s5 || y5 < -s5 || y5 > height + s5)) { // 사과가 전부 화면 밖으로 사라졌는지 검사
    allGone = true;
  }
  
  fill(0, 0, 0); // 기존 과제2 내용
  arc(300, 340, 220, 500, radians(160), radians(20)); // 뒷머리
  strokeWeight(0);
  fill(255, 240, 230);
  arc(300, 180, 110, 150, radians(0), radians(180)); // 앞머리로 반 덮인 얼굴
  triangle(280, 180, 288, 180, 284, 140);
  triangle(320, 180, 328, 180, 324, 140);
  ellipse(250, 205, 30, 40); // 귀
  ellipse(350, 205, 30, 40);
  fill(0, 0, 0);
  strokeWeight(8);
  point(280, 200); // 눈(왼)
  point(320, 200); // 눈(오) 
  strokeWeight(3);
  noFill();
  arc(275, 185, 20, 10, radians(180), radians(340)); // 눈썹(왼)
  arc(325, 185, 20, 10, radians(200), radians(360)); // 눈썹(오)
  strokeWeight(1);
  arc(278, 198, 20, 10, radians(180), radians(340));
  arc(280, 200, 20, 10, radians(180), radians(340)); // 쌍커풀(왼)
  arc(322, 198, 20, 10, radians(200), radians(360));
  arc(320, 200, 20, 10, radians(200), radians(360)); // 쌍커풀(오)
  if (!allGone) { // 입 변화 : 사과가 다 사라지면 타원, 아니면 원래 직선
    line(290, 230, 310, 230);
  } else {
    ellipse(300, 234, 22, 8);
  }
  strokeWeight(0);
  fill(220, 180, 160); // 코 그림자
  triangle(295, 220, 305, 220, 300, 225);
  triangle(250, 210, 240, 210, 248, 200); // 귀 그림자(왼)
  triangle(350, 210, 360, 210, 352, 200); // 귀 그림자(오)
  fill(255, 255, 255); // 코 하이라이터
  triangle(295, 220, 305, 220, 300, 195);
  strokeWeight(1);
  noFill();
  circle(275, 205, 35); // 안경
  circle(325, 205, 35);
  line(290, 205, 310, 205);
  line(260, 205, 235, 185);
  line(340, 205, 365, 185);
  point(275, 215); // 점
  strokeWeight(0);
  fill(100, 200, 100); // 옷(초록)
  arc(300, 399, 180, 240, radians(180), radians(360));
  fill(255, 240, 230);
  rect(280, 250, 40, 30);// 목
  circle(300, 280, 40);
  
  if (!(x1 < -s1 || x1 > width + s1 || y1 < -s1 || y1 > height + s1)) { // 빨간 사과1
    fill(255, 100, 80);
    circle(x1, y1, s1);
    fill(255, 245, 180);
    arc(x1, y1, 40, 30, radians(200), radians(20));
  }
  if (!(x2 < -s2 || x2 > width + s2 || y2 < -s2 || y2 > height + s2)) { // 빨간 사과2
    fill(255, 100, 80);
    circle(x2, y2, s2);
    fill(255, 245, 180);
    arc(x2, y2, 65, 60, radians(260), radians(80));
  }
  if(!(x3 < -s3 || x3 > width + s3 || y3 < -s3 || y3 > height + s3)){// 초록 사과1
    fill(100, 255, 80);
    circle(x3, y3, s3);
    fill(120, 70, 30);
    quad(x3 + 5, y3 - 40, x3 + 12, y3 - 55, x3 + 8, y3 - 65, x3, y3 - 55);
  }
  if(!(x4 < -s4 || x4 > width + s4 || y4 < -s4 || y4 > height + s4)){ // 초록 사과2
    fill(100, 255, 80);
    circle(x4, y4, s4);
    fill(120, 70, 30);
    quad(x4 - 5, y4 - 31, x4 - 12, y4 - 50, x4 - 8, y4 - 60, x4, y4 - 50);
  }
  if(!(x5 < -s5 || x5 > width + s5 || y5 < -s5 || y5 > height + s5)) { // 초록 사과3
    fill(100, 255, 80);
    circle(x5, y5, s5);
    fill(120, 70, 30);
    quad(x5 + 3, y5 - 10, x5 + 8, y5 - 20, x5 + 5, y5 - 28, x5, y5 - 22);
  }
}

function mousePressed() { //클릭하면 제자리에 오게 하기
  falling = false;
  allGone = false;
  
  followMouse = !followMouse;
}

function keyPressed() {
  // if (key == ' ') saveGif('mySketch', 20) (마지막 과제에서는 제외)
  if (keyCode == LEFT_ARROW) {
    falling = true;
    vx = -6;
    vy = 0;
  } else if (keyCode == RIGHT_ARROW) {
    falling = true;
    vx = 6;
    vy = 0;
  } else if (keyCode == UP_ARROW) {
    falling = true;
    vx = 0;
    vy = -6;
  } else if (keyCode == DOWN_ARROW) {
    falling = true;
    vx = 0;
    vy = 6;
  }
}