import 'phaser-ce';

//I dont know how most of this works yet haha

export default class Gameplay extends Phaser.State {
    public static Name: string = 'gameplay';
    public name: string = Gameplay.Name;
    private _testSprite: Phaser.Sprite;

    constructor() {
        super();
    }

    public preload(): void{
        super.preload(this.game);
        //console.log("RUNNING GAME");
    }

    public create(): void{
        super.create(this.game);
    }

    public update(): void{
        super.update(this.game);
        console.log("RUNNING GAME");
    }

    public shutdown(): void {
        super.shutdown(this.game);
    }
}