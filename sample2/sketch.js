function setup() {
  createCanvas(600, 400);
  background(200, 255, 200); // 옅은 초록
  
  fill(0, 0, 0); // 뒷머리
  arc(300, 340, 220, 500, radians(160), radians(20));
  
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
  line(290, 230, 310, 230); // 입
  
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
  
  // 내가 좋아하는 사과
  fill(255, 100, 80); // 빨간색 circle
  circle(100, 200, 50);
  circle (500, 100, 80);
  fill(100, 255, 80); // 초록색 circle
  circle(30, 120, 90);
  circle(500, 380, 80);
  circle(320, 40, 30);
  
  fill(255, 245, 180); // 사과 안쪽 반원 색상(옅은 노랑)
  arc(100, 200, 40, 30, radians(200), radians(20));
  arc(500, 100, 65, 60, radians(260), radians(80));
  
  fill(120, 70, 30); // 사과 꼭지(갈색)
  quad(35, 80, 42, 65, 38, 55, 30, 65);
  quad(495, 349, 488, 330, 492, 320, 500, 330);
  quad(323, 30, 328, 20, 325, 12, 320, 18);
}
