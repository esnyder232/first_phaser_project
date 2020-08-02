//this scene was to test if I could preload assets from a different scene, and use the loaded assets in THIS scene.
export default class ExampleNoPreloadScene extends Phaser.Scene {
	constructor() {
		super();
		console.log('constructur example');

		this.platforms = {};
		this.player = {};
		this.stars = {};
		this.bombs = {};
		this.cursors = {};
		this.score = 0;
		this.scoreText = "";

	}

	init() {
		console.log('init called');

		console.log('init end');
	}

	preload() {
		// console.log('preload start');
		// console.log(this);

		// this.ia.importAllAssets(this);

		// console.log('preload end');
	}
	  
	create() {
		console.log('create start');
		console.log(this);
		this.add.image(400, 300, "sky");

		this.platforms = this.physics.add.staticGroup();
		this.platforms.create(400, 568, 'ground').setScale(2).refreshBody();
		this.platforms.create(600, 400, 'ground');
		this.platforms.create(50, 250, 'ground');
		this.platforms.create(750, 220, 'ground');
	
		this.player = this.physics.add.sprite(100, 450, 'dude');
		this.player.setBounce(0.2);
		this.player.setCollideWorldBounds(true);
	
		this.stars = this.physics.add.group({
			key: 'star',
			repeat: 1,
			setXY: { x: 292, y: 0, stepX: 70 }
		});
			
		this.stars.children.iterate(function(child) {
			child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
		});
	
		this.bombs = this.physics.add.group();
	
		this.scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
	
		this.anims.create({
			key: 'left',
			frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
			frameRate: 10,
			repeat: -1
		});
	
		this.anims.create({
			key: 'turn',
			frames: [{ key: 'dude', frame: 4 }],
			frameRate: 20
		});
	
		this.anims.create({
			key: 'right',
			frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
			frameRate: 10,
			repeat: -1
		});
	
		this.physics.add.collider(this.player, this.platforms);
		this.physics.add.collider(this.stars, this.platforms);
		this.physics.add.collider(this.bombs, this.platforms);
		this.physics.add.collider(this.player, this.bombs, this.hitBomb, null, this);
	
		this.physics.add.overlap(this.player, this.stars, this.collectStar, null, this);
	
		this.cursors = this.input.keyboard.createCursorKeys();
		console.log('create end');
	}
	  
	update(timeElapsed, dt) {
		if (this.cursors.left.isDown) {
			console.log('left');
			this.player.setVelocityX(-160);
			this.player.anims.play('left', true);
		}
		else if (this.cursors.right.isDown) {
			this.player.setVelocityX(160);
			this.player.anims.play('right', true);
		}
		else {
			this.player.setVelocityX(0);
			this.player.anims.play('turn');
		}
		
		if (this.cursors.up.isDown && this.player.body.touching.down) {
			this.player.setVelocityY(-330);
		}
	}
	  
	collectStar(player, star) {
		star.disableBody(true, true);
		
		this.score += 10;
		this.scoreText.setText('score: ' + this.score);
		
		if (this.stars.countActive(true) === 0) {
			this.stars.children.iterate(function(child) {
				child.enableBody(true, child.x, 0, true, true);
			});
		
			var x = (this.player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
		
			var bomb = this.bombs.create(x, 16, 'bomb');
			bomb.setBounce(1);
			bomb.setCollideWorldBounds(true);
			bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
			bomb.allowGravity = false;
		}
	}
		
	hitBomb(player, bomb) {
		this.physics.pause();
		
		this.player.setTint(0xff0000);
		this.player.anims.play('turn');
		
		this.gameOver = true;
	}
}

