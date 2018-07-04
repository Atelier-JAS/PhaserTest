var App = function() {};

App.prototype.start = function()
{
	// Scenes
	var scenes = [];
	
	scenes.push(Demo);
	//scenes.push(PreloadScene);
	//scenes.push(IntroScene);
	
	// Game config
    var config = {
        type: Phaser.AUTO,
        parent: 'phaser-example',
        width: 800,
        height: 600,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 200 }
            }
        },
        scene: scenes
    };
	
	// Create game app
	var game = new Phaser.Game(config);
	
	// Globals
	game._URL = 'https://Atelier-JAS.github.io/PhaserTest';	// this.sys.game._URL
	game._USER_ID = 0;
	
	game._CONFIG = config;
};