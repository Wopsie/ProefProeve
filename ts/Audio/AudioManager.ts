import 'phaser-ce';
import { Game } from "phaser-ce";
import Gameplay from '../States/Gameplay';

export default class AudioManager extends Phaser.State{   

    public CaseNumber: number = 1;
    public SongNumberInt: number = 3;
    public SongNumberString: string = '3';
    private gameVar : Phaser.Game;
    private music : Phaser.Sound;

    constructor() {
        super();
    }

    public Preload(phaserGame : Phaser.Game):void{
        this.gameVar = phaserGame;
        
    }

    
    public Update():void{
        if(this.gameVar.input.activePointer.leftButton.isDown == true)
        {

            this.SoundCase(2);
        }
    }
    
    //add all sound files used in the game here
    public LoadInSounds():void{
        this.gameVar.load.audio('1', "assets/audio/1.mp3");
        this.gameVar.load.audio('2', "assets/audio/2.mp3");
        this.gameVar.load.audio('3', "assets/audio/3.mp3");
    }

    //adds and plays the sound deleting the last played sound
    public PlaySounds():void{
        console.log(this.music);
        if(this.music !== undefined){
            this.music.stop();
        }
        this.SongNumberString = this.SongNumberInt.toString();
        this.music = this.gameVar.add.audio(this.SongNumberString);
        this.music.volume = 1;
        this.music.play();
    }

    //call on this function with a value to play that song
    public SoundCase(PlayNumber:Number):void{
        this.CaseNumber = PlayNumber.valueOf();

        switch(this.CaseNumber)
        {
            case 1:{
                this.SongNumberInt = this.CaseNumber;
                this.PlaySounds();
                break;
            }
            case 2:{
                this.SongNumberInt = this.CaseNumber;
                this.PlaySounds();
                break;
            }
            case 3:{
                this.SongNumberInt = this.CaseNumber;
                this.PlaySounds();
                break;
            }
            default:{
                console.log("Nope")
            }
        }
    }
}