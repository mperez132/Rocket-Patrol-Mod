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
- Create a new spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (20)
- Create new artwork for all of the in-game assets (rocket, spaceships, explosion) (20) 
- Implement mouse control for player movement and mouse click to fire (20)
- Create 4 new explosion SFX and randomize which one plays on impact (10)
- Replace the UI borders with new artwork (10)
- Create a new animated sprite for the Spaceship enemies (10)
- Create a new title screen (e.g., new artwork, typography, layout) (10)
- Implement parallax scrolling (10)
- Add your own (copyright-free) background music to the Play scene (5)
- Create a new scrolling tile sprite for the background (5)
- Implement the 'FIRE' UI text from the original game (5)
- Create a new scrolling tile sprite for the background (5)




------------------------WORKS CITED-------------------------
------------------------------------------------------------
- Free to anyone Pixelart stamp tool for the background objects (clouds, trees, grass) -- https://www.pixilart.com/
------------ALL MUSIC AND SOUNDS BELOW ARE FROM ------------
      https://mixkit.co/free-sound-effects/video-game/

- explosion 2 -- https://assets.mixkit.co/sfx/download/mixkit-circular-object-touch-3169.wav
- mixkit-retro-game-notification-212 -- https://assets.mixkit.co/sfx/download/mixkit-retro-game-notification-212.wav
- mixkit-arcade-retro-game-over-213 -- https://assets.mixkit.co/sfx/download/mixkit-arcade-retro-game-over-213.wav
- mixkit-failure-arcade-alert-notification-240 -- https://assets.mixkit.co/sfx/download/mixkit-failure-arcade-alert-notification-240.wav
- mixkit-electronic-retro-block-hit-2185 -- https://assets.mixkit.co/sfx/download/mixkit-electronic-retro-block-hit-2185.wav
- mixkit-cinematic-action-suspense-688 -- https://assets.mixkit.co/sfx/download/mixkit-cinematic-action-suspense-688.wav
- mixkit-arcade-retro-game-over-213 -- https://assets.mixkit.co/sfx/download/mixkit-arcade-retro-game-over-213.wav
- mixkit-arcade-game-explosion-2759 -- https://assets.mixkit.co/sfx/download/mixkit-arcade-game-explosion-2759.wav
- mixkit-ritual-synth-suspense-683 -- https://assets.mixkit.co/sfx/download/mixkit-ritual-synth-suspense-683.wav
- gameover -- https://assets.mixkit.co/sfx/download/mixkit-arcade-game-over-3068.wav
- explosion1 -- https://assets.mixkit.co/sfx/download/mixkit-arcade-retro-changing-tab-206.wav
*/