import ExampleScene from "./example-scene.js"
import SimpleScene from "./simple-scene.js"
import NewScene from "./new-scene.js"
import LifecycleTestScene from "./lifecycle-test-scene.js"
import LifecycleTestScene2 from "./lifecycle-test-scene2.js"
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
		this.scene1 = this.scene.add('lifecycle-test-scene', LifecycleTestScene, true);
		this.scene2 = this.scene.add('lifecycle-test-scene2', LifecycleTestScene2);


		window.addEventListener("keyup", (e) => {
			console.log('keycode:' + e.keyCode);
			switch(e.keyCode) {				
				case 49: //1
					console.log('1 clicked. pausing scene ');
					this.scene.pause();
					break;
				case 50: //2
					console.log('2 clicked. resume scene');
					this.scene.resume();
					break;
				case 51: //3
					console.log('3 clicked. sleeping scene');
					this.scene.sleep();
					break;
				case 52: //4
					console.log('4 clicked. awake scene');
					this.scene.wake();
					break;
				case 81: //q
					console.log('q clicked. pring log:');
					console.log(this.globalfuncs.tempGlobalMessages);
					break;
				case 87: //w
					console.log('w clicked');
					console.log(this);
					break;
			}
		})


		//set timeouts
		window.setTimeout(() => {
			var msg = "+++++++ PAUSING SCENE1 NOW +++++++";
			console.log(msg)
			this.globalfuncs.tempGlobalMessages.push(msg);
			this.scene1.scene.pause();
		}, 100);
		
		window.setTimeout(() => {
			var msg = "+++++++ UNPAUSE SCENE1 NOW +++++++";
			console.log(msg)
			this.globalfuncs.tempGlobalMessages.push(msg);
			this.scene1.scene.resume();
		}, 200);

		window.setTimeout(() => {
			var msg = "+++++++ SLEEP SCENE1 NOW +++++++";
			console.log(msg)
			this.globalfuncs.tempGlobalMessages.push(msg);
			this.scene1.scene.sleep();
		}, 300);

		window.setTimeout(() => {
			var msg = "+++++++ AWAKE SCENE1 NOW +++++++";
			console.log(msg)
			this.globalfuncs.tempGlobalMessages.push(msg);
			this.scene1.scene.wake();
		}, 400);
		
		///////////////////////////////////////////
		//for testing if shutdown/destroy
		// window.setTimeout(() => {
		// 	var msg = "+++++++ SHUTDOWN SCENE1 NOW +++++++";
		// 	console.log(msg)
		// 	this.globalfuncs.tempGlobalMessages.push(msg);
		// 	this.scene1.scene.stop();
		// }, 500);

		// window.setTimeout(() => {
		// 	var msg = "+++++++ DESTROY SCENE1 NOW +++++++";
		// 	console.log(msg)
		// 	this.globalfuncs.tempGlobalMessages.push(msg);
		// 	this.scene1.scene.remove();
		// }, 600);
		///////////////////////////////////////////


		///////////////////////////////////////////
		//for testing scene transitions
		window.setTimeout(() => {
			var msg = "+++++++ TRANSITION TO SCENE2 NOW +++++++";
			console.log(msg)
			this.globalfuncs.tempGlobalMessages.push(msg);
			this.scene.transition({ target: 'lifecycle-test-scene2', duration:100 });
		}, 500);
		///////////////////////////////////////////


	}
	  
	update(timeElapsed, dt) {
	}

	
	printStatus() {
		
	}

}

