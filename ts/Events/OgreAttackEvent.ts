import iEvent from '../Events/Interface/iEvent';
import { EventTypes } from './EventGenerator';

export default class OgreAttackEvent implements iEvent{
    public eventType : EventTypes;
    public eventName : string;
    public npcAssets : Phaser.Image;
    public dialogue : JSON;
    public completionSignal : Phaser.Signal = new Phaser.Signal();
    public startSignal : Phaser.Signal = new Phaser.Signal();

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
        this.startSignal.dispatch(true);
        console.log(this.eventName + " STARTING NOW");
        
    }

    AgressiveAction():void{
        console.log(this.eventName + " agressive action");
        //this.anim.Play('ogre',3,true,false);
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