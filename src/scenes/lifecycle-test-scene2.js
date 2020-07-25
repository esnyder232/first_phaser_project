import GlobalFuncs from '../global-funcs.js';

export default class LifecycleTestScene2 extends Phaser.Scene {
	constructor() {
		super();
		this.globalfuncs = new GlobalFuncs();

		var msg = "scene: life-cycle-scene2--function: constructor " + this.sys.settings.status
		console.log(msg)
		this.globalfuncs.tempGlobalMessages.push(msg);

		this.framesCount = 0;
	}

	init() {
		var msg = "scene: " + this.scene.key + "--function: init " + this.sys.settings.status
		console.log(msg)
		this.globalfuncs.tempGlobalMessages.push(msg);


		//register for events
		this.sys.events.on('boot', () => {
			var msg = "scene: " + this.scene.key + "--event: boot " + this.sys.settings.status
			console.log(msg)
			this.globalfuncs.tempGlobalMessages.push(msg);
		})
		this.sys.events.on('create', () => {
			var msg = "scene: " + this.scene.key + "--event: create " + this.sys.settings.status
			console.log(msg)
			this.globalfuncs.tempGlobalMessages.push(msg);
		})
		this.sys.events.on('destroy', () => {
			var msg = "scene: " + this.scene.key + "--event: destroy " + this.sys.settings.status
			console.log(msg)
			this.globalfuncs.tempGlobalMessages.push(msg);
		})
		this.sys.events.on('pause', () => {
			var msg = "scene: " + this.scene.key + "--event: pause " + this.sys.settings.status
			console.log(msg)
			this.globalfuncs.tempGlobalMessages.push(msg);
		})
		this.sys.events.on('postupdate', () => {
			var msg = "scene: " + this.scene.key + "--event:postupdate" + this.sys.settings.status
			console.log(msg)
			this.globalfuncs.tempGlobalMessages.push(msg);
		})
		this.sys.events.on('preupdate', () => {
			var msg = "scene: " + this.scene.key + "--event: preupdate " + this.sys.settings.status
			console.log(msg)
			this.globalfuncs.tempGlobalMessages.push(msg);
		})
		this.sys.events.on('ready', () => {
			var msg = "scene: " + this.scene.key + "--event: ready " + this.sys.settings.status
			console.log(msg)
			this.globalfuncs.tempGlobalMessages.push(msg);
		})
		this.sys.events.on('render', () => {
			var msg = "scene: " + this.scene.key + "--event: render " + this.sys.settings.status
			console.log(msg)
			this.globalfuncs.tempGlobalMessages.push(msg);
		})
		this.sys.events.on('resume', () => {
			var msg = "scene: " + this.scene.key + "--event: resume " + this.sys.settings.status
			console.log(msg)
			this.globalfuncs.tempGlobalMessages.push(msg);
		})
		this.sys.events.on('shutdown', () => {
			var msg = "scene: " + this.scene.key + "--event: shutdown " + this.sys.settings.status
			console.log(msg)
			this.globalfuncs.tempGlobalMessages.push(msg);
		})
		this.sys.events.on('sleep', () => {
			var msg = "scene: " + this.scene.key + "--event: sleep " + this.sys.settings.status
			console.log(msg)
			this.globalfuncs.tempGlobalMessages.push(msg);
		})
		this.sys.events.on('start', () => {
			var msg = "scene: " + this.scene.key + "--event: start " + this.sys.settings.status
			console.log(msg)
			this.globalfuncs.tempGlobalMessages.push(msg);
		})
		this.sys.events.on('transitioncomplete', () => {
			var msg = "scene: " + this.scene.key + "--event: transitioncomplete " + this.sys.settings.status
			console.log(msg)
			this.globalfuncs.tempGlobalMessages.push(msg);
		})
		this.sys.events.on('transitioninit', () => {
			var msg = "scene: " + this.scene.key + "--event: transitioninit " + this.sys.settings.status
			console.log(msg)
			this.globalfuncs.tempGlobalMessages.push(msg);
		})
		this.sys.events.on('transitionout', () => {
			var msg = "scene: " + this.scene.key + "--event: transitionout " + this.sys.settings.status
			console.log(msg)
			this.globalfuncs.tempGlobalMessages.push(msg);
		})
		this.sys.events.on('transitionstart', () => {
			var msg = "scene: " + this.scene.key + "--event: transitionstart " + this.sys.settings.status
			console.log(msg)
			this.globalfuncs.tempGlobalMessages.push(msg);
		})
		this.sys.events.on('transitionwake', () => {
			var msg = "scene: " + this.scene.key + "--event: transitionwake " + this.sys.settings.status
			console.log(msg)
			this.globalfuncs.tempGlobalMessages.push(msg);
		})
		this.sys.events.on('update', () => {
			var msg = "scene: " + this.scene.key + "--event: update " + this.sys.settings.status
			console.log(msg)
			this.globalfuncs.tempGlobalMessages.push(msg);
		})
		this.sys.events.on('wake', () => {
			var msg = "scene: " + this.scene.key + "--event: wake " + this.sys.settings.status
			console.log(msg)
			this.globalfuncs.tempGlobalMessages.push(msg);
		})
	}

	preload() {
		var msg = "scene: " + this.scene.key + "--function: preload " + this.sys.settings.status
		console.log(msg)
		this.globalfuncs.tempGlobalMessages.push(msg);
	}
	  
	create() {
		var msg = "scene: " + this.scene.key + "--function: create " + this.sys.settings.status
		console.log(msg)
		this.globalfuncs.tempGlobalMessages.push(msg);
	}
	  
	update(timeElapsed, dt) {
		var msg = "scene: " + this.scene.key + "--function: update " + this.sys.settings.status + ". framecount: " + this.framesCount
		console.log(msg)
		this.globalfuncs.tempGlobalMessages.push(msg);

		this.framesCount += 1;

		//just incase we can't stop it
		if(this.framesCount > 30)
		{
			console.log('Couldnt destroy scene within 30 frames. Destroying now.');
			this.scene.remove();
		}	
	}
}

