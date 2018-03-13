//a generic template for a tile
//this holds all the art and properties of the tile
import 'phaser-ce';
import { biomes } from './TileGenerator';
export default class Tile extends Phaser.Image{

    private biome : biomes;

    constructor(pGame : Phaser.Game, tileString : string){
        super(pGame, 0, 0, tileString);
        //this puts the sprite on screen
        pGame.add.sprite(50, 700, tileString);
    }
}