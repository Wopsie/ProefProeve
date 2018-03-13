import 'phaser-ce';
import EventTemplate from '../Events/EventTemplate';// this is how you import classes that are marked with "export default"

export default class Gameplay extends Phaser.State {
    public static Name: string = 'gameplay';
    public name: string = Gameplay.Name;
    private _testSprite: Phaser.Sprite;
    private testEvent: EventTemplate;

    constructor() {
        super();
    }

    public preload(): void{
        super.preload(this.game);
        //console.log("RUNNING GAME");
    }

    public create(): void{
        super.create(this.game);
        this.testEvent = new EventTemplate();//then you instantiate the class as the variable we made earlier

        this.testEvent.eventName = "Wolf Attack";

        this.testEvent.StartEvent();
        console.log(this.testEvent.eventName);
    }

    public update(): void{
        super.update(this.game);
        console.log("RUNNING GAME");
    }

    public shutdown(): void {
        super.shutdown(this.game);
    }
}