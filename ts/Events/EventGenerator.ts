import 'phaser-ce';
import iEvent from './Interface/iEvent';
import EventTemplate from '../Events/EventTemplate';

export enum eventTypes{
    wolfAttack,     //forest
    condorAttack,   //desert
    bearAttack,     //whatever
    trollAttack,    //mountains
    quickSand,      //desert
    avalange,       //mountains
    lightningStorm, //forest
};

export default class EventGenerator{
    private gameVar : Phaser.Game;
    private currentEvent : iEvent;
    private lastEvent : iEvent;

    public CreateEvent():iEvent{

        //store the previous event so it cant be repeated
        //might do this better with an enum later
        if(this.currentEvent != null)
            this.lastEvent = this.currentEvent;

        //this.currentEvent = new EventTemplate("New Event");

        return this.currentEvent;
    }
}