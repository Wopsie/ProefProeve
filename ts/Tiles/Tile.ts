//a generic template for a tile
//this holds all the art and properties of the tile
import 'phaser-ce';
import { Biomes } from './TileGenerator';
import iEvent from '../Events/Interface/iEvent';
import EventTemplate from '../Events/EventTemplate';
//import EventGenerator from '../Events/EventGenerator';
export default class Tile extends Phaser.Image{

    public biome : Biomes;
    public event : iEvent;
    //private eventGenerator : EventGenerator;

    constructor(pGame : Phaser.Game, tileArtString : string, biomeType : Biomes){
        super(pGame, 0, 0, tileArtString);
        //this puts the sprite on screen
        pGame.add.sprite(80, 700, tileArtString);
        this.biome = biomeType;
        console.log(this.biome);

        //this.event = this.GetEvent();
    }

    //private GetEvent():iEvent{
    //    return new EventTemplate("TileTestEvent");
    //}
}