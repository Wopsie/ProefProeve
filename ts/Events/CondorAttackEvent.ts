import iEvent from '../Events/Interface/iEvent';
import EventGenerator, { EventTypes } from './EventGenerator';
import Animations from '../Animations/Animations';
import Timer from '../Timer/Timer';
import TileGenerator from '../Tiles/TileGenerator';

export default class CondorAttackEvent implements iEvent{
    public eventType : EventTypes;
    public eventName : string;
    public npcAssets : Phaser.Image;
    public dialogue : JSON;
    public completionSignal : Phaser.Signal = new Phaser.Signal();
    public startSignal : Phaser.Signal = new Phaser.Signal();
    private game : Phaser.Game;
    public anim : Animations;
    private timer : Timer;

    constructor(game : Phaser.Game,timer : Timer,name : string = "Condor attack"){
        this.game = game;
        this.anim = new Animations(game);
        this.timer = timer;
        this.eventName = name;
        this.eventType = EventTypes.condorAttack;
        console.log("A CONDOR ATTACKS");
    }

    StartEvent():void{
        this.startSignal.dispatch(true);
        this.anim.Create('heroBack',0.5,150,700);
        this.anim.Create('condor',0.75,230,485);
        this.timer.Create();
        this.timer.PlayTimer(2500);
        console.log(this.eventName + " STARTING NOW");
    }

    AgressiveAction():void{
        console.log(this.eventName + " agressive action");
        this.anim.Play('condor',3,false,true);
        this.timer.StopTimer();
        this.Wait(1000,this.Success);
    }

    DefensiveAction():void{
        console.log(this.eventName + " defensive action");
        this.Failure();
    }

    PassiveAction():void{
        console.log(this.eventName + " avoid action");
        this.anim.Play('condor',3,false,true);
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
        console.log('Dood');
        this.completionSignal.dispatch(false);
    }

    Wait(ms : number,func : Function):void
    {
        this.game.time.events.add(ms,func,this);
    }
}