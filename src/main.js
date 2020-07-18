var platforms = null;
var cursors = null;
var player = null;
var stars = null;
var bombs = null;
var score = 0;
var scoreText = null;

function preload ()
{
	console.log('preload called!');
	this.load.image('sky', 'assets/sky.png');
	this.load.image('ground', 'assets/platform.png');
	this.load.image('star', 'assets/star.png');
	this.load.image('bomb', 'assets/bomb.png');
	this.load.spritesheet('dude', 'assets/dude.png', {frameWidth: 32, frameHeight: 48});

	console.log('preload DONE!');

	return new Promise((res, rej) => {
		console.log('promise started...');
		window.setTimeout(() => {
			res();
		}, 5000);
	})
	.then(() => {
		console.log('Primse Resolved')
	});
}

function collectStar (player,star)
{
	star.disableBody(true, true);

	score += 10;
	scoreText.setText('Score: ' + score);

	if(stars.countActive(true) === 0)
	{
		stars.children.iterate(function(child) {
			child.enableBody(true,child.x, 0, true, true);
		})

		var x = (player.x < 400) ? (Math.random() * 400 + 400) : (Math.random() * 400 + 0);

		var bomb = bombs.create(x, 16, 'bomb');
		bomb.setBounce(1);
		bomb.setCollideWorldBounds(true);
		bomb.setVelocityY((Math.random() * 400 - 200), 20);
	}
}

function hitBomb(player, bomb)
{
	this.physics.pause();
	player.setTint(0xff0000);
	player.anims.play('turn');
	gameOver = true;
}


function create ()
{
	console.log('create called!');
	this.add.image(0, 0, 'sky').setOrigin(0,0);
	this.add.image(400, 300, 'star');

	platforms = this.physics.add.staticGroup();

	platforms.create(400, 568, 'ground').setScale(2).refreshBody();

	platforms.create(600, 400, 'ground');
	platforms.create(50, 250, 'ground');
	platforms.create(750, 220, 'ground');

	//player
	player = this.physics.add.sprite(100, 450, 'dude');
	player.setBounce(0.2);
	player.setCollideWorldBounds(true);
	
	this.anims.create( {
		key: 'left',
		frames: this.anims.generateFrameNumbers('dude', {start: 0, end: 3}),
		frameRate: 10,
		repeat: -1
	});

	this.anims.create({
		key: 'turn',
		frames: [ {key: 'dude', frame: 4}],
		frameRate: 20
	});

	this.anims.create({
		key: 'right',
		frames: this.anims.generateFrameNumbers('dude', {start: 5, end: 8}),
		frameRate: 10,
		repeat: -1
	});

	//input
	cursors = this.input.keyboard.createCursorKeys();

	//stars
	stars = this.physics.add.group({
		key: 'star',
		repeat: 1,
		setXY: {x: 292, y: 0, stepX: 70}
	});

	stars.children.iterate(function(child) {			
		child.setBounceY(Math.random() * 0.4 + 0.4);
	})

	//text
	scoreText = this.add.text(16, 16, 'score: 0', {fontSize: '32px', fill: '#000'});

	//bombs
	bombs = this.physics.add.group();
	
	//colliders
	this.physics.add.collider(player, platforms);
	this.physics.add.collider(stars, platforms);
	this.physics.add.collider(player, stars, collectStar, null, this);
	this.physics.add.collider(bombs, platforms);
	this.physics.add.collider(player, bombs, hitBomb, null, this);

	console.log(player);

	console.log('create DONE!');
}

function update ()
{
	if(cursors.left.isDown)
	{
		player.setVelocityX(-160);
		player.anims.play('left', true);
	}
	else if(cursors.right.isDown)
	{
		player.setVelocityX(160);
		player.anims.play('right', true);
	}
	else
	{
		player.setVelocityX(0);
		player.anims.play('turn');
	}

	if(cursors.up.isDown && player.body.touching.down)
	{
		player.setVelocityY(-400);
	}
}

var config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: {y: 400},
			debug: false
		}
	},
	scene: {
		preload: preload,
		create: create,
		update: update
	}
}

var game = new Phaser.Game(config);
