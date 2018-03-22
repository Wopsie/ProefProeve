import 'phaser-ce';
import Timer from '../Timer/Timer';
import AudioManager from '../Audio/AudioManager';
import EventTemplate from '../Events/EventTemplate';// this is how you import classes that are marked with "export default"
import TileGenerator from '../Tiles/TileGenerator';
import UiSprites from '../Events/Interface/UiSprites'
export default class Gameplay extends Phaser.State {
    public static Name: string = 'gameplay';
    public name: string = Gameplay.Name;
    private _testSprite: Phaser.Sprite;
    private timer: Timer;
    //private playerAnim : Animation;
    private audioManager: AudioManager;
    
    public gameVar : Phaser.Game;
    private testEvent: EventTemplate;
    private tileGenerator: TileGenerator;
    private UiSprites : UiSprites;

    constructor() {
        super();
    }

    public preload(): void{
        super.preload(this.game);
        this.timer = new Timer(this.game);
        this.game.input.mouse.capture = true;
        this.audioManager = new AudioManager();
        this.audioManager.Preload(this.game);
        this.audioManager.LoadInSounds();
        //console.log("RUNNING GAME");
        //instantiate classes
        this.tileGenerator = new TileGenerator(this.game);
        this.UiSprites = new UiSprites(this.game);
        //call methods that load assets
        this.tileGenerator.LoadTileAssets();
    }
    
    public create(): void{
        super.create(this.game);
        this.timer.Create();
        this.tileGenerator.Create();

        this.UiSprites.create();
        //this.tileGenerator.GetCurrentTile().event.AgressiveAction();
        //console.log(this.tileGenerator.GetCurrentTile().event.eventName);
        //this.eventGenerator.CreateEvent();
    }

    public update(): void{
        super.update(this.game);
        this.timer.Update();
        this.audioManager.Update();
        //console.log("RUNNING GAME");
    }

    public shutdown(): void {
        super.shutdown(this.game);
    }
}