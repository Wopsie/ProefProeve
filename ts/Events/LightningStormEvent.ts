import iEvent from "./Interface/iEvent";
import { EventTypes } from "./EventGenerator";

export default class LightningStormEvent implements iEvent{
    public eventType : EventTypes;
    public eventName : string;
    public npcAssets : Phaser.Image;

    constructor(name : string = "default"){
        this.eventName = name;
        console.log("LIGHTNING STRIKE");
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