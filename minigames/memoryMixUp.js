export class MemoryMixUp extends Phaser.Scene {
    constructor() {
        super({ key: "MemoryMixUp" });
    }

        preload() {
            this.load.image('intro_scene_MemoryMixUp', 'assets/introScene_MemoryMixUp.png');
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
        this.introBG = this.add.image(-4, 0, 'intro_scene_MemoryMixUp').setOrigin(0).setScale(1.008, 1.008);
    }
}