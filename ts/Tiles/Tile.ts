//a generic template for a tile
//this holds all the art and properties of the tile
import 'phaser-ce';
import { biomes } from './TileGenerator';
import iEvent from '../Events/Interface/iEvent';
import EventTemplate from '../Events/EventTemplate';
export default class Tile extends Phaser.Image{

    private biome : biomes;
    public event : iEvent;

    constructor(pGame : Phaser.Game, tileArtString : string, biomeType : biomes){
        super(pGame, 0, 0, tileArtString);
        //this puts the sprite on screen
        pGame.add.sprite(50, 700, tileArtString);
        this.biome = biomeType;
        console.log(this.biome);

        this.event = this.MakeEvent();
        //this.event.AgressiveAction();
        //this.event.PassiveAction();
        //this.event.DefensiveAction();
    }

    private MakeEvent():iEvent{
        return new EventTemplate("TileTestEvent");
    }
}