import 'phaser-ce';
//class responsible for rendering all of the tiles surrounding the event tile
//just for visuals
import TileGenerator, { Biomes } from '../Tiles/TileGenerator';

export default class TiledBackground{

    private game : Phaser.Game;
    private biome : Biomes;

    constructor(game : Phaser.Game, biomeType : Biomes){
        this.game = game;
        this.biome = biomeType;
    }

    public SpawnBackgroupTiles(group : Phaser.Group):void{

    }

}