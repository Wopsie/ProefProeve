import iEvent from "./Interface/iEvent";
import { EventTypes } from "./EventGenerator";

export default class BearAttackEvent implements iEvent{
    public eventType : EventTypes;
    public eventName : string;
    public npcAssets : Phaser.Image;
    public dialogue : JSON;

    constructor(name : string = "default"){
        this.eventName = name;
        console.log("A BEAR ATTACKS");
    }

    StartEvent():void{

    }

    AgressiveAction():void{

    }

    DefensiveAction():void{

    }

    PassiveAction():void{

    }
}