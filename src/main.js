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
-----------LIST OF ROCKET PATROL MODS IMPLEMENTED-----------
------------------------------------------------------------
- Add your own (copyright-free) background music to the Play scene (5)
- Create a new scrolling tile sprite for the background (5)
- Create 4 new explosion SFX and randomize which one plays on impact (10)
- Replace the UI borders with new artwork (10)
- Create a new animated sprite for the Spaceship enemies (10)
- Create a new title screen (e.g., new artwork, typography, layout) (10)
- Implement parallax scrolling (10)
- Create a new spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (20)
  Implement an alternating two-player mode (20)
- Create new artwork for all of the in-game assets (rocket, spaceships, explosion) (20) 
- Implement mouse control for player movement and mouse click to fire (20)



*/