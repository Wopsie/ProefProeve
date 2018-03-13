//a generic template for a tile
//this holds all the art and properties of the tile
import 'phaser-ce';
export default class Tile extends Phaser.Image{

    public tileImage : Phaser.Image;
    public tileProps : Phaser.Image[];

    constructor(pGame : Phaser.Game){
        super(pGame, 0, 0, 'tileSprite');
    }

    public loadTile():void{
        //get the tile image to show on screen through the tile generator

    }
}