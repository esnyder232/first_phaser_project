import bombAsset from '../assets/bomb.png';
import dudeAsset from '../assets/dude.png';
import groundAsset from '../assets/platform.png';
import skyAsset from '../assets/sky.png';
import starAsset from '../assets/star.png';
import GlobalFuncs from '../global-funcs.js';

export default class TestPreloadLoaderScene extends Phaser.Scene {
	constructor(config) {
		super(config);

		this.globalfuncs = new GlobalFuncs();
	}

	init() {
		console.log('init on ' + this.scene.key + ' start');

		this.eventMapping = [
			{target: this.load, event:'progress', delegate: (perc) => {return this.loadProgress(perc)}},
			{target: this.load, event:'complete', delegate: (loader, totalComplete, totalFailed) => {return this.loadComplete(loader, totalComplete, totalFailed);}},
			{target: this.sys.events, event:'shutdown', delegate: () => {return this.sceneShutdown();}}
		];

		this.globalfuncs.registerEvents(this, this.eventMapping);
	}

	preload() {
		console.log('preload on ' + this.scene.key + ' start');

	}
	  
	create() {
		console.log('create on ' + this.scene.key + ' start');

		console.log('about to import all assets for example-no-loader-preload-scene...');
		
		this.load.image('sky', skyAsset);
		this.load.image('star', starAsset);
		this.load.image('ground', groundAsset);
		this.load.image('bomb', bombAsset);
		this.load.spritesheet('dude', dudeAsset, {
			frameWidth: 32,
			frameHeight: 48
		});

		this.load.start();
	}
	
	loadProgress(perc) {
		console.log('progress: ' + perc);
	}

	loadComplete(loader, totalComplete, totalFailed)
	{
		console.log('loader complete.');
		console.log('totalComplete: ' + totalComplete);
		console.log('totalFailed: ' + totalFailed);

		this.scene.stop(this.scene.key); 
	}

	sceneShutdown() {
		console.log("scene: " + this.scene.key + "--event: shutdown " + this.sys.settings.status);
		this.globalfuncs.unregisterEvents(this, this.eventMapping);
	}

	update(timeElapsed, dt) {
		console.log('update')
	}
}

