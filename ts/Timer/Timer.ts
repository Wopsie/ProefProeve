import 'phaser-ce';
import { Sprite } from 'phaser-ce';
import Animations from '../Animations/Animations';

export default class Timer
{
    sprite: Phaser.Sprite;
    private anim: Animations;
    public game: Phaser.Game;

    constructor(game: Phaser.Game, anim : Animations)
    {
        this.game = game;
        this.anim = anim;
        this.anim.LoadSpritesheet('timer','assets/animations/TimerSpritesheet.png',545,965,24);
    }

    public Create(): void {
        this.anim.Create('timer',0.25,585,-50);
    }

    public PlayTimer(AmountMS: number){
        var fps = 24 / (AmountMS / 1000);
        this.anim.Play('timer',fps,false,false);
    }

    public StopTimer(): void 
    {
        this.anim.animArray[this.anim.SearchKey('timer')].stop();
        this.anim.animArray.splice(this.anim.SearchKey('timer'),1);
    }

    public Wait(ms : number, func : Function): void
    {
        this.game.time.events.add(ms,func,this);
    }

    private Stop(): void
    {
        console.log('Given time exceeded');       
    }
}