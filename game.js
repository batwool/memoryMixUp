
import { MemoryMixUp } from './minigames/memoryMixUp.js';

const config = {
    type: Phaser.AUTO,
    parent: 'game-container',
    width: 800,
    height: 520,
    // All scenes
    scene: [
        MemoryMixUp
    ],
};

const game = new Phaser.Game(config);

const canvas = game.canvas;
const ctx = canvas.getContext('2d', { willReadFrequently: true });