import 'phaser-ce';
import { Image } from 'phaser-ce';

export default class EventAssetPack extends Phaser.Image{

    public name : string;
    private assets : Image[] = [];
    private loaders : Phaser.Loader[] = [];

    constructor(pGame : Phaser.Game, assetStrings : string[]){
        super(pGame, 0,0, assetStrings[0]);
    }
}