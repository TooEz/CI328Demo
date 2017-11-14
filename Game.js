var game = new Phaser.Game(1024,1024, Phaser.AUTO, 'phaser-demo', {preload: preload, create: create, update: update, render: render});

var player;
var starfield;

function preload() {
    game.load.image('starfield', 'assets/images/Game_bg_space.png');
    game.load.image('ship', 'assets/images/ship10.png');
}

function create() {
    //  The scrolling starfield background
    starfield = game.add.tileSprite(0, 0, 1024, 1024, 'starfield');

    //  The hero!
    player = game.add.sprite(400, 500, 'ship');
    player.anchor.setTo(0.5, 0.5);
}

function update() {
 //  Scroll the background
    starfield.tilePosition.x += 2;
}

function render() {

}
