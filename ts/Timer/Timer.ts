import 'phaser-ce';
import Animantions from "../Animations/Animations";
import { Sprite } from 'phaser-ce';

export default class Clock
{
    sprite: Phaser.Sprite;
    private anim: Animantions;
    public game: Phaser.Game;

    constructor(game: Phaser.Game)
    {
        this.game = game;
        //this.anim = new Animantions(this.game,'timer','../../assets/sprites/spritesheet_Timer.png',545,965,24);

        game.load.spritesheet('timer', '../../assets/sprites/spritesheet_Timer.png', 545,965,24);
    }

    public Create(): void
    {
        this.sprite = this.game.add.sprite(24, 0, 'timer');
        this.sprite.animations.add('timer');

        this.sprite.animations.play('timer', 24,true,false);

        //this.sprite.visible = false;
        //this.anim.Create(0,0,0.5,'timer');
        //this.anim.Play('timer',24,false,true);
        //this.anim.Stop('timer',true);
    }

    public Update():void{
        //console.log(this.sprite.animations.currentFrame.index);
        if(this.sprite.animations.currentFrame.index == 23){
           // this.sprite.animations.play('timer', 24,false,true);
           //this.sprite.animations.getAnimation('timer').destroy();
           //this.sprite.animations.destroy();
           console.log("STOP NOU");
           
           this.sprite.animations.stop();
            this.sprite.visible = false;
        }
        
    }
}