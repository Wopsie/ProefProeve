import 'phaser-ce';
import EventTemplate from '../Events/EventTemplate';// this is how you import classes that are marked with "export default"
import TileGenerator from '../Tiles/TileGenerator';
export default class Gameplay extends Phaser.State {
    public static Name: string = 'gameplay';
    public name: string = Gameplay.Name;
    private _testSprite: Phaser.Sprite;
    private testEvent: EventTemplate;
    private tileGenerator: TileGenerator;

    constructor() {
        super();
    }

    public preload(): void{
        super.preload(this.game);
        //instantiate classes
        this.tileGenerator = new TileGenerator(this.game);
        //this.testEvent = new EventTemplate();//then you instantiate the class as the variable we made earlier
        
        //call methods that load assets
        this.tileGenerator.LoadTileAssets();
    }
    
    public create(): void{
        super.create(this.game);
        
        this.tileGenerator.Create();
        this.tileGenerator.GetCurrentTile().event.AgressiveAction();
        console.log(this.tileGenerator.GetCurrentTile().event.eventName);
    }

    public update(): void{
        super.update(this.game);
    }

    public shutdown(): void {
        super.shutdown(this.game);
    }
}