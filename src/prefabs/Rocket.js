class Rocket extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.movementSpeed = 2;
        this.isFiring = false;
    }
    update() {
        if(game.settings.mouse) {
            this.x = game.input.mousePointer.x;
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
            this.x = Phaser.Math.Clamp(this.x, borderUISize + borderPadding,
            game.config.width - borderUISize - borderPadding);
        }
    }
    reset() {
        this.y = game.config.height - borderUISize - borderPadding;
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
        }
        if(this.isFiring && this.y >= borderUISize * 3 + borderPadding) {
            this.y -= this.movementSpeed;
        }
        if(this.y <= borderUISize * 3 + borderPadding) {
            this.reset();
        }*/
}