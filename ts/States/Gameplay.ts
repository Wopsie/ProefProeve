import 'phaser-ce';
import Test from '../Events/Test'; // this is how you import classes that are marked with "export default"
import Anim from '../Animations/Animations';
import Animations from '../Animations/Animations';
import { Sprite } from 'phaser-ce';
//I dont know how most of this works yet haha

export default class Gameplay extends Phaser.State {
    public static Name: string = 'gameplay';
    public name: string = Gameplay.Name;
    private _testSprite: Phaser.Sprite;
    private testClass: Test;    //then you make a variable of the class type
    private sprite: Sprite;
    private anim: Animations;

    constructor() {
        super();
    }

    public preload(): void{
        super.preload(this.game);
        this.game.load.image('timer','assets/sprites/icon.png');
    }

    public create(): void{
        super.create(this.game);
        this.game.add.sprite(0,0,'timer');
        this.testClass = new Test(); //then you instantiate the class as the variable we made earlier
        this.anim = new Animations();
    }

    public update(): void{
        super.update(this.game);
        //console.log("RUNNING GAME");
        //run test
        this.testClass.Update();
    }

    public shutdown(): void {
        super.shutdown(this.game);
    }
}