import Phaser from 'phaser';
import terrainPng from './terrain.png';
import bulletPng from './bullet.png';
import boxPng from './box.png';


var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    physics: {
        default: 'matter',
        matter: {
            enableSleeping: true,
            gravity: {
                y: 0.5
            },
            debug: {
                showBody: true,
                showStaticBody: true
            }
        }
    }
}
//global namespace
var bullet, platform, text, box;

var game = new Phaser.Game(config);

function preload(){
    this.load.image('terrain', terrainPng);
    this.load.image('bullet', bulletPng);
    this.load.image('box', boxPng);
}

function create(){

    //spawn box
    box = this.matter.add.image(400, 100, 'box');
    box.setDensity(0.005)
    //spawn platform
    platform = this.matter.add.image(350, 500, 'terrain', null, {isStatic: true});
    text = this.add.text(16, 16, 'Click to fire a bullet', {fontSize: '32px', fill: '#fff'});



    

    
    

    //input handler 
    this.input.on('pointerdown', fire);
    var context = this;

    function fire() {
        //spawn bullet
        bullet = context.matter.add.image(0, 250, 'bullet');
        console.log(bullet.isStatic());
        bullet.setVelocityX(100);
        
        
    }

    

    
    
}

function update(){
    if (bullet) {
        this.matter.overlap(bullet, box, hit, null, this);
    }
    
    function hit(a, b, collisionInfo) {
        text.setText('HIT!!');
    }
}