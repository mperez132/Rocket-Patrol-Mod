
class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }
    preload() {
        // load images/tile sprites
        this.load.image('rocket', './assets/rocket.png');
        this.load.image('spaceship', './assets/spaceship.png');
        this.load.image('starfield', './assets/starfield.png');
        this.load.image('bullet', './assets/bullet.png');
        this.load.image('UI', './assets/UIborder.png');
        this.load.image('newFighter', './assets/NewFighter.png');
        this.load.audio('sfx_menu', './assets/mixkit-ritual-synth-suspense-683.wav');
        //mixkit-failure-arcade-alert-notification-240
        // load spritesheet
        this.load.spritesheet('explosion', './assets/explosion.png', {
            frameWidth: 64,
            frameHeight: 32,
            startFrame: 0,
            endFrame: 9
        });
    }

    create() {
        // place starfield
        this.starfield = this.add.tileSprite(0, 0, game.config.width, game.config.height,
        'starfield').setOrigin(0, 0);
        this.ground = this.add.tileSprite(0, 0, game.config.width, game.config.height,
            'grass').setOrigin(0, 0);

        let music = this.sound.add('sfx_menu');
        music.volume = 0.05;
        music.loop = true;
        music.play();
        
        // green UI background
        this.add.rectangle(0, borderUISize + borderPadding -15, game.config.width,
        borderUISize * 2.3, 0x004000).setOrigin(0, 0);
        // white borders
        //this.add.rectangle(0, 0, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0, 0);
        //this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0, 0);
        //this.add.rectangle(0, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0, 0);
        //this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0, 0);

        //add bullet 
        this.p1Bullet = new Bullet(this, game.config.width/2, game.config.height - 
        borderUISize - borderPadding, 'bullet').setOrigin(0.5, 0);

        // add rocket (player 1)
        this.p1Rocket = new Rocket(this, game.config.width/2, game.config.height - 
        borderUISize - borderPadding, 'rocket').setOrigin(0.5, 0);

        // add spaceship (x3)
        this.ship01 = new Ship(this, game.config.width + borderUISize * 6, borderUISize * 4, 'spaceship', 0, 30).setOrigin(0, 0);
        this.ship02 = new Ship(this, game.config.width + borderUISize * 3, borderUISize * 7, 'spaceship', 0, 20).setOrigin(0, 0);
        this.ship03 = new UniqueShip(this, game.config.width, borderUISize * 6 + borderPadding * 4, 'newFighter', 0, 10).setOrigin(0, 0);
        this.ship04 = new UniqueShip(this, game.config.width + borderUISize * 3 , borderUISize * 5, 'newFighter', 0, 20).setOrigin(0, 0);

        this.UI = this.add.tileSprite(0, 0, game.config.width, game.config.height,
        'UI').setOrigin(0, 0);

        // define keys
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        
        // animation config
        this.anims.create({
            key: 'explode',
            frames: this.anims.generateFrameNumbers('explosion', {
                start: 0,
                end: 9,
                first: 0
            }),
            frameRate: 30
        });

        // initialize score
        this.p1Score = 0;

        // display score
        let scoreConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#FF0000',
            color: '#FFFFFF',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 100
        }
        this.scoreLeft = this.add.text(borderUISize + borderPadding, borderUISize
        + borderPadding * 2, this.p1Score, scoreConfig);

        // GAME OVER flag
        this.gameOver = false;

        // 60-second play clock
        scoreConfig.fixedWidth = 0;
        this.clock = this.time.delayedCall(game.settings.gameTimer, () => {
            this.add.text(game.config.width/2, game.config.height/2, 'GAME OVER', scoreConfig).setOrigin(0.5);
            this.add.text(game.config.width/2, game.config.height/2 + 64, 'Press (R) to Restart or ← for Menu',
            scoreConfig).setOrigin(0.5);
            this.gameOver = true;
        }, null, this);
    }

    update() {
        // check key input for restart
        if (this.gameOver && Phaser.Input.Keyboard.JustDown(keyR)) {
            this.scene.restart();
        }

        if (this.gameOver && Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            this.scene.start("menuScene");
        }

        this.starfield.tilePositionX -= starSpeed;
        this.ground.tilePositionX -= grassSpeed;

        if (!this.gameOver) {
            this.p1Bullet.update();         // update bullet sprite
            this.p1Rocket.update();
            this.ship01.update();           // update spaceships (x3)
            this.ship02.update();
            this.ship03.update();   
            this.ship04.update(); 
        }
        if(this.p1Bullet.y <= borderUISize * 3 + borderPadding) {
            this.p1Bullet.reset();
            this.p1Bullet.x = this.p1Rocket.x;
            this.p1Bullet.y = this.p1Rocket.y;
        }
        // check collisions
        if(this.checkCollision(this.p1Bullet, this.ship04)) {
            this.p1Bullet.reset();
            this.ship04.movementSpeed += 0.2;
            this.p1Bullet.x = this.p1Rocket.x;
            this.p1Bullet.y = this.p1Rocket.y;
            this.UniqueShipExplode(this.ship04);
        }
        if(this.checkCollision(this.p1Bullet, this.ship03)) {
            this.p1Bullet.reset();
            this.ship03.movementSpeed += 0.2;
            this.p1Bullet.x = this.p1Rocket.x
            this.p1Bullet.y = this.p1Rocket.y;
            this.UniqueShipExplode(this.ship03);
        }
        if(this.checkCollision(this.p1Bullet, this.ship02)) {
            this.p1Bullet.reset();
            this.ship02.movementSpeed += 0.3;
            this.p1Bullet.x = this.p1Rocket.x
            this.p1Bullet.y = this.p1Rocket.y;
            this.shipExplode(this.ship02);
        }
        if(this.checkCollision(this.p1Bullet, this.ship01)) {
            this.p1Bullet.reset();
            this.ship01.movementSpeed += 0.3;
            this.p1Bullet.x = this.p1Rocket.x
            this.p1Bullet.y = this.p1Rocket.y;
            this.shipExplode(this.ship01);
        }
    }

    checkCollision(bullet, ship) {
        // simple AABB checking
        if( bullet.x < ship.x + ship.width &&
            bullet.x + bullet.width > ship.x &&
            bullet.y < ship.y + ship.height &&
            bullet.height + bullet.y > ship.y) {
                return true;
        } else {
            return false;
        }
            
    }

    UniqueShipExplode (ship) {
         // temporarily hide ship
         ship.alpha = 0;
         // create explosion sprite at ship's position
         let boom = this.add.sprite(ship.x, ship.y, 'explosion').setOrigin(0, 0);
         boom.anims.play('explode');             // play explode animation
         boom.on('animationcomplete', () => {    // callback after anim completes
             ship.reset();                       // reset ship position
             ship.alpha = 1;                     // make ship visible again
             boom.destroy();                     // remove explosion sprite
         });
         // score add and repaint
         this.p1Score += ship.points + 20;
         this.scoreLeft.text = this.p1Score;
         this.sound.play('sfx_retro1')
    }
    shipExplode(ship) {
        // temporarily hide ship
        ship.alpha = 0;
        // create explosion sprite at ship's position
        let boom = this.add.sprite(ship.x, ship.y, 'explosion').setOrigin(0, 0);
        boom.anims.play('explode');             // play explode animation
        boom.on('animationcomplete', () => {    // callback after anim completes
            ship.reset();                       // reset ship position
            ship.alpha = 1;                     // make ship visible again
            boom.destroy();                     // remove explosion sprite
        });
        // score add and repaint
        this.p1Score += ship.points;
        this.scoreLeft.text = this.p1Score;
        this.sound.play('sfx_retro2')
    }
    
}