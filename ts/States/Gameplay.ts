import 'phaser-ce';
import Test from '../Events/Test'; // this is how you import classes that are marked with "export default"
import Timer from '../Timer/Timer';
import AudioManager from '../Audio/AudioManager';
import JsonReader from '../DialogueSystem/Jsonreader';
import DialogueWriter from '../DialogueSystem/DialogueWriter';
//I dont know how most of this works yet haha

import EventTemplate from '../Events/EventTemplate';// this is how you import classes that are marked with "export default"
import TileGenerator from '../Tiles/TileGenerator';
export default class Gameplay extends Phaser.State {
    public static Name: string = 'gameplay';
    public name: string = Gameplay.Name;
    private _testSprite: Phaser.Sprite;
    private testClass: Test;    //then you make a variable of the class type
    private timer: Timer;
    private jsonReader: JsonReader;
    private dialogueWriter: DialogueWriter;
    //private playerAnim : Animation;
    private audioManager: AudioManager;
    
    public gameVar : Phaser.Game;
    private testEvent: EventTemplate;
    private tileGenerator: TileGenerator;

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
        this.jsonReader = new  JsonReader(this.game);
        this.dialogueWriter = new DialogueWriter(this.game);
        this.tileGenerator = new TileGenerator(this.game);
        
        //this.testEvent = new EventTemplate();//then you instantiate the class as the variable we made earlier
        
        //call methods that load assets
        this.tileGenerator.LoadTileAssets();
    }
    
    public create(): void{
        super.create(this.game);
        this.testClass = new Test(); //then you instantiate the class as the variable we made earlier
        this.timer.Create();
        this.tileGenerator.Create();
        this.tileGenerator.GetCurrentTile().event.AgressiveAction();
        console.log(this.tileGenerator.GetCurrentTile().event.eventName);
        this.dialogueWriter.Create(this.game);
    }

    public update(): void{
        super.update(this.game);
        this.testClass.Update();
        this.timer.Update();
        this.audioManager.Update();
        //console.log("RUNNING GAME");
    }

    public shutdown(): void {
        super.shutdown(this.game);
    }
}