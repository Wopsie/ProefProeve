//a generic template for a tile
//this holds all the art and properties of the tile
import 'phaser-ce';
import { Biomes } from './TileGenerator';
import iEvent from '../Events/Interface/iEvent';
import EventTemplate from '../Events/EventTemplate';
export default class Tile extends Phaser.Image{

    public biome : Biomes;
    public event : iEvent;

    constructor(pGame : Phaser.Game, /*tileArtString : string,*/ biomeType : Biomes){

        let tileArt;
        switch(biomeType){
            case 0:
                tileArt = "forestWalkSprite";
                break;
            case 1:
                tileArt = "forestWalkSprite";
                break;
            case 2:
                tileArt = "desertWalkSprite";
                break;
            case 3:
                tileArt = "mountainWalkSprite";
                break;
        }

        super(pGame, 0, 0, tileArt);
        //this puts the sprite on screen
        pGame.add.sprite(80, 700, tileArt);
        this.biome = biomeType;
        console.log(this.biome);
    }

    /*
    private SelectTileArt(b : Biomes):string{
        switch(b){
            case 0:
                return "forestWalkSprite";
                break;
            case 1:
                return "forestWalkSprite";
                break;
            case 2:
                return "desertWalkSprite";
                break;
            case 3:
                return "mountainWalkSprite";
                break;
        }
    }
    */
}