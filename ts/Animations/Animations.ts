import 'phaser-ce';
import { Sprite, Animation, AnimationManager } from 'phaser-ce';
import Timer from '../Timer/Timer';
import { NumericDictionary } from 'lodash';

export default class Animations //extends Phaser.Animation
{
    public game: Phaser.Game;
    private sprite: Sprite;
    private timer: Timer;
    public spriteArray: Sprite[] = new Array<Sprite>();
    private anim: Animation;
    public animArray: Animation[] = new Array<Animation>();
    
    constructor(game: Phaser.Game){
        this.game = game;
    }


    public LoadSpritesheet(key: string, path: string, marginX: number, marginY: number, fps:number): void {
        this.game.load.spritesheet(key,path,marginX,marginY,fps);
    }

    public Create(key: string,scale: number, X: number = 0, Y: number = 0, frameBegin: number = 0,frameEnd: number = 0): void {    
        this.sprite = this.game.add.sprite(X,Y,key);
        this.sprite.scale.setTo(scale);
        this.sprite.animations.add(key,this.FillRange(frameBegin,frameEnd));
        this.spriteArray.push(this.sprite);
        this.anim = this.sprite.animations.getAnimation(key);
        this.animArray.push(this.anim);
    }

    public Play(key: string, fps: number, loop: boolean,kill:boolean): void {
        var i = this.SearchKey(key);
        this.animArray[i].play(fps,loop,kill);
    }

    public Stop(key: string): void {
        var i = this.SearchKey(key);
        this.animArray[i].stop();
    }

    private SearchKey(key: string): number 
    {
        for (let index = 0; index < this.spriteArray.length; index++) {
            if(this.spriteArray[index].key == key)
            {
                return index;
            }    
        }
    }

    public SearchFrame(key: string): Sprite
    {
        for (let index = 0; index < this.spriteArray.length; index++) {
            if(this.spriteArray[index].key == key)
            {
                return this.spriteArray[index];
            }    
        }
    }

    private FillRange(frameBegin: number, frameEnd: number): number[]
    {
        var a = new Array();
        for (let index = frameBegin; index < frameEnd; index++) {
            a.push(index);            
        }
        return a;
    }

}