function setup() {
  createCanvas(600, 400);
  colorMode(RGB, 255, 255, 255, 255);
}

function draw() {
  background(120, 160, 200); // 옅은 남색 배경
  
  strokeWeight(0);
  fill(40, 80, 140); // 짙은 남색 하단부
  rect(0, 280, 600, 120);
  
  fill(108, 148, 205); // 배경 패턴
  quad(300, 25, 400, 100, 300, 200, 200, 100);
  quad(500, 25, 600, 100, 500, 200, 400, 100);
  quad(100, 25, 200, 100, 100, 200, 0, 100);
  
  // 전체 애니메이션을 300프레임 단위로 반복
  let cycle = frameCount % 300;

  // 메인 물방울이 내려오는 구간
  let dropProgress = constrain(cycle / 120, 0, 1);

  // 충돌 이후 효과가 나타나는 구간
  let impactProgress = constrain((cycle - 120) / 120, 0, 1);

  if (cycle < 120) {
    // 메인 물방울이 위에서 아래로 천천히 이동
    let dropY = lerp(30, 260, dropProgress);

    // 내려오면서 원형에서 타원형으로 변환
    let dropW = lerp(20, 22, dropProgress);
    let dropH = lerp(20, 38, dropProgress);

    // 메인 물방울 색상이 내려오면서 짙은 남색에서 밝은 남색으로 변함
    let dropColor = lerpColor(
      color(40, 80, 140),
      color(90, 140, 200),
      dropProgress
    );

  fill(dropColor);
  ellipse(300, dropY, dropW, dropH); // 떨어지는 메인 물방울
  }

  // 충돌 직후 수면 arc가 먼저 천천히 나타남
  let arcAlpha = map(impactProgress, 0.00, 0.25, 0, 255);
  arcAlpha = constrain(arcAlpha, 0, 255);

  fill(220, 240, 255, arcAlpha); // 수면에 부딪힌 물방울
  arc(300, 280, 80, 25, PI, 2 * PI);
  
  // 그 다음 하얀 조각들이 천천히 나타남
  let whiteTriAlpha = map(impactProgress, 0.20, 0.50, 0, 255);
  whiteTriAlpha = constrain(whiteTriAlpha, 0, 255);

  fill(255, 255, 255, whiteTriAlpha); // arc 주위 조각난 물방울들(하양)
  triangle(240, 212, 242, 273, 272, 258);
  triangle(325, 237, 317, 287, 340, 218);  
  
  // 마지막으로 밝은 조각들이 천천히 나타남
  let lightTriAlpha = map(impactProgress, 0.40, 0.75, 0, 255);
  lightTriAlpha = constrain(lightTriAlpha, 0, 255);

  fill(200, 220, 240, lightTriAlpha); // arc 주위 조각난 물방울들 (밝)
  triangle(280, 190, 280, 248, 287, 240);
  triangle(300, 238, 318, 207, 314, 257);
  triangle(348, 248, 390, 204, 358, 269);
  
  // 충돌 이후 작은 물방울들이 천천히 나타남
  let smallAlpha = map(impactProgress, 0.05, 0.85, 0, 255);
  smallAlpha = constrain(smallAlpha, 0, 255);

  fill(78, 118, 178, smallAlpha); // 떨어지는 주변 물방울
  circle(310, 10, 5);
  circle(290, 60, 10);
  circle(300, 70, 5);
  circle(320, 150, 10);
  circle(310, 170, 5);
  
  // 흰 점들
  let pointAlpha = map(impactProgress, 0.15, 0.85, 0, 255);
  pointAlpha = constrain(pointAlpha, 0, 255);

  stroke(255, pointAlpha);
  strokeWeight(8);
  point(290, 95);
  point(240, 180);
  point(330, 120);
  point(380, 260);
  
  strokeWeight(0);
  
  // arc 아래 동심원 물결
  let rippleAlpha1 = constrain(map(impactProgress, 0.00, 0.18, 0, 255), 0, 255); // 가장 안쪽
  let rippleAlpha2 = constrain(map(impactProgress, 0.18, 0.36, 0, 255), 0, 255);
  let rippleAlpha3 = constrain(map(impactProgress, 0.36, 0.58, 0, 255), 0, 255);
  let rippleAlpha4 = constrain(map(impactProgress, 0.58, 0.82, 0, 255), 0, 255); // 가장 바깥쪽

  // 각 물결은 나타나기 시작한 뒤부터 impactProgress가 끝날 때까지 계속 커짐
  let rippleGrow1 = constrain(map(impactProgress, 0.00, 1.00, 0, 1), 0, 1);
  let rippleGrow2 = constrain(map(impactProgress, 0.18, 1.00, 0, 1), 0, 1);
  let rippleGrow3 = constrain(map(impactProgress, 0.36, 1.00, 0, 1), 0, 1);
  let rippleGrow4 = constrain(map(impactProgress, 0.58, 1.00, 0, 1), 0, 1);

  fill(30, 70, 130, rippleAlpha4); 
  arc(
    300,
    280,
    lerp(320, 390, rippleGrow4),
    lerp(200, 235, rippleGrow4),
    0,
    PI
  );  

  fill(78, 118, 178, rippleAlpha3); 
  arc(
    300,
    280,
    lerp(240, 300, rippleGrow3),
    lerp(150, 185, rippleGrow3),
    0,
    HALF_PI
  );
  arc(
    290,
    290,
    lerp(190, 240, rippleGrow3),
    lerp(125, 155, rippleGrow3),
    HALF_PI,
    PI
  );

  fill(108, 148, 205, rippleAlpha2);
  arc(
    300,
    280,
    lerp(170, 220, rippleGrow2),
    lerp(100, 130, rippleGrow2),
    0,
    PI
  );

  fill(170, 205, 235, rippleAlpha1); 
  arc(
    300,
    280,
    lerp(100, 140, rippleGrow1),
    lerp(50, 70, rippleGrow1),
    HALF_PI,
    PI
  );
  arc(
    310,
    290,
    lerp(50, 75, rippleGrow1),
    lerp(25, 38, rippleGrow1),
    0,
    HALF_PI
  );
  
  // 글리치처럼 네모 표현
  let glitchMove = sin(frameCount * 0.08) * 3;

  fill(78, 118, 178); // 글리치처럼 네모 표현
  square(80 + glitchMove, 320, 10);
  rect(100 - glitchMove, 320, 60, 10);
  square(490 + glitchMove, 340, 15);
  rect(520 - glitchMove, 340, 30, 15);

  fill(108, 148, 205);
  square(380 + glitchMove, 360, 10);
  rect(120 - glitchMove, 350, 80, 15);
}

/* (마지막 과제에서는 사용X)
// GIF 저장용 (s키)
function keyPressed() {
  if (key === 's' || key === 'S') {
    saveGif('water_drop_animation', 5);
  }
}
  */