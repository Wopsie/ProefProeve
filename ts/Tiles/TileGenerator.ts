//this class creates new tiles when a new one needs to be put on screen
//it then pushes it to the screen, eventually with a lil juicy, screenshaking animation
//a max of 2 tiles are in memory at a given time
import 'phaser-ce';
import Tile from '../Tiles/Tile';
import EventGenerator from '../Events/EventGenerator';
import { Math } from 'phaser-ce';
import Globals from '../States/Globals';
import Timer from '../Timer/Timer';

export enum Biomes{
    forest = 0,
    desert,
    mountain,
};

export enum TileState{
    movingUp = 0,
    waiting,
    movingDown,
};

export default class TileGenerator{
    private gameVar: Phaser.Game;
    private currentTileIdx: number;
    private currentTile: Tile;
    private nextTile: Tile;
    private tileImages: Phaser.Loader[] = [];
    private tilePropImages: Phaser.Loader[] = [];
    private eventGenerator : EventGenerator;
    private nextBiome : Biomes;
    public uiButtonSwitchSignal : Phaser.Signal = new Phaser.Signal();

    constructor(pGame : Phaser.Game, timer : Timer){
        //create one tile to come after the titlescreen has passed
        this.gameVar = pGame;
        this.eventGenerator = new EventGenerator(this.gameVar,this,timer);
        this.LoadTileAssets();
    }

    //load the sprites of the tiles and props related to them
    public LoadTileAssets():void{
        this.tileImages.push(this.gameVar.load.image('forestWalkSprite', '../../assets/sprites/Forest_Walk_Tile.png'));
        this.tileImages.push(this.gameVar.load.image('forestBGSprite', '../../assets/sprites/Forest_BG_Tile.png'));
        this.tileImages.push(this.gameVar.load.image('forestToDesertSprite', '../../assets/sprites/Trans_Forest_to_Desert.png'));
        this.tileImages.push(this.gameVar.load.image('desertToForestSprite', '../../assets/sprites/Trans_Desert_to_Forest.png'));
        this.tileImages.push(this.gameVar.load.image('desertWalkSprite', '../../assets/sprites/Desert_Walk_Tile.png'));
        this.tileImages.push(this.gameVar.load.image('desertBGSprite', '../../assets/sprites/Desert_BG_Tile.png'));
        this.tileImages.push(this.gameVar.load.image('mountainWalkSprite', '../../assets/sprites/Mountain_Walk_Tile.png'));
        this.tileImages.push(this.gameVar.load.image('mountainBGSprite', '../../assets/sprites/Mountain_BG_Tile.png'));
        this.tileImages.push(this.gameVar.load.image('MountainToForestSprite', '../../assets/sprites/Trans_Mountain_to_Forest.png'));
        this.tileImages.push(this.gameVar.load.image('ForestToMountainSprite', '../../assets/sprites/Trans_Forest_to_Mountain.png'));
        this.tileImages.push(this.gameVar.load.image('DesertToMountainSprite', '../../assets/sprites/Trans_Desert_to_Mountain.png'));
        this.tileImages.push(this.gameVar.load.image('MountainToDesertSprite', '../../assets/sprites/Trans_Mountain_to_Desert.png'));
    }
    
    //Create the first tile after the game starts
    public Create():void{
        //create the very first tile that gets shown
        this.currentTile = new Tile(this.gameVar, Biomes.desert);
        this.currentTile.event = this.eventGenerator.CreateEvent();
        //this is for when a choice is made
        this.currentTile.event.completionSignal.addOnce(this.OnEventFinish, this, 0);
        this.currentTile.event.startSignal.addOnce(this.OnEventStart, this, 0);
        this.currentTile.offScreenSignal.addOnce(this.CreateTile, this, 0);
    }

    public Update(){
        this.currentTile.UpdateTile();
    }

    private CreateTile():void{
        this.currentTile.destroy();

        //random biome in the biomes enum
        switch(this.gameVar.rnd.integerInRange(0, 2)){
            case 0:
                this.nextBiome = Biomes.forest;
                break;
            case 1:
                this.nextBiome = Biomes.desert;
                break;
            case 2:
                this.nextBiome = Biomes.mountain;
                break;
        }

        //create the tile & event, add methods to the signals on the tile & event
        this.currentTile = new Tile(this.gameVar, this.nextBiome);
        this.currentTile.event = this.eventGenerator.CreateEvent();
        this.currentTile.event.completionSignal.addOnce(this.OnEventFinish, this, 0);
        this.currentTile.event.startSignal.addOnce(this.OnEventStart, this, 0);
        this.currentTile.offScreenSignal.addOnce(this.CreateTile, this, 0);
    }

    private OnEventFinish(success : boolean):void{
        console.log("THE EVENT SUCCESS IS: " + success);
        //player has successfully completed the event
        if(success){
            //make buttons invisible
            this.uiButtonSwitchSignal.dispatch(false);
            //move current tiles downwards
            this.currentTile.SetTileState(TileState.movingDown);
            //when out of screen create new tile with biome and shit

            //move the new tile up

        }else{
            //game over

            //make buttons invisible
            this.uiButtonSwitchSignal.dispatch(false);
        }
    }

    private OnEventStart():void{
        console.log("EVENT HAS STARTED");
        this.uiButtonSwitchSignal.dispatch(true);
    }

    public GetCurrentTile():Tile{ return this.currentTile; }
    public GetNextTile():Tile{ return this.nextTile; }
    public SetNextTile():Tile{ return this.nextTile; }
}
