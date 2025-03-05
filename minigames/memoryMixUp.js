export class MemoryMixUp extends Phaser.Scene {
    constructor() {
        super({ key: "MemoryMixUp" });
    }

    preload() {
        // Load the video file
        this.load.video('introVideo', 'assets/output.mp4');
    }

    create() {
        // Create and play the video
        this.introBG = this.add.video(400, 300, 'introVideo');  
        this.introBG.setOrigin(0.5, 0.5).setScale(0.5,0.5);
        this.introBG.play(true); // True = loop the video
    }
}
