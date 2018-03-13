//this class is going to be a template for the events that are possible
import iEvent from '../Events/Interface/iEvent';
export default class EventTemplate implements iEvent{
    //this will hold the name that the event is known as such as "wolf attack", read from JSON?
    eventName : string;
    //this will hold the image assets relevant to the event
    npcAssets : Phaser.Image;
    //this will hold the relevant JSON for the event, dialogue & maybe image references
    dialogue : JSON; 

    constructor(){
        //?
    }

    //initiate the event
    StartEvent():void{
        console.log("Start template Event");
    }

    //player has input agressive choice
    AgressiveAction():void{
        console.log("template event agressive action");
    }

    //player has input defensive choice
    DefensiveAction():void{

    }

    //player has input passive choice
    PassiveAction():void{

    }
}