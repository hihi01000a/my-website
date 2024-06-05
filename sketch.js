let img;
let y = -100;
let falling = false;

function preload() {
    img = loadImage('image.png'); // 이미지 파일 경로를 맞춰주세요
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0); // 배경을 검정색으로 설정
}

function draw() {
    background(0); // 배경을 검정색으로 설정
    if (falling) {
        y += 5; // 이미지가 떨어지는 속도
    }
    image(img, width / 2 - img.width / 2, y);

    if (y > height) {
        y = -100; // 다시 위로 초기화
        falling = false;
    }
}

function mouseMoved() {
    falling = true; // 마우스를 움직이면 이미지가 떨어짐
}
