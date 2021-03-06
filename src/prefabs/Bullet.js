//CMPM-120 ROCKET PATROL MOD/REMAKE
//Moises Perez -- mperez86@ucsc.edu
class Bullet extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        this.sfxBullet = scene.sound.add('sfx_bullet');
        scene.add.existing(this);
        this.movementSpeed = 2;
        this.isFiring = false;
    }
    update() {
        if(!this.isFiring){
            if(game.settings.mouse) {
                this.x = game.input.mousePointer.x;
                if(game.input.activePointer.isDown && !this.isFiring) {
                    this.isFiring = true;
                    this.sfxBullet.play();
                }
                this.x = Phaser.Math.Clamp(this.x, borderUISize + borderPadding,
                    game.config.width - borderUISize - borderPadding);
            }
            else {
                if(keyLEFT.isDown && this.x >= borderUISize + this.width) {
                    this.x -= this.movementSpeed;
                }
                else if(keyRIGHT.isDown && this.x <= game.config.width - 
                    borderUISize - this.width) {
                        this.x += this.movementSpeed;
                }
                if(Phaser.Input.Keyboard.JustDown(keyF) && !this.isFiring) {
                    this.isFiring = true;
                    this.sfxBullet.play();
                }
                this.x = Phaser.Math.Clamp(this.x, borderUISize + borderPadding,
                    game.config.width - borderUISize - borderPadding);
            }
        }
        if(this.isFiring && this.y >= borderUISize * 3 + borderPadding) {
            this.y -= this.movementSpeed;
         }
        if(this.y <= borderUISize * 3 + borderPadding) {
            this.reset();
        }
    }
    reset() {
        this.isFiring = false;
    }
    /*if(!this.isFiring) {
        if(keyLEFT.isDown && this.x >= borderUISize + this.width) {
            this.x -= this.movementSpeed;
        }
        else if(keyRIGHT.isDown && this.x <= game.config.width - 
            borderUISize - this.width) {
                this.x += this.movementSpeed;
        }
    }
    if(Phaser.Input.Keyboard.JustDown(keyF) && !this.isFiring) {
        this.isFiring = true;
        this.sfxBullet.play();
    }
    if(this.isFiring && this.y >= borderUISize * 3 + borderPadding) {
        this.y -= this.movementSpeed;
    }*/
}