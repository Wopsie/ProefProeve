import iEvent from '../Events/Interface/iEvent';
import { EventTypes } from './EventGenerator';

export default class QuicksandEvent implements iEvent{
    public eventType : EventTypes;
    public eventName : string;
    public npcAssets : Phaser.Image;
    public dialogue : JSON;

    constructor(name : string = "default"){
        this.eventName = name;
        console.log("QUICKSAND");
        //this.loadEventAssets();

        //event assets are loaded into memory by the event generator
        //to be used by all the events when its done
    }

    StartEvent():void{
        //start checking for inputs
    }

    AgressiveAction():void{

    }

    DefensiveAction():void{

    }

    PassiveAction():void{

    }
}