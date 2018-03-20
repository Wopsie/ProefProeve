import 'phaser-ce';
import { Sprite } from 'phaser-ce';
import { Game } from "phaser-ce";

export default class UiManager
{
    sprite: Phaser.Sprite;
    public game: Phaser.Game;

    constructor(game : Phaser.Game) {
        this.game = game;
        this.game.load.image('Attack_Button', 'assets/sprites/ui/Ui_Attack.png')
        this.game.load.image('Defend_Button', 'assets/sprites/ui/Ui_Defend.png')
        this.game.load.image('Passive_Button', 'assets/sprites/ui/Ui_Passive.png')
    }
    
    public create():void {
    
        this.game.add.sprite(100,100,'Attack_Button');
        this.game.add.sprite(100,100,'Defend_Button');
        this.game.add.sprite(100,100,'Passive_Button');
        //  This simply creates a sprite using the mushroom image we loaded above and positions it at 200 x 200
        //var test = game.add.sprite(200, 200, 'mushroom');
    
    }

}