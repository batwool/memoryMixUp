export class MemoryMixUp extends Phaser.Scene {
    constructor() {
        super({ key: "MemoryMixUp" });
    }

    preload() {
        // Load all sprite sheets with different keys
        this.load.atlas('spritesheet0', 'assets/introScene_memoryMixUp-0.png', 'assets/introScene_memoryMixUp.json');
        this.load.atlas('spritesheet1', 'assets/introScene_memoryMixUp-1.png', 'assets/introScene_memoryMixUp.json');
        this.load.atlas('spritesheet2', 'assets/introScene_memoryMixUp-2.png', 'assets/introScene_memoryMixUp.json');
        this.load.atlas('spritesheet3', 'assets/introScene_memoryMixUp-3.png', 'assets/introScene_memoryMixUp.json');
        this.load.atlas('spritesheet4', 'assets/introScene_memoryMixUp-4.png', 'assets/introScene_memoryMixUp.json');
        this.load.atlas('spritesheet5', 'assets/introScene_memoryMixUp-5.png', 'assets/introScene_memoryMixUp.json');
        this.load.atlas('spritesheet6', 'assets/introScene_memoryMixUp-6.png', 'assets/introScene_memoryMixUp.json');
        this.load.atlas('spritesheet7', 'assets/introScene_memoryMixUp-7.png', 'assets/introScene_memoryMixUp.json');
        this.load.atlas('spritesheet8', 'assets/introScene_memoryMixUp-8.png', 'assets/introScene_memoryMixUp.json');
        this.load.atlas('spritesheet9', 'assets/introScene_memoryMixUp-9.png', 'assets/introScene_memoryMixUp.json');
        this.load.atlas('spritesheet10', 'assets/introScene_memoryMixUp-10.png', 'assets/introScene_memoryMixUp.json');
        this.load.atlas('spritesheet11', 'assets/introScene_memoryMixUp-11.png', 'assets/introScene_memoryMixUp.json');
        this.load.atlas('spritesheet12', 'assets/introScene_memoryMixUp-12.png', 'assets/introScene_memoryMixUp.json');
        this.load.atlas('spritesheet13', 'assets/introScene_memoryMixUp-13.png', 'assets/introScene_memoryMixUp.json');
        this.load.atlas('spritesheet14', 'assets/introScene_memoryMixUp-14.png', 'assets/introScene_memoryMixUp.json');
        this.load.atlas('spritesheet15', 'assets/introScene_memoryMixUp-15.png', 'assets/introScene_memoryMixUp.json');
        this.load.atlas('spritesheet16', 'assets/introScene_memoryMixUp-16.png', 'assets/introScene_memoryMixUp.json');
        this.load.atlas('spritesheet17', 'assets/introScene_memoryMixUp-17.png', 'assets/introScene_memoryMixUp.json');
        this.load.atlas('spritesheet18', 'assets/introScene_memoryMixUp-18.png', 'assets/introScene_memoryMixUp.json');
    }

    create() {
        // Create an animation from the frames in the sprite sheet
        this.anims.create({
            key: 'introAnimation',
            frames: this.anims.generateFrameNames('spritesheet0', {
                start: 0,
                end: 336, // Frame count minus 1 (0-indexed)
                zeroPad: 4, // Zero padding for the frame numbers (e.g. frame0000, frame0001, etc.)
                prefix: 'frame', // Prefix of the frame filenames
            }),
            frameRate: 10, // Adjust frame rate as needed
            repeat: -1, // Set to -1 for infinite looping
        });

        // Start the intro screen
        this.showIntro();
    }

    /* ------------------------------------------------
    * INTRO SCREEN
    * ------------------------------------------------ */
    showIntro() {
        // You need to select a specific spritesheet for intro
        this.introBG = this.add.sprite(400, 300, 'spritesheet0');  // Assuming you want to start with spritesheet0
        this.introBG.setOrigin(0).setScale(1.008, 1.008);  // Adjust position and scale if needed
        
        // Play the intro animation
        this.introBG.play('introAnimation');
    }
}
