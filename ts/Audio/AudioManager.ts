import 'phaser-ce';
import { Game } from "phaser-ce";
import Gameplay from '../States/Gameplay';

export default class AudioManager extends Phaser.State{   

    public MusicCaseNumber: number = 1;
    public MusicSongNumber: number = 1;
    public MusicSongString: string = '1';

    public ActionCaseNumber: number = 11;
    public ActionAudioNumber: number = 11;
    public ActionAudioString: string = '11';

    private gameVar : Phaser.Game;
    private actionaudio : Phaser.Sound;
    private backgroundmusic : Phaser.Sound;

    constructor() {
        super();
    }

    public Preload(phaserGame : Phaser.Game):void{
        this.gameVar = phaserGame;
        
    }

    
    public Update():void{
        if(this.gameVar.input.activePointer.leftButton.isDown == true)
        {
            this.MusicSoundCase(1);
        }
        if(this.gameVar.input.activePointer.middleButton.isDown == true)
        {
            this.ActionAudioCase(11);
        }
        if(this.gameVar.input.activePointer.rightButton.isDown == true)
        {
            this.MusicSoundCase(3);
        }
    }
    
    //add all sound files used in the game here
    public LoadInSounds():void{
        this.gameVar.load.audio('1', "assets/audio/1.mp3");
        this.gameVar.load.audio('11', "assets/audio/2.mp3");
        this.gameVar.load.audio('3', "assets/audio/3.mp3");
    }

    //adds and plays the sound deleting the last played sound
    public MusicPlaySounds():void{
        console.log(this.backgroundmusic);
        if(this.backgroundmusic !== undefined){
            this.backgroundmusic.stop();
        }
        this.MusicSongString = this.MusicSongNumber.toString();
        this.backgroundmusic = this.gameVar.add.audio(this.MusicSongString);
        this.backgroundmusic.volume = 1;
        this.backgroundmusic.play();
    }

    //adds and plays the sound deleting the last played sound
    public ActionPlaySounds():void{
        console.log(this.backgroundmusic);
        if(this.actionaudio !== undefined){
            this.actionaudio.stop();
        }
        this.ActionAudioString = this.ActionAudioNumber.toString();
        this.actionaudio = this.gameVar.add.audio(this.ActionAudioString);
        this.actionaudio.volume = 1;
        this.actionaudio.play();
    }

    //call on this function with a value to play that background song
    public MusicSoundCase(PlayNumber:Number):void{
        this.MusicCaseNumber = PlayNumber.valueOf();

        switch(this.MusicCaseNumber)
        {
            case 1:{
                this.MusicSongNumber = this.MusicCaseNumber;
                this.MusicPlaySounds();
                break;
            }
            case 2:{
                this.MusicSongNumber = this.MusicCaseNumber;
                this.MusicPlaySounds();
                break;
            }
            case 3:{
                this.MusicSongNumber = this.MusicCaseNumber;
                this.MusicPlaySounds();
                break;
            }
            default:{
                console.log("Nope")
            }
        }
    }

    //call on this function with a value to play that Audio
    public ActionAudioCase(PlayNumber:Number):void{
        this.ActionCaseNumber = PlayNumber.valueOf();

        switch(this.ActionCaseNumber)
        {
            case 11:{
                this.ActionAudioNumber = this.ActionCaseNumber;
                this.ActionPlaySounds();
                break;
            }
            case 12:{
                this.ActionAudioNumber = this.ActionCaseNumber;
                this.ActionPlaySounds();
                break;
            }
            case 13:{
                this.ActionAudioNumber = this.ActionCaseNumber;
                this.ActionPlaySounds();
                break;
            }
            default:{
                console.log("Nope")
            }
        }
    }
}