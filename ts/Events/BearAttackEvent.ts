import iEvent from "./Interface/iEvent";
import { EventTypes } from "./EventGenerator";
import Timer from "../Timer/Timer";

export default class BearAttackEvent implements iEvent{
    public eventType : EventTypes;
    public eventName : string;
    public npcAssets : Phaser.Image;
    public dialogue : JSON;
    public completionSignal : Phaser.Signal = new Phaser.Signal();
    public startSignal : Phaser.Signal = new Phaser.Signal();
    private timer : Timer;

    constructor(game : Phaser.Game,timer : Timer,name : string = "Bear attack"){
        this.eventName = name;
        this.eventType = EventTypes.bearAttack;
        this.timer = timer;
        console.log("A BEAR ATTACKS");
    }

    StartEvent():void{
        this.startSignal.dispatch(true);
        this.timer.Create();
        this.timer.PlayTimer(2500);
        console.log(this.eventName + " STARTING NOW");
    }

    AgressiveAction():void{
        console.log(this.eventName + " agressive action");
        this.timer.StopTimer();
        this.Success();
    }

    DefensiveAction():void{
        console.log(this.eventName + " defensive action");
        this.Failure();
    }

    PassiveAction():void{
        console.log(this.eventName + " avoid action");
        this.timer.StopTimer();
        this.Success();
    }

    //called when event is completed successfully
    Success():void{
        this.completionSignal.dispatch(true);
    }

    //called when event has been failed
    Failure():void{
        this.completionSignal.dispatch(false);
    }
}