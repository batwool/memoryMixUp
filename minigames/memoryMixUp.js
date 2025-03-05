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
                start: 1,
                end: 336, // Adjust this based on your actual frame count
                zeroPad: 4, // Adjust for 4 digits, matching the '0001' format
                prefix: 'output_frame_', // Match the filenames in the JSON
                suffix: '.png' // Ensure it matches the extension in the JSON
            }),
            frameRate: 10,
            repeat: -1,
        });
        
        

        // Start the intro screen
        this.showIntro();
    }

    /* ------------------------------------------------
    * INTRO SCREEN
    * ------------------------------------------------ */
    showIntro() {
        this.introBG = this.add.sprite(400, 300, 'spritesheet0');
        this.introBG.setOrigin(0.5, 0.5);  // Center it properly
        this.introBG.setScale(0.5);  // Adjust the scale (you can tweak the value)
    
        // Play the intro animation
        this.introBG.play('introAnimation');
    }
    
    
}
