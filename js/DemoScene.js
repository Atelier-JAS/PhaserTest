var DemoScene = new Phaser.Scene('Demo');

DemoScene.preload = function()
{
	'use strict';
    this.load.setBaseURL('https://Atelier-JAS.github.io/PhaserTest');

    this.load.image('sky', 'assets/space3.png');
    this.load.image('logo', 'assets/phaser3-logo.png');
    this.load.image('red', 'assets/red.png');
};

DemoScene.create= function()
{
	'use strict';
    this.add.image(400, 300, 'sky');

    var particles = this.add.particles('red');

    var emitter = particles.createEmitter({
        speed: 100,
        scale: { start: 1, end: 0 },
        blendMode: 'ADD'
    });

    var logo = this.physics.add.image(400, 100, 'logo');

    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    emitter.startFollow(logo);
};

DemoScene.update= function()
{
	'use strict';
	
	// ...
};