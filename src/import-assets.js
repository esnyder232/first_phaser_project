import bombAsset from './assets/bomb.png';
import dudeAsset from './assets/dude.png';
import groundAsset from './assets/platform.png';
import skyAsset from './assets/sky.png';
import starAsset from './assets/star.png';


export default class ImportAssets
{
	constructor(){}

	importAllAssets(scene) {
		console.log('about to import all assets...');
		scene.load.image('sky', skyAsset);
		scene.load.image('star', starAsset);
		scene.load.image('ground', groundAsset);
		scene.load.image('bomb', bombAsset);
		scene.load.spritesheet('dude', dudeAsset, {
			frameWidth: 32,
			frameHeight: 48
		})
		console.log('done.');
		return;
	}
}