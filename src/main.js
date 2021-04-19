//CMPM-120 ROCKET PATROL MOD/REMAKE
//Moises Perez -- mperez86@ucsc.edu

let config = { 
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [Menu, Play],
}

let game =  new Phaser.Game(config);

let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
let starSpeed = 1.5;
let menuSpeed = 0.5;
let grassSpeed = 0.3;
let HighScore = 0;
let keyF, keyR, keyLEFT, keyRIGHT, keyUP, keyDOWN;

/*
/////LIST OF ROCKET PATROL MODS/////

- Create a new spaceship type (new artwork, smaller, faster, worth more) (20)
- Replace UI border w/new artwork (10)
- Create new title screen (10)
- Introduce copy-right free music (5)
- Implement mouse control (20)
- Create new artwork for all in-game assets (20)
- Implemented parallax scrolling (10)
- 


*/