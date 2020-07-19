import Phaser from 'phaser';
import bombAsset from './assets/bomb.png';
import dudeAsset from './assets/dude.png';
import groundAsset from './assets/platform.png';
import skyAsset from './assets/sky.png';
import starAsset from './assets/star.png';

export class App {
	constructor() {
		this.game = {};
		this.config = {};

		this.platforms = {};
		this.player = {};
		this.cursors = {};
		this.stars = {};
		this.bombs = {};
		this.score = 0;
		this.scoreText = "";
		this.that = this;

		var that = this;

		this.config = {
			type: Phaser.AUTO,
			width: 800,
			height: 600,
			scene: {
				preload: this.preload,
				create: this.create,
				update: this.update
			},
			physics: {
				default: 'arcade',
				arcade: {
				gravity: {
					y: 300
				},
				debug: false
				}
			}
		}

		this.game = new Phaser.Game(this.config);

		const messageEl = document.createElement('div');
		messageEl.textContent = 'I was put here by JavaScript asdf!';
		document.body.appendChild(messageEl);
	}	
	  
	  
	  preload() {
		  console.log('preload start');
		  console.log(this);
		  this.load.image('sky', skyAsset);
		  this.load.image('star', starAsset);
		  this.load.image('ground', groundAsset);
		  this.load.image('bomb', bombAsset);
		  this.load.spritesheet('dude', dudeAsset, {
			  frameWidth: 32,
			  frameHeight: 48
		  })
	  
		  console.log('preload end');
	  }
	  
	  
	  create() {
		  	console.log('create start');
			// this.add.image(400, 300, 'sky');
		
			// this.platforms = this.physics.add.staticGroup();
			// this.platforms.create(400, 568, 'ground').setScale(2).refreshBody();
			// this.platforms.create(600, 400, 'ground');
			// this.platforms.create(50, 250, 'ground');
			// this.platforms.create(750, 220, 'ground');
		
			// this.player = this.physics.add.sprite(100, 450, 'dude');
			// this.player.setBounce(0.2);
			// this.player.setCollideWorldBounds(true);
		
			// stars = this.physics.add.group({
			// key: 'star',
			// repeat: 11,
			// setXY: { x: 12, y: 0, stepX: 70 }
			// });
			// stars.children.iterate(function(child) {
			// child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
			// });
		
			// bombs = this.physics.add.group();
		
			// scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
		
			// this.anims.create({
			// key: 'left',
			// frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
			// frameRate: 10,
			// repeat: -1
			// });
		
			// this.anims.create({
			// key: 'turn',
			// frames: [{ key: 'dude', frame: 4 }],
			// frameRate: 20
			// });
		
			// this.anims.create({
			// key: 'right',
			// frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
			// frameRate: 10,
			// repeat: -1
			// });
		
			// this.physics.add.collider(player, platforms);
			// this.physics.add.collider(stars, platforms);
			// this.physics.add.collider(bombs, platforms);
			// this.physics.add.collider(player, bombs, hitBomb, null, this);
		
			// this.physics.add.overlap(player, stars, collectStar, null, this);
		
			// cursors = this.input.keyboard.createCursorKeys();
		  console.log('create end');
	  }
	  
	  update() {
		// if (cursors.left.isDown) {
		//   player.setVelocityX(-160);
		//   player.anims.play('left', true);
		// }
		// else if (cursors.right.isDown) {
		//   player.setVelocityX(160);
		//   player.anims.play('right', true);
		// }
		// else {
		//   player.setVelocityX(0);
		//   player.anims.play('turn');
		// }
	  
		// if (cursors.up.isDown && player.body.touching.down) {
		//   player.setVelocityY(-330);
		// }
	  }
	  
	//   function collectStar(player, star) {
	// 	star.disableBody(true, true);
	  
	// 	score += 10;
	// 	scoreText.setText('score: ' + score);
	  
	// 	if (stars.countActive(true) === 0) {
	// 	  stars.children.iterate(function(child) {
	// 		child.enableBody(true, child.x, 0, true, true);
	// 	  });
	  
	// 	  var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
	  
	// 	  var bomb = bombs.create(x, 16, 'bomb');
	// 	  bomb.setBounce(1);
	// 	  bomb.setCollideWorldBounds(true);
	// 	  bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
	// 	  bomb.allowGravity = false;
	// 	}
	//   }
	  
	//   function hitBomb(player, bomb) {
	// 	this.physics.pause();
	  
	// 	player.setTint(0xff0000);
	  
	// 	player.anims.play('turn');
	  
	// 	gameOver = true;
	//   }
	  


}

//feels like a hacky way to start...oh well. Its simple atleast.
var app = new App();




// function preload() {
// 	console.log('preload start');
//   //   this.load.image('sky', skyAsset);
//   //   this.load.image('star', starAsset);
//   //   this.load.image('ground', groundAsset);
//   //   this.load.image('bomb', bombAsset);
//   //   this.load.spritesheet('dude', dudeAsset, {
//   // 	  frameWidth: 32,
//   // 	  frameHeight: 48
//   //   })

// 	console.log('preload end');
// }

// var platforms;
// var player;
// var cursors;
// var stars;
// var score = 0;
// var scoreText;
// var bombs;

// function create() {
// 	console.log('create start');
//   this.add.image(400, 300, 'sky');

//   platforms = this.physics.add.staticGroup();
//   platforms.create(400, 568, 'ground').setScale(2).refreshBody();
//   platforms.create(600, 400, 'ground');
//   platforms.create(50, 250, 'ground');
//   platforms.create(750, 220, 'ground');

//   player = this.physics.add.sprite(100, 450, 'dude');
//   player.setBounce(0.2);
//   player.setCollideWorldBounds(true);

//   stars = this.physics.add.group({
// 	key: 'star',
// 	repeat: 11,
// 	setXY: { x: 12, y: 0, stepX: 70 }
//   });
//   stars.children.iterate(function(child) {
// 	child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
//   });

//   bombs = this.physics.add.group();

//   scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

//   this.anims.create({
// 	key: 'left',
// 	frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
// 	frameRate: 10,
// 	repeat: -1
//   });

//   this.anims.create({
// 	key: 'turn',
// 	frames: [{ key: 'dude', frame: 4 }],
// 	frameRate: 20
//   });

//   this.anims.create({
// 	key: 'right',
// 	frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
// 	frameRate: 10,
// 	repeat: -1
//   });

//   this.physics.add.collider(player, platforms);
//   this.physics.add.collider(stars, platforms);
//   this.physics.add.collider(bombs, platforms);
//   this.physics.add.collider(player, bombs, hitBomb, null, this);

//   this.physics.add.overlap(player, stars, collectStar, null, this);

//   cursors = this.input.keyboard.createCursorKeys();
// 	console.log('create end');
// }

// function update() {
//   if (cursors.left.isDown) {
// 	player.setVelocityX(-160);
// 	player.anims.play('left', true);
//   }
//   else if (cursors.right.isDown) {
// 	player.setVelocityX(160);
// 	player.anims.play('right', true);
//   }
//   else {
// 	player.setVelocityX(0);
// 	player.anims.play('turn');
//   }

//   if (cursors.up.isDown && player.body.touching.down) {
// 	player.setVelocityY(-330);
//   }
// }

// function collectStar(player, star) {
//   star.disableBody(true, true);

//   score += 10;
//   scoreText.setText('score: ' + score);

//   if (stars.countActive(true) === 0) {
// 	stars.children.iterate(function(child) {
// 	  child.enableBody(true, child.x, 0, true, true);
// 	});

// 	var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

// 	var bomb = bombs.create(x, 16, 'bomb');
// 	bomb.setBounce(1);
// 	bomb.setCollideWorldBounds(true);
// 	bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
// 	bomb.allowGravity = false;
//   }
// }

// function hitBomb(player, bomb) {
//   this.physics.pause();

//   player.setTint(0xff0000);

//   player.anims.play('turn');

//   gameOver = true;
// }
