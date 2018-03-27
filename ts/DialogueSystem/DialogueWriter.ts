import 'phaser-ce';
import { Loader, Game, Image, Sprite, Text, BitmapText } from "phaser-ce";
import TestClass from '../Events/Test';

export default class DialogueWriter {
    private dialogueBox: Sprite;
    private OnscreenText: Text;
    private Pgame: Phaser.Game;
    private textStyle: object;

    //variables for displaying the text on screen
    //the entire line that should be displayed on screen in the end
    private line: string[];
    private EntireLine: string = "this is just a test and";
    private textAtThisMoment: string;

    constructor(game: Phaser.Game) {
        game.load.image('DialogueBoxBackground', '../assets/UI/Box.png').onLoadComplete.addOnce(() => {
            console.log("ui load complete");


        });



        this.Pgame = game;
        // this.OnscreenText = this.Pgame.add.text
    }

    private Preload(game: Phaser.Game) {




    }



    Create(game: Phaser.Game) {
        this.dialogueBox = game.add.sprite(0, 200, 'DialogueBoxBackground')
        this.dialogueBox.scale.setTo(0.15);
        this.dialogueBox.inputEnabled = true;
        //preset the style
        let style = { font: "32px Arial", fill: "white", wordWrap: true, wordWrapWidth: this.dialogueBox.width, align: "center" };
        this.textStyle = style;
        this.line = [""];
        console.log(this.line);
        this.OnscreenText = this.Pgame.add.text(0,0,"",this.textStyle);

        this.textAtThisMoment = "";
        
        
        this.WriteOnScreen();

    }


    /**
    * AddWord concacts a given string with a new word from another string array
    */
    private AddWord(stringToAdd: string) {

       

        let finaltext: string;

        this.textAtThisMoment = this.textAtThisMoment.concat(stringToAdd);
        console.log(this.textAtThisMoment);
    }
    /**
     * WriteOnScreen puts a string in the dialogue box
     */

    private WriteOnScreen() {

        let wordsInLine: number = 5;
        let textToDisplay: string;

        for (let i = 0; i < this.EntireLine.length; i++) {
            this.AddWord(this.EntireLine[i]);

            this.OnscreenText = this.Pgame.add.text(Math.floor(this.dialogueBox.x / this.dialogueBox.width), Math.floor(this.dialogueBox.y / this.dialogueBox.height), this.textAtThisMoment, this.textStyle);
         

        }
    }

}
