import 'phaser-ce';
import { Sprite, RENDERTEXTURE, SPRITE } from 'phaser-ce';
import { Game } from "phaser-ce";

export default class UiManager
{
    sprite: Phaser.Sprite;
    public game: Phaser.Game;

    public AttackImage: Phaser.Sprite;
    public DefendImage: Phaser.Sprite;
    public PassiveImage: Phaser.Sprite;

    //loads in all images for the ui
    constructor(game : Phaser.Game) {
        this.game = game;
        this.game.load.image('Attack_Button', 'assets/sprites/ui/Ui_Attack.png')
        this.game.load.image('Defend_Button', 'assets/sprites/ui/Ui_Defend.png')
        this.game.load.image('Passive_Button', 'assets/sprites/ui/Ui_Avoid.png')
        
    }
    
    public create():void {
           this.CreateButtons();
           //this.DestroyButtons();
    }

    public Help():void{
        console.log('help')
    }

    //creates ui and gives functions
    public CreateButtons():void{
        var UiLayer = this.game.add.group();

        this.AttackImage = UiLayer.create(100,1100,'Attack_Button');
        this.DefendImage = UiLayer.create(260,1000,'Defend_Button');
        this.PassiveImage = UiLayer.create(420,1100,'Passive_Button');

        this.AttackImage.inputEnabled = true;
        this.DefendImage.inputEnabled = true;
        this.PassiveImage.inputEnabled = true;

        this.AttackImage.events.onInputDown.add(this.Help,this);
        this.DefendImage.events.onInputDown.add(this.Help,this);
        this.PassiveImage.events.onInputDown.add(this.Help,this);
    }

    //destroys the ui 
    public DestroyButtons():void{
        this.AttackImage.inputEnabled = false;
        this.DefendImage.inputEnabled = false;
        this.PassiveImage.inputEnabled = false;

        this.AttackImage.destroy();
        this.DefendImage.destroy();
        this.PassiveImage.destroy();
    }
}