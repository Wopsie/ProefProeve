import 'phaser-ce';
import Gameplay from '../States/Gameplay';
import { Game, Sprite } from 'phaser-ce';

export default class Animations
{
    public game: Phaser.Game = new Phaser.Game();
    private sprite: Sprite;

    public preload(): void
    {  
          
    }        
    

    public create(): void
    {         
        this.game.add.sprite(0,0,'timer');
        //this.sprite = this.game.add.sprite(40, 100, 'timer');
        //this.sprite.animations.add('walk');
        //this.sprite.animations.play('walk', 50, true);
    } 
}