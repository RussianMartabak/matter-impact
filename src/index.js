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


var game = new Phaser.Game(config);

function preload(){
    this.load.image('terrain', terrainPng);
    this.load.image('bullet', bulletPng);
    this.load.image('box', boxPng);
}

function create(){

    //spawn box
    this.matter.add.image(500, 100, 'box');
    //spawn platform
    this.matter.add.image(350, 500, 'terrain', null, {isStatic: true});
}

function update(){

}