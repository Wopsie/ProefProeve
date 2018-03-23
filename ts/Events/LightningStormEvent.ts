import iEvent from "./Interface/iEvent";
import { EventTypes } from "./EventGenerator";

export default class LightningStormEvent implements iEvent{
    public eventType : EventTypes;
    public eventName : string;
    public npcAssets : Phaser.Image;

    constructor(name : string = "Lightning strike"){
        this.eventName = name;
        console.log("LIGHTNING STRIKE");
    }

    StartEvent():void{

    }

    AgressiveAction():void{
        console.log(this.eventName + " agressive action");

    }

    DefensiveAction():void{
        console.log(this.eventName + " defensive action");

    }

    PassiveAction():void{
        console.log(this.eventName + " avoid action");

    }
}