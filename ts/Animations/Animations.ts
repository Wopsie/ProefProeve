import 'phaser-ce';
import { Sprite, Animation, AnimationManager } from 'phaser-ce';

export default class Animations //extends Phaser.Animation
{
    public game: Phaser.Game;
    private sprite: Sprite;
    private spriteArray: Sprite[] = new Array<Sprite>();
    private anim: Animation;
    private animArray: Animation[] = new Array<Animation>();
    constructor(game: Phaser.Game){
        this.game = game;
    }


    public LoadSpritesheet(key: string, path: string, marginX: number, marginY: number, fps:number): void {
        this.game.load.spritesheet(key,path,marginX,marginY,fps);
    }

    public Create(i: number,X: number, Y: number,scale: number,key: string): void {    
        this.sprite = this.game.add.sprite(X,Y,key);
        console.log(this.sprite);
        this.sprite.scale.setTo(scale);
        this.sprite.animations.add(key);
        this.spriteArray[i] = this.sprite;
        this.anim = this.sprite.animations.getAnimation(key);
        this.animArray[i] = this.anim;
        console.log(this.spriteArray.map);
    } 

    public Update():void {
        
    }

    public Play(key: string, fps: number, loop: boolean,kill: boolean,loopAmount: number): void {
        var i = this.SearchKey(key);
        this.animArray[i].play(fps,true,false);
        if(loopAmount === 0)
        {
            return;
        }
        else if(this.animArray[i].loopCount >= loopAmount)
        {
            this.animArray[i].stop();
        }
    }

    public Stop(): void {
    }

    public SearchKey(key: string): number 
    {
        for (let index = 0; index < this.spriteArray.length; index++) {
            if(this.spriteArray[index].key == key)
            {
                return index;
            }    
        }
    }
}