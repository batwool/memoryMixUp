export class MemoryMixUp extends Phaser.Scene {
    constructor() {
        super({ key: "MemoryMixUp" });
    }

    preload() {
        this.load.video('introVideo', 'assets/output.mp4', 'loadeddata');
        this.load.image('gameBackdrop_MMU', 'assets/background_MMU.png');

        // Cards
        this.load.image('cardOne', 'assets/cardOne.png');
    }

    create() {
        this.isGameOver = false;
        this.onIntro = true;
        this.scoreScale = 0;

        // Create and play the video
        this.introBG = this.add.video(400, 300, 'introVideo')
            .setOrigin(0.5, 0.575)
            .setScale(0.9, 0.77);
        this.introBG.play();
        this.introBG.setMute(true);

        // Create start button
        this.startButton = this.add.ellipse(430, 413, 100, 100, 0xffffff, 0)
            .setOrigin(0.8)
            .setInteractive();

        // Button click event
        this.startButton.on('pointerdown', () => {
            this.introBG.destroy();
            this.startButton.destroy();
            this.onIntro = false;

            // Add the game background
            this.add.image(-15, -70, 'gameBackdrop_MMU')
                .setOrigin(.14, -.14)
                .setScale(1.045, 1.045);

            // ✅ Corrected method call
            this.addCardSpot(190.5, 104.5);
        });
    }

    addCardSpot(x, y) {
        // Create an invisible rectangle where the card will be
        let cardSpot = this.add.rectangle(x, y, 90, 100, 0x000000, 0.2)
            .setInteractive();

        // Click to place the card
        cardSpot.on('pointerdown', () => {
            if (!this.placedCard) {
                this.placedCard = this.add.image(x, y, 'cardOne')
                    .setOrigin(0.5).setScale(1.02,1.02);
            } else {
                this.placedCard.destroy();
                this.placedCard = null;
            }
        });
    }
}
