import 'phaser-ce';

import { Loader, Game } from "phaser-ce";

export default class Jsonreader{
    private jsonfile: JSON;
    private obj: object;
    constructor(){
    }
    
    /**
     * ReadJsonfromfile 
     */
    public  ReadJsonfromfile(Game: Phaser.Game) {
        Game.load.text("jsonKey", "../Dialogue/test.json")
        this.obj = JSON.parse(Game.cache.getText('jsonKey'));
        console.log(this.obj);
    }
    
}