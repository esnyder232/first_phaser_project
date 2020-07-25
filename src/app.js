import Phaser from 'phaser';
import GameManagerScene from './scenes/game-manager-scene.js'

export default class App {
	constructor() {
		this.game = {};
		this.config = {};

		this.config = {
			type: Phaser.AUTO,
			physics: {
				default: 'arcade',
				debug: false,
				arcade: {
					gravity: {
						y: 300
					}
				}
			}
		}

		this.game = new Phaser.Game(this.config);
		console.log(this.game);
		this.game.scene.add('game-manager-scene', GameManagerScene, true);

		window.addEventListener("keyup", (e) => {
			console.log('keycode:' + e.keyCode);
			switch(e.keyCode) {				
				case 69: //e
					console.log('e clicked. called destroy');
					this.game.destroy(true, true);
					break;
				case 82: //r
					console.log('1 clicked. adding scene again ');
					this.game.scene.add('game-manager-scene2', GameManagerScene, true);
					break;
				case 65: //a
					console.log('a clicked. game: ');
					console.log(this.game);
					break;

			}
		})
	}	
}

//feels like a hacky way to start...oh well. Its simple atleast.
var app = new App();

