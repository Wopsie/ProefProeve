import 'phaser-ce';
import { Game } from "phaser-ce";
import Gameplay from '../States/Gameplay';

export default class AudioManager {   

    public MusicCaseString: String = 'Music';
    public MusicSongString: string = 'Music';

    public ActionCaseString: String = 'Action';
    public ActionAudioString: string = 'Action';

    private gameVar : Phaser.Game;

    private actionaudio : Phaser.Sound;
    private backgroundmusic : Phaser.Sound;

    constructor(pGame : Phaser.Game){
        this.gameVar = pGame;
    }

    //add all audio files used in the game here
    public LoadInSounds():void{
        this.gameVar.load.audio('Forest', "assets/audio/Bos.mp3");
        this.gameVar.load.audio('Mountain', "assets/audio/Berg.mp3");
        this.gameVar.load.audio('Desert', "assets/audio/Woestijn.mp3");
    }

    public create():void{
    }

    //adds and plays the music sound deleting the last played sound
    public MusicPlaySounds():void{
        if(this.backgroundmusic !== undefined){
            this.backgroundmusic.stop();
        }
        this.backgroundmusic = this.gameVar.add.audio(this.MusicSongString);
        this.backgroundmusic.volume = 1;
        this.backgroundmusic.loop = true;
        this.backgroundmusic.play();
    }

    //adds and plays the sfx audio deleting the last played audio
    public ActionPlaySounds():void{
        //console.log(this.backgroundmusic);
        if(this.actionaudio !== undefined){
            this.actionaudio.stop();
        }
        this.actionaudio = this.gameVar.add.audio(this.ActionAudioString);
        this.actionaudio.volume = 1;
        this.actionaudio.play();
    }

    //call on this function with a value to play that background song
    public MusicSoundCase(PlayString:String):void{
        this.MusicCaseString = PlayString.toString();

        switch(this.MusicCaseString)
        {
            case 'Forest':{
                this.MusicSongString = this.MusicCaseString.toString();
                this.MusicPlaySounds();
                break;
            }
            case 'Mountain':{
                this.MusicSongString = this.MusicCaseString.toString();
                this.MusicPlaySounds();
                break;
            }
            case 'Desert':{
                this.MusicSongString = this.MusicCaseString.toString();
                this.MusicPlaySounds();
                break;
            }
            default:{
                console.log("Nope")
            }
        }
    }

    //call on this function with a value to play that Audio
    public ActionAudioCase(PlayString:String):void{
        this.ActionCaseString = PlayString.valueOf();

        switch(this.ActionCaseString)
        {
            case 'Attack':{
                this.ActionAudioString = this.ActionCaseString.toString();
                this.ActionPlaySounds();
                break;
            }
            case 'Defend':{
                this.ActionAudioString = this.ActionCaseString.toString();
                this.ActionPlaySounds();
                break;
            }
            case 'Passive':{
                this.ActionAudioString = this.ActionCaseString.toString();
                this.ActionPlaySounds();
                break;
            }
            default:{
                console.log("Nope")
            }
        }
    }
}