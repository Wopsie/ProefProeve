import 'phaser-ce';
import Animations from "../Animations/Animations";
import { Sprite } from 'phaser-ce';

export default class Hero
{
    private game : Phaser.Game;
    private spritePoses : Sprite[];
    private anim : Animations;

    constructor(game: Phaser.Game)
    {
        this.game = game;
        this.anim = new Animations(this.game);
        this.anim.LoadSpritesheet('heroBack','assets/sprites/spritesheet_hero_back.png',365,424,2);
        this.anim.LoadSpritesheet('heroFront','assets/sprites/spritesheet_hero_front.png',386,423,2);
    }
}