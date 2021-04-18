class UniqueShip extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, texture, frame, pointValue, timeValue) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.seconds = timeVlaue;
        this.points = pointValue;
        this.movementSpeed = 6;
    }
    update() {
        this.x -= this.movementSpeed;
        if(this.x <= 0 - this.width) {
            this.reset();
        }
    }
    reset() {
        this.x = game.config.width;
    }
}