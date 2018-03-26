import iEvent from '../Events/Interface/iEvent';
import { EventTypes } from './EventGenerator';

export default class OgreAttackEvent implements iEvent{
    public eventType : EventTypes;
    public eventName : string;
    public npcAssets : Phaser.Image;
    public dialogue : JSON;

    constructor(name : string = "Ogre attack"){
        this.eventName = name;
        console.log("A OGRE ATTACKS");
        //this.loadEventAssets();

        //event assets are loaded into memory by the event generator
        //to be used by all the events when its done
    }

    StartEvent():void{
        //start checking for inputs
        //this.anim.Create('ogre',1);
    }

    AgressiveAction():void{
        console.log(this.eventName + " agressive action");
        //this.anim.Play('ogre',3,true,false);
    }

    DefensiveAction():void{
        console.log(this.eventName + " defensive action");

    }

    PassiveAction():void{
        console.log(this.eventName + " avoid action");

    }
}