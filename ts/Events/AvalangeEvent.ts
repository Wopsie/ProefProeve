import iEvent from '../Events/Interface/iEvent';
import { EventTypes } from './EventGenerator';
import Timer from '../Timer/Timer';

export default class AvalangeEvent implements iEvent{
    public eventType : EventTypes;
    public eventName : string;
    public npcAssets : Phaser.Image;
    public dialogue : JSON;
    public completionSignal : Phaser.Signal = new Phaser.Signal();
    public startSignal : Phaser.Signal = new Phaser.Signal();
    private timer : Timer;
    
    constructor(game : Phaser.Game,timer : Timer,name : string = "Avalange"){
        this.eventName = name;
        this.eventType = EventTypes.avalange;
        this.timer = timer;
        console.log("AVALANGE");
        //this.loadEventAssets();

        //event assets are loaded into memory by the event generator
        //to be used by all the events when its done
    }

    StartEvent():void{
        //start checking for inputs
        this.startSignal.dispatch(true);//turn on buttons
        this.timer.Create();
        this.timer.PlayTimer(2500);
        console.log(this.eventName + " STARTING NOW");
        
    }

    AgressiveAction():void{
        console.log(this.eventName + " agressive action");
        this.timer.StopTimer();
        this.Success();
    }

    DefensiveAction():void{
        console.log(this.eventName + " defensive action");
        this.Failure();
    }

    PassiveAction():void{
        console.log(this.eventName + " avoid action");
        this.timer.StopTimer();
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