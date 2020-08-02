import bombAsset from '../assets/bomb.png';
import dudeAsset from '../assets/dude.png';
import groundAsset from '../assets/platform.png';
import skyAsset from '../assets/sky.png';
import starAsset from '../assets/star.png';

export default class TestPreloadScene extends Phaser.Scene {
	constructor(config) {
		super(config);
	}

	init() {
		console.log('init on ' + this.scene.key + ' start');

	}

	preload() {
		console.log('preload on ' + this.scene.key + ' start');
		console.log('about to import all assets for example-no-preload-scene...');
		this.load.image('sky', skyAsset);
		this.load.image('star', starAsset);
		this.load.image('ground', groundAsset);
		this.load.image('bomb', bombAsset);
		this.load.spritesheet('dude', dudeAsset, {
			frameWidth: 32,
			frameHeight: 48
		})
		console.log('done.');
	}
	  
	create() {
		console.log('create on ' + this.scene.key + ' start');
		this.scene.stop(this.scene.key); //just stop the scene. it was meant to test the preloading.
	}
	  
	update(timeElapsed, dt) {
		console.log('update')
	}
}

