import 'phaser-ce';
import { Loader, Game, Image, Sprite, Text, BitmapText } from "phaser-ce";

export default class DialogueWriter{
    private dialogueBox: Sprite;
    private OnscreenText: Text;
    private Pgame: Phaser.Game;
    private textStyle: object;

    //variables for displaying the text on screen
    private line: Array<string>;
    private wordIndex: number = 0;
    private lineIndex: number = 44;
    private WordDelay: number = 120;
    private lineDelay: number = 400;
    //test string 
    private content: string = ' Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et ';
    private texttoadd:string;

    
     constructor(game: Phaser.Game){
        game.load.image('DialogueBoxBackground', '../assets/UI/Box.png').onLoadComplete.addOnce(() => {
            console.log("ui load complete");
           
            
        });
        
       

        this.Pgame = game;
        this.texttoadd = " ";
        
    }

    private Preload(game: Phaser.Game) {
       


    }

    

     Create(game: Phaser.Game) {
        this.dialogueBox = game.add.sprite(0, 200, 'DialogueBoxBackground')
        this.dialogueBox.scale.setTo(0.15   );
        this.dialogueBox.inputEnabled = true;
        var style = { font: "32px Arial", fill: "white", wordWrap: true, wordWrapWidth: this.dialogueBox.width, align: "center", backgroundColor: "#ffff00"};
        this.textStyle = style;
        this.NextLine();
      //  this.bmpText.maxWidth = this.dialogueBox.width;

    }
    /**
     * WriteOnScreen puts a string in the dialogue box
     */
    public WriteOnScreen(textToDisplay: string) {
        console.log(this.dialogueBox.width);
        let boxwidth = this.dialogueBox.width;

        
        this.OnscreenText.anchor.set(0.5);
        this.OnscreenText.x = (this.dialogueBox.x + this.dialogueBox.width / 2);   
        this.OnscreenText.y = (this.dialogueBox.y + this.dialogueBox.height /2);
        
        
    }

    private NextLine(){
        console.log('doe het eens');

        if(this.lineIndex == this.wordIndex){
            return;
        }
        this.line = this.content[this.lineIndex].split(' ');
        this.wordIndex = 0;
        this.Pgame.time.events.repeat(this.WordDelay, this.line.length, this.NextWord, this);
        this.lineIndex ++;

    }
    private NextWord(){
        //this.OnscreenText.text = this.OnscreenText.text.concat(this.line[this.wordIndex] + " ");
      
        this.texttoadd.concat(this.line[this,this.wordIndex]  + " ");

        
        console.log(this.texttoadd);
        
        

            this.wordIndex++;

            if(this.wordIndex == this.line.length){
                this.OnscreenText.text = this.OnscreenText.text.concat("/n");
                this.Pgame.time.events.add(this.lineDelay, this.NextLine, this);

            }



    }
}


