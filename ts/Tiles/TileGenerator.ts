//this class creates new tiles when a new one needs to be put on screen
//it then pushes it to the screen, eventually with a lil juicy, screenshaking animation
//a max of 2 tiles are in memory at a given time
import 'phaser-ce';
import Tile from '../Tiles/Tile';
import EventGenerator from '../Events/EventGenerator';

export enum Biomes{
    grass,
    forest,
    desert,
    mountain,
    tundra,
    snowMountain,
    volcano,
    cave,
    dungeon,
};

export default class TileGenerator{
    private gameVar: Phaser.Game;
    private currentTileIdx: number;
    private currentTile: Tile;
    private nextTile: Tile;
    private tileImages: Phaser.Loader[] = [];
    private tilePropImages: Phaser.Loader[] = [];
    private eventGenerator : EventGenerator;

    constructor(pGame : Phaser.Game){
        //create one tile to come after the titlescreen has passed
        this.gameVar = pGame;
        this.eventGenerator = new EventGenerator(this);
    }

    //load the sprites of the tiles and props related to them
    public LoadTileAssets():void{
        this.tileImages.push(this.gameVar.load.image('forestWalkSprite', '../../assets/sprites/Forest_Walk_Tile.png'));
        this.tileImages.push(this.gameVar.load.image('forestBGSprite', '../../assets/sprites/Forest_BG_Tile.png'));
        this.tileImages.push(this.gameVar.load.image('forestToDesertSprite', '../../assets/sprites/Trans_Forest_to_Desert.png'));
        this.tileImages.push(this.gameVar.load.image('desertToForestSprite', '../../assets/sprites/Trans_Desert_to_Forest.png'));
        this.tileImages.push(this.gameVar.load.image('desertWalkSprite', '../../assets/sprites/Desert_Walk_Tile.png'));
        this.tileImages.push(this.gameVar.load.image('desertBGSprite', '../../assets/sprites/Desert_BG_Tile.png'));
    }
    
    //Create the first tile after the game starts
    public Create():void{
        //create a tile, the string represents what sprite needs to be used
        //currently only one placeholder sprite exists
        this.currentTile = new Tile(this.gameVar, 'desertWalkSprite', Biomes.forest);
        this.currentTile.event = this.eventGenerator.CreateEvent();
        
        for(var b in Biomes){
            if(b = Biomes.desert.toString()){
                console.log(b);
                
            }
        }
    }

    public GetCurrentTile():Tile{ return this.currentTile; }
    public GetNextTile():Tile{ return this.nextTile; }
}
