import 'phaser-ce';
import Animantions from "../Animations/Animations";
import { Sprite } from 'phaser-ce';

export default class Timer
{
    sprite: Phaser.Sprite;
    private anim: Animantions;
    public game: Phaser.Game;

    constructor(game: Phaser.Game)
    {
        this.game = game;
        this.anim = new Animantions(this.game);
        this.anim.LoadSpritesheet('timer','assets/sprites/spritesheet_Timer.png',545,965,24);
        this.anim.LoadSpritesheet('hero','assets/sprites/spritesheet_hero_front.png',386,423,2);
    }

    public Create(): void {
        this.anim.Create(0,590,-50,0.25,'timer');
        this.anim.Create(1,50,50,1,'hero');
        this.anim.Play('timer',24,true,false,5);
        this.anim.Play('hero',2,true,false,10);
    }

    public Update():void { 
        this.anim.Update();       
    }
}