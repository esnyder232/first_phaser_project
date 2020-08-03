import starAsset from '../assets/star.png';
import groundAsset from '../assets/platform.png';
import bombAsset from '../assets/bomb.png';

export default class ArcadeTestScene extends Phaser.Scene {
	constructor(config) {
		super(config);
	}

	init() {
		console.log('init on ' + this.scene.key + ' start');

	}

	preload() {
		console.log('preload on ' + this.scene.key + ' start');
		this.load.image('star', starAsset);
		this.load.image('ground', '../src/assets/platform.png'); 
		this.load.image('bomb', bombAsset);
	}
	  
	create() {
		console.log('create on ' + this.scene.key + ' start');
		this.platforms = this.physics.add.staticGroup();
		this.platforms.create(400, 400, 'ground');
	}
	  
	update(timeElapsed, dt) {
	
	}
}

