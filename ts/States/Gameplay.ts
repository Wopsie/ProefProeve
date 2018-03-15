import 'phaser-ce';
import Test from '../Events/Test'; // this is how you import classes that are marked with "export default"
import Timer from '../Timer/Timer';
//I dont know how most of this works yet haha

export default class Gameplay extends Phaser.State {
    public static Name: string = 'gameplay';
    public name: string = Gameplay.Name;
    private _testSprite: Phaser.Sprite;
    private testClass: Test;    //then you make a variable of the class type
    private timer: Timer;
    //private playerAnim : Animation;

    constructor() {
        super();
    }

    public preload(): void{
        super.preload(this.game);
        this.timer = new Timer(this.game);
    }

    public create(): void{
        super.create(this.game);
        this.testClass = new Test(); //then you instantiate the class as the variable we made earlier
        this.timer.Create();
    }

    public update(): void{
        super.update(this.game);
        this.testClass.Update();
        this.timer.Update();
    }

    public shutdown(): void {
        super.shutdown(this.game);
    }
}