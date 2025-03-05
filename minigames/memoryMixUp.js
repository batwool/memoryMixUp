export class MemoryMixUp extends Phaser.Scene {
    constructor() {
        super({ key: "MemoryMixUp" });
    }

    preload() {
        // Load the single JSON file and all sprite sheets in one go
        this.load.atlas('spritesheets', 'assets/introScene_memoryMixUp-0.png', 'assets/introScene_memoryMixUp.json');
        this.load.atlas('spritesheets', 'assets/introScene_memoryMixUp-1.png', 'assets/introScene_memoryMixUp.json');
        this.load.atlas('spritesheets', 'assets/introScene_memoryMixUp-2.png', 'assets/introScene_memoryMixUp.json');
        this.load.atlas('spritesheets', 'assets/introScene_memoryMixUp-3.png', 'assets/introScene_memoryMixUp.json');
        this.load.atlas('spritesheets', 'assets/introScene_memoryMixUp-4.png', 'assets/introScene_memoryMixUp.json');
        this.load.atlas('spritesheets', 'assets/introScene_memoryMixUp-5.png', 'assets/introScene_memoryMixUp.json');
        this.load.atlas('spritesheets', 'assets/introScene_memoryMixUp-6.png', 'assets/introScene_memoryMixUp.json');
        this.load.atlas('spritesheets', 'assets/introScene_memoryMixUp-7.png', 'assets/introScene_memoryMixUp.json');
        this.load.atlas('spritesheets', 'assets/introScene_memoryMixUp-8.png', 'assets/introScene_memoryMixUp.json');
        this.load.atlas('spritesheets', 'assets/introScene_memoryMixUp-9.png', 'assets/introScene_memoryMixUp.json');
        this.load.atlas('spritesheets', 'assets/introScene_memoryMixUp-10.png', 'assets/introScene_memoryMixUp.json');
        this.load.atlas('spritesheets', 'assets/introScene_memoryMixUp-11.png', 'assets/introScene_memoryMixUp.json');
        this.load.atlas('spritesheets', 'assets/introScene_memoryMixUp-12.png', 'assets/introScene_memoryMixUp.json');
        this.load.atlas('spritesheets', 'assets/introScene_memoryMixUp-13.png', 'assets/introScene_memoryMixUp.json');
        this.load.atlas('spritesheets', 'assets/introScene_memoryMixUp-14.png', 'assets/introScene_memoryMixUp.json');
        this.load.atlas('spritesheets', 'assets/introScene_memoryMixUp-15.png', 'assets/introScene_memoryMixUp.json');
        this.load.atlas('spritesheets', 'assets/introScene_memoryMixUp-16.png', 'assets/introScene_memoryMixUp.json');
        this.load.atlas('spritesheets', 'assets/introScene_memoryMixUp-17.png', 'assets/introScene_memoryMixUp.json');
        this.load.atlas('spritesheets', 'assets/introScene_memoryMixUp-18.png', 'assets/introScene_memoryMixUp.json');
    }

    create() {
        // Start with Intro
        this.currentMode = 'intro';
        this.showIntro();
    }

    /* ------------------------------------------------
    * INTRO SCREEN
    * ------------------------------------------------ */
    showIntro() {
        this.introBG = this.add.image(-4, 0, 'spritesheets').setOrigin(0).setScale(1.008, 1.008);
    }
}
