import iEvent from '../Events/Interface/iEvent';
import { EventTypes } from './EventGenerator';

export default class AvalangeEvent implements iEvent{
    public eventType : EventTypes;
    public eventName : string;
    public npcAssets : Phaser.Image;
    public dialogue : JSON;

    constructor(name : string = "Avalange"){
        this.eventName = name;
        this.eventType = EventTypes.avalange;
        console.log("AVALANGE");
        //this.loadEventAssets();

        //event assets are loaded into memory by the event generator
        //to be used by all the events when its done
    }

    StartEvent():void{
        //start checking for inputs
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

    //called when event is completed successfully
    Success():void{

    }

    //called when event has been failed
    Failure():void{

    }
}