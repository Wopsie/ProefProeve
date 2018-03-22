import 'phaser-ce';
import { Game } from "phaser-ce";
import Gameplay from '../States/Gameplay';

export default class AudioManager extends Phaser.State{   

    public MusicCaseString: String = 'Music';
    public MusicSongString: string = 'Music';

    public ActionCaseString: String = 'Action';
    public ActionAudioString: string = 'Action';

    private gameVar : Phaser.Game;

    private actionaudio : Phaser.Sound;
    private backgroundmusic : Phaser.Sound;

    constructor() {
        super();
    }

    public Preload(phaserGame : Phaser.Game):void{
        this.gameVar = phaserGame;
        
    }

    //add all audio files used in the game here
    public LoadInSounds():void{
        this.gameVar.load.audio('Bos', "assets/audio/Bos.mp3");
        this.gameVar.load.audio('Berg', "assets/audio/Berg.mp3");
        this.gameVar.load.audio('Woestijn', "assets/audio/Woestijn.mp3");
    }
    

    
    public Update():void{
        if(this.gameVar.input.activePointer.leftButton.isDown == true)
        {
            this.MusicSoundCase('Bos');
        }
        if(this.gameVar.input.activePointer.middleButton.isDown == true)
        {
            this.MusicSoundCase('Berg');
        }
        if(this.gameVar.input.activePointer.rightButton.isDown == true)
        {
            this.MusicSoundCase('Woestijn');
        }
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
        console.log(this.backgroundmusic);
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
            case 'Bos':{
                this.MusicSongString = this.MusicCaseString.toString();
                this.MusicPlaySounds();
                break;
            }
            case 'Berg':{
                this.MusicSongString = this.MusicCaseString.toString();
                this.MusicPlaySounds();
                break;
            }
            case 'Woestijn':{
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