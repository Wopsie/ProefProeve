import 'phaser-ce';

import { Loader, Game } from "phaser-ce";
export default class Jsonreader{
    private jsonfile: JSON;
    public Isloaded: boolean;

   /**
     * predefines the properties of the object we retrieve from the Json files
     */
    private dialogueObject = { 
        intro: "intro", 
        timedevent: "timedevent"


    }
    constructor(Game: Phaser.Game){
        this.Isloaded = false;
        
        //load the local json file and alter the bool after a completed load
        Game.load.text("GameText", './assets/Json/Dialogue/test.json').onLoadComplete.addOnce(() => {
            this.Isloaded = true;
         //   this.ReadJsonfromfile(Game);


        });
    }
    
    /**
     * ReadJsonfromfile fgfgg
     */
    public  ReadJsonfromfile(Game: Phaser.Game) {
        //first check if the Json file is actually loaded and if not returns
        if(this.Isloaded == false)
            return;
        
        this.dialogueObject = JSON.parse(Game.cache.getText('GameText'));
        console.log(this.dialogueObject.intro);
    }
    
}