import 'phaser-ce';
import AudioManager from '../Audio/AudioManager';

//I dont know how most of this works yet haha

export default class Gameplay extends Phaser.State {
    public static Name: string = 'gameplay';
    public name: string = Gameplay.Name;
    private _testSprite: Phaser.Sprite;
    private audioManager: AudioManager;
    
    public gameVar : Phaser.Game;

    constructor() {
        super();
    }

    public preload(): void{
        super.preload(this.game);
        this.game.input.mouse.capture = true;
        this.audioManager = new AudioManager();
        this.audioManager.Preload(this.game);
        this.audioManager.LoadInSounds();
        //console.log("RUNNING GAME");
    }

    public create(): void{
        super.create(this.game);
    }

    public update(): void{
        super.update(this.game);
        this.audioManager.Update();
        //console.log("RUNNING GAME");
    }

    public shutdown(): void {
        super.shutdown(this.game);
    }
}