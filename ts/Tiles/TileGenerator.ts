//this class creates new tiles when a new one needs to be put on screen
//it then pushes it to the screen, eventually with a lil juicy, screenshaking animation
//a max of 2 tiles are in memory at a given time
import 'phaser-ce';
import Tile from '../Tiles/Tile';
enum biomes{
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
    private gameVar : Phaser.Game;
    private currentTileIdx: number;
    private currentTile: Tile;
    private nextTile: Tile;

    constructor(pGame : Phaser.Game){
        //create one tile to come after the titlescreen has passed
        this.gameVar = pGame;
    }

    public Preload():void{
        //this.currentTile
        this.gameVar.load.image('tileSprite', '../../assets/sprites/Tile.png');
        this.nextTile = new Tile(this.gameVar);
        
    }
}