//a generic template for a tile
//this holds all the art and properties of the tile
import 'phaser-ce';
import { Biomes, TileState } from './TileGenerator';
import iEvent from '../Events/Interface/iEvent';
import EventTemplate from '../Events/EventTemplate';
import { Sprite } from 'phaser-ce';
export default class Tile extends Phaser.Image{

    public biome : Biomes;
    public event : iEvent;
    public eventTileSprite : Sprite;
    public inPosition : boolean;
    private tileState : TileState;
    public offScreenSignal : Phaser.Signal;

    private tweenUp : Phaser.Tween;
    private tweenDown : Phaser.Tween;

    constructor(pGame : Phaser.Game, biomeType : Biomes){
        let tileArt;
        switch(biomeType){
            case 0:
                tileArt = "forestWalkSprite";
                break;
            case 1:
                tileArt = "desertWalkSprite";
                break;
            case 2:
                tileArt = "mountainWalkSprite";
                break;
        }

        super(pGame, 0, 0, tileArt);
        //this puts the sprite on screen

        this.offScreenSignal = new Phaser.Signal();

        this.eventTileSprite = pGame.add.sprite(80, 1280, tileArt);
        this.biome = biomeType;
        this.tileState = TileState.movingUp;
    }

    public SetTileState(state : TileState):void{
        this.tileState = state;
    }

    // tweenA = game.add.tween(spriteA).to( { x: 600 }, 2000, "Quart.easeOut");

    //responsible for 'animating' the tiles
    public MoveTile():void{
        //check what the sprite should be doing
        if(this.tileState == TileState.movingUp){
            //did the sprite get to the set position yet
            if(this.eventTileSprite.y > 700){
                if(this.tweenUp == null)
                    this.tweenUp = this.game.add.tween(this.eventTileSprite).to({y: 700}, 1500, "Quart.easeOut");
                else
                    this.tweenUp.start();
            }else{ //wait untill event has been completed
                console.log('sprite reached high destination');
                this.tileState = TileState.waiting;
                this.event.StartEvent();
            }
        }else if(this.tileState == TileState.movingDown){
            if(this.eventTileSprite.y < 1350){
                if(this.tweenDown == null)
                    this.tweenDown = this.game.add.tween(this.eventTileSprite).to({y: 1350}, 500, "Quart.easeOut");
                else    
                    this.tweenDown.start();
            }else{
                console.log('sprite reached low destination');
                //this.tileState = TileState.movingUp;
                
                //send shit to create the next sprite
                this.offScreenSignal.dispatch();
            }
        }
    }

    public UpdateTile():void{
        if(this.tileState != TileState.waiting){
            //console.log('not waiting');
            this.MoveTile();
        }
    }
}