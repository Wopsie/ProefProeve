import iEvent from "./Interface/iEvent";
import { EventTypes } from "./EventGenerator";

export default class BearAttackEvent implements iEvent{
    public eventType : EventTypes;
    public eventName : string;
    public npcAssets : Phaser.Image;
    public dialogue : JSON;
    public completionSignal : Phaser.Signal = new Phaser.Signal();

    constructor(name : string = "Bear attack"){
        this.eventName = name;
        this.eventType = EventTypes.bearAttack;
        console.log("A BEAR ATTACKS");
    }

    StartEvent():void{
        
    }

    AgressiveAction():void{
        console.log(this.eventName + " agressive action");
        this.Success();
    }

    DefensiveAction():void{
        console.log(this.eventName + " defensive action");
        this.Failure();
    }

    PassiveAction():void{
        console.log(this.eventName + " avoid action");
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