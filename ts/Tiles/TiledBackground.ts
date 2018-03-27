import 'phaser-ce';
//class responsible for rendering all of the tiles surrounding the event tile
//just for visuals
import TileGenerator from '../Tiles/TileGenerator';
export default class TiledBackground extends Phaser.Group{

    constructor(game : Phaser.Game){
        super(game);
    }

}