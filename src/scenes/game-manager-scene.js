import ExampleScene from "./example-scene.js"
import SimpleScene from "./simple-scene.js"
import LifecycleTestScene from "./lifecycle-test-scene.js"
import LifecycleTestScene2 from "./lifecycle-test-scene2.js"
import TestPreloadScene from "./test-preload-scene.js"
import ExampleNoPreloadScene from "./example-no-preload-scene.js"
import TestPreloadLoaderScene from "./test-preload-loader-scene.js"
import ArcadeTestScene from "./arcade-test-scene.js"


import GlobalFuncs from "../global-funcs.js"


export default class GameManagerScene extends Phaser.Scene {
	constructor() {
		super();
		this.myMessages = [];
		this.globalfuncs = new GlobalFuncs();
	}
	  
	create() {
		//create other scenes
		console.log('adding scenes...');
		
		//testing scene life cycles
		//this.scene.add('lifecycle-test-scene', LifecycleTestScene);
		//this.scene2 = this.scene.add('lifecycle-test-scene2', LifecycleTestScene2);

		// //testing preloading assets on idividual scenes
		// this.scene.add('test-preload-scene', TestPreloadScene);
		// this.scene.add('example-no-preload-scene', ExampleNoPreloadScene)

		//testing preloading assets on idividual scenes using the phaser loader stuff
		// this.scene.add('test-preload-loader-scene', TestPreloadLoaderScene);
		// this.scene.add('example-no-preload-scene', ExampleNoPreloadScene)

		//testing arcade physics
		this.scene.add('arcade-test-scene', ArcadeTestScene);


		window.setTimeout(() => {
			console.log('++++starting GAME MANAGER now++++');
			
		}, 100)

		this.scene.start('arcade-test-scene');



		window.addEventListener("keyup", (e) => {
			console.log('keycode:' + e.keyCode);
			switch(e.keyCode) {				
				case 49: //1
					console.log('1 clicked.');

					break;
				case 50: //2
					console.log('2 clicked.');
					
					break;
				case 51: //3
					console.log('3 clicked.');

					break;
				case 52: //4
					console.log('4 clicked.');
					
					break;
				case 81: //q
					console.log('q clicked.');
					console.log(this);
					break;
			}
		})
	}
	  
	update(timeElapsed, dt) {
	}


}

