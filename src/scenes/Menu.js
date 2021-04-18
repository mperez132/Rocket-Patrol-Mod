
class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        // load audio
        this.load.audio('sfx_select', './assets/blip_select12.wav');
        this.load.audio('sfx_explosion', './assets/explosion38.wav');
        //mixkit-failure-arcade-alert-notification-240
        this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
        this.load.audio('sfx_retro', './assets/mixkit-retro-game-notification-212.wav');
        //mixkit-arcade-game-explosion-2759
        this.load.audio('sfx_retro2', './assets/mixkit-arcade-game-explosion-2759.wav');
        this.load.audio('sfx_retro1', './assets/mixkit-failure-arcade-alert-notification-240.wav');
        //mixkit-cinematic-action-suspense-688
        this.load.audio('sfx_play', './assets/mixkit-cinematic-action-suspense-688.wav');
        this.load.audio('sfx_menu', './assets/mixkit-ritual-synth-suspense-683.wav');
        this.load.image('title_menu', './assets/titlescreen.png');
    }

    create() {

        // place starfield
        this.title = this.add.tileSprite(0, 0, game.config.width, game.config.height,
            'title_menu').setOrigin(0, 0);
        //this.sound.play('sfx_menu');
        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyUP)) {
            // easy mode
            game.settings = {
                spaceshipSpeed: 3,
                gameTimer: 60000
            }
            this.sound.play('sfx_retro');
            this.scene.start('playScene');
        }
        if (Phaser.Input.Keyboard.JustDown(keyDOWN)) {
            // hard mode
            game.settings = {
                spaceshipSpeed: 4,
                gameTimer: 45000
            }
            this.sound.play('sfx_retro');
            this.scene.start('playScene');
        }
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            // easy mode
            game.settings = {
                spaceshipSpeed: 3,
                gameTimer: 60000
            }
            this.sound.play('sfx_retro');
            this.scene.start('playScene');
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            // hard mode
            game.settings = {
                spaceshipSpeed: 4,
                gameTimer: 45000
            }
            this.sound.play('sfx_retro');
            this.scene.start('playScene');
        }
    }
}