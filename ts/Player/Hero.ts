import 'phaser-ce';
import Animantions from "../Animations/Animations";
import { Sprite } from 'phaser-ce';

export default class Hero
{
    private game: Phaser.Game;
    private sprite: Sprite;
    private animations: Animantions;
    private heroBack: Animantions;
    private heroFront: Animantions;

    constructor(game: Phaser.Game)
    {
        this.game = game;
        this.animations = new Animantions(this.game);
        this.animations.LoadSpritesheet('heroBack','assets/sprites/spritesheet_hero_back.png',365,424,2);
        this.animations.LoadSpritesheet('heroFront','assets/sprites/spritesheet_hero_front.png',386,423,2);
    }

    public Create(): void {
        this.animations.Create('heroBack',0.25);
        this.animations.Create('heroFront',0.25,150);
        this.animations.Play('heroBack',2,true);
        this.animations.Play('heroFront',2,true);
    }
}