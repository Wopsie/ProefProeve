import 'phaser-ce';
import { Sprite, Animation } from 'phaser-ce';

export default class Animations //extends Phaser.Animation
{
    /*
    public game: Phaser.Game;
    private sprite: Sprite;

    constructor(game: Phaser.Game,key: string, path: string, marginX: number, marginY: number, fps:number){
        //super(game, this.sprite, key, this.GetSpritesheet());

        this.game = game;
        this.LoadSpritesheet(key, path, marginX, marginY,fps);
    }
    

    //constructor(game : Phaser.Game, parentSprite : Sprite, key : string, path : string, marginX : number, marginY : number, fps : number){
        //super(game, parentSprite, key, new Phaser.FrameData(game, ))
    //}

    private LoadSpritesheet(key: string, path: string, marginX: number, marginY: number, fps:number): void{
        this.game.load.spritesheet(key,path,marginX,marginY,fps);

        this.sprite.animations
    }

    public Create(x: number, y: number,scale: number,key: string): void{      
        this.sprite = this.game.add.sprite(x,y, key);
        this.sprite.scale.setTo(scale);
        this.sprite.animations.add(key);        
    } 

    public Update():void{
        //check if current animation frame is last frame 

    }

    public Play(key: string, fps: number, loop: boolean,kill: boolean): void {
        this.sprite.animations.play(key,fps,loop,kill);
    }

    public Stop(key: string, reset: boolean): void{
        //this.sprite.animations.stop(key,reset);
        this.sprite.animations.getAnimation(key).destroy();
    }
    */

}