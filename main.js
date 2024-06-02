function preload() {
	world_start = loadSound("world_start.wav");
	coinsound = loadSound("coin.wav");
	gameoversound = loadSound("gameover.wav");
	jumpsound = loadSound("jump.wav");
	kicksound = loadSound("kick.wav");
	diesound = loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	canvas.parent('canvas');

	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent('game-console');

	posenet = ml5.poseNet(video, modelloaded);
	posenet.on(video, gotposes);
}

function draw() {
	game()
}

function modelloaded(){
	console.log("model is loaded");
}

function gotposes(results){
	console.log(results);
	noseX = results[0].pose.nose.x;
	noseY = results[0].pose.nose.y;
}

function startGame(){
	gameStatus = "start";
}
