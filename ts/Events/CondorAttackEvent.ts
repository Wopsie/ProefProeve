import iEvent from '../Events/Interface/iEvent';
import { EventTypes } from './EventGenerator';

export default class CondorAttackEvent implements iEvent{
    public eventType : EventTypes;
    public eventName : string;
    public npcAssets : Phaser.Image;
    public dialogue : JSON;

    constructor(name : string = "Condor attack"){
        this.eventName = name;
        console.log("A CONDOR ATTACKS");
        //this.loadEventAssets();

        //event assets are loaded into memory by the event generator
        //to be used by all the events when its done
    }

    StartEvent():void{
        //start checking for inputs
        //this.anim.Create('condor',1,0,0,1,3);
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