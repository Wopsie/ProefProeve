import 'phaser-ce';

import { Loader, Game } from "phaser-ce";
export default class Jsonreader{
    private jsonfile: JSON;
    public Isloaded: boolean;

    private dialogueObject = { 
        intro: "intro", 
        timedevent: "timedevent"


    }
    constructor(Game: Phaser.Game){
        this.Isloaded = false;
        
        //load the local json file and excecute the functuin after the completed load
        Game.load.text("GameText", './assets/Json/Dialogue/test.json').onLoadComplete.addOnce(() => {
            this.Isloaded = true;
         //   this.ReadJsonfromfile(Game);


        });
    }
    
    /**
     * ReadJsonfromfile 
     */
    public  ReadJsonfromfile(Game: Phaser.Game) {
        this.dialogueObject = JSON.parse(Game.cache.getText('GameText'));
        console.log(this.dialogueObject.intro.toString());
    }
    
}