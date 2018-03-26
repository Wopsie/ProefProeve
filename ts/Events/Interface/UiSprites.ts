import 'phaser-ce';
import { Sprite, RENDERTEXTURE, SPRITE } from 'phaser-ce';
import { Game } from "phaser-ce";
import EventGenerator from '../EventGenerator';
import TileGenerator from '../../Tiles/TileGenerator';

export default class UiManager
{
    sprite: Phaser.Sprite;
    public game: Phaser.Game;
    private tileGenerator: TileGenerator;
    public AttackImage: Phaser.Sprite;
    public DefendImage: Phaser.Sprite;
    public PassiveImage: Phaser.Sprite;
    private UiLayer : Phaser.Group;

    //loads in all images for the ui
    constructor(game : Phaser.Game, t : TileGenerator) {
        this.game = game;
        this.game.load.image('Attack_Button', 'assets/sprites/ui/Ui_Attack.png');
        this.game.load.image('Defend_Button', 'assets/sprites/ui/Ui_Defend.png');
        this.game.load.image('Passive_Button', 'assets/sprites/ui/Ui_Avoid.png');
        this.tileGenerator = t;
    }
    
    public create():void {
        this.CreateButtons();
        //this.DestroyButtons();
    }

    public Help():void{
        console.log('help')
    }

    public AgressiveButtonPressed():void{
        this.tileGenerator.GetCurrentTile().event.AgressiveAction();
    }

    public DefensiveButtonPressed():void{
        this.tileGenerator.GetCurrentTile().event.DefensiveAction();
    }

    public AvoidButtonPressed():void{
        this.tileGenerator.GetCurrentTile().event.PassiveAction();
    }

    //creates ui and gives functions
    public CreateButtons():void{
        this.UiLayer = this.game.add.group();
        //create buttons
        this.AttackImage = this.UiLayer.create(5,1000,'Attack_Button');
        this.DefendImage = this.UiLayer.create(250,1000,'Defend_Button');
        this.PassiveImage = this.UiLayer.create(500,1000,'Passive_Button');
        //scale buttons
        this.AttackImage.scale.setTo(0.75,0.75);
        this.DefendImage.scale.setTo(0.75,0.75);
        this.PassiveImage.scale.setTo(0.75,0.75);
        //enable inputs
        this.AttackImage.inputEnabled = true;
        this.DefendImage.inputEnabled = true;
        this.PassiveImage.inputEnabled = true;
        //add method to event of a button press
        this.AttackImage.events.onInputDown.add(this.AgressiveButtonPressed,this);
        this.DefendImage.events.onInputDown.add(this.DefensiveButtonPressed,this);
        this.PassiveImage.events.onInputDown.add(this.AvoidButtonPressed,this);
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

    //switch buttons on and off
    public ButtonSwitch(on : boolean):void{
        on ? this.CreateButtons() : this.DestroyButtons();
    }
}