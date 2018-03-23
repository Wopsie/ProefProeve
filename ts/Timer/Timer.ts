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
        this.anim.LoadSpritesheet('timer','assets/animations/spritesheet_Timer.png',545,965,24);
        this.anim.LoadSpritesheet('hero','assets/sprites/spritesheet_hero_front.png',386,423,2);
        this.anim.LoadSpritesheet('condor','assets/animations/CondorSpriteSheet.png',500,500,3);
    }

    public Create(): void {
        this.anim.Create('timer',0.25,585,-50);
        this.anim.Create('condor',1,0,0,1,3);
        this.anim.Play('timer',24,true);
        this.anim.Play('condor',3,true);
    }

    public StopWatch(ms: number): void {
        setTimeout(this.Stop,ms);
    }

    private Stop(): void
    {
        console.log('Given time exceeded');       
    }
}