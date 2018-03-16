import 'phaser-ce';
import iEvent from './Interface/iEvent';
import EventTemplate from '../Events/EventTemplate';
import TileGenerator, { Biomes } from '../Tiles/TileGenerator';

export enum EventTypes{
    wolfAttack = 0,     //forest
    condorAttack = 1,   //desert
    bearAttack = 2,     //whatever
    trollAttack = 3,    //mountains
    quickSand = 4,      //desert
    avalange = 5,       //mountains
    lightningStorm = 6, //forest
    sandStorm = 7,      //desert
};

export default class EventGenerator{
    private gameVar : Phaser.Game;
    private currentEvent : iEvent;
    private lastEvent : iEvent;
    private tileGenerator : TileGenerator;
    private availableTypes : number[];
    private selectedEvent : number;

    constructor(tileGen : TileGenerator){
        this.tileGenerator = tileGen;
    }

    public CreateEvent():iEvent{
        //clear array
        this.availableTypes = [];

        //store the previous event so it cant be repeated
        //might do this better with an enum later
        if(this.currentEvent != null)
            this.lastEvent = this.currentEvent;

        this.currentEvent = new EventTemplate("New Event");

        //figure out which events are allowed to be fired on the current tile
        switch(this.tileGenerator.GetCurrentTile().biome){
            case Biomes.forest:
                if(this.lastEvent.eventType != EventTypes.wolfAttack) this.availableTypes.push(EventTypes.wolfAttack);
                if(this.lastEvent.eventType != EventTypes.bearAttack) this.availableTypes.push(EventTypes.bearAttack);
                if(this.lastEvent.eventType != EventTypes.lightningStorm) this.availableTypes.push(EventTypes.lightningStorm);
                break;
            case Biomes.desert:
                if(this.lastEvent.eventType != EventTypes.condorAttack) this.availableTypes.push(EventTypes.condorAttack);
                if(this.lastEvent.eventType != EventTypes.quickSand) this.availableTypes.push(EventTypes.quickSand);
                if(this.lastEvent.eventType != EventTypes.sandStorm) this.availableTypes.push(EventTypes.sandStorm);
                break;
            case Biomes.mountain:
                if(this.lastEvent.eventType != EventTypes.trollAttack) this.availableTypes.push(EventTypes.trollAttack);
                if(this.lastEvent.eventType != EventTypes.avalange) this.availableTypes.push(EventTypes.avalange);
                if(this.lastEvent.eventType != EventTypes.lightningStorm) this.availableTypes.push(EventTypes.lightningStorm);
                break;
        }

        return this.selectEvent(this.availableTypes);
    }

    private selectEvent(options : number[]):iEvent{
        //pick an eventtype from the enum at random index that is present in the options array
        this.selectedEvent = options[Math.floor(Math.random() * options.length)];

        console.log(EventTypes[this.selectedEvent]);

        return new EventTemplate();
    }

    //load the spritesheets and sprites of the enemies that can appear in events
    private LoadEnemyAssets():void{

    }

}