import iEvent from '../Events/Interface/iEvent';
export default class WolfAttackEvent implements iEvent{
    public eventName : string;
    public npcAssets : Phaser.Image;
    public dialogue : JSON;

    constructor(name : string = "default"){
        this.eventName = name;
        this.loadEventAssets();
    }

    private loadEventAssets():void{
        //reuse as much as possible

        
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