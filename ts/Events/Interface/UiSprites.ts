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
    
        var UiLayer = this.game.add.group();

        var AttackImage = UiLayer.create(100,1100,'Attack_Button');
        var DefendImage = UiLayer.create(260,1000,'Defend_Button');
        var PassiveImage = UiLayer.create(420,1100,'Passive_Button');

        //AttackImage.anchor.set(0.5);
        //DefendImage.anchor.set(0.5);
        //PassiveImage.anchor.set(0.5);

        AttackImage.inputEnabled = true;
        DefendImage.inputEnabled = true;
        PassiveImage.inputEnabled = true;

        AttackImage.events.onInputDown.add(this.Help,this);
        DefendImage.events.onInputDown.add(this.Help,this);
        PassiveImage.events.onInputDown.add(this.Help,this);
    }

    public Help():void{
        console.log('help')
    }

}