import iEvent from '../Events/Interface/iEvent';
import { EventTypes } from './EventGenerator';
import Animations from '../Animations/Animations';
import Timer from '../Timer/Timer';

export default class WolfAttackEvent implements iEvent{
    public eventType : EventTypes;
    public eventName : string;
    public npcAssets : Phaser.Image;
    public dialogue : JSON;
    public completionSignal : Phaser.Signal = new Phaser.Signal();
    public startSignal : Phaser.Signal = new Phaser.Signal();
    public game : Phaser.Game;
    public anim: Animations;
    private timer: Timer;

    constructor(game : Phaser.Game, timer : Timer , name : string = "Wolf attack"){
        this.game = game;
        this.anim = new Animations(game);
        this.timer = timer;
        this.eventName = name;
        this.eventType = EventTypes.wolfAttack;
        console.log("A WOLF ATTACKS");
        //this.loadEventAssets();

        //event assets are loaded into memory by the event generator
        //to be used by all the events when its done
    }

    StartEvent():void{
        //start checking for inputs
        this.startSignal.dispatch(true)
        this.anim.Create('heroBack',0.5,300,700);
        this.anim.animArray[(this.anim.SearchKey('heroBack'))].frame = 1;
        this.anim.Create('wolf',0.6,100,625);
        this.timer.Create();
        this.timer.PlayTimer(2500);
        console.log(this.eventName + " STARTING NOW");
        
    }

    AgressiveAction():void{
        console.log(this.eventName + " agressive action");
        this.anim.Play('wolf',3,false,false);
        this.timer.StopTimer();
        this.Wait(1000,this.Success);
    }

    DefensiveAction():void{
        console.log(this.eventName + " defensive action");
        this.Failure();
    }

    PassiveAction():void{
        console.log(this.eventName + " avoid action");
        this.anim.Play('wolf',3,false,true);
        this.timer.StopTimer();
        this.Wait(1000,this.Success);
    }

    //called when event is completed successfully
    Success():void{
        this.anim.spriteArray[this.anim.SearchKey('heroBack')].destroy();
        this.completionSignal.dispatch(true);
    }

    //called when event has been failed
    Failure():void{
        this.completionSignal.dispatch(false);
    }

    Wait(ms : number,func : Function):void
    {
        this.game.time.events.add(ms,func,this);
    }
}