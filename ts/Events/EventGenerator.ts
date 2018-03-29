import 'phaser-ce';
import iEvent from './Interface/iEvent';
import EventTemplate from '../Events/EventTemplate';
import WolfAttackEvent from '../Events/WolfAttackEvent';
import CondorAttackEvent from '../Events/CondorAttackEvent';
import BearAttackEvent from '../Events/BearAttackEvent';
import OgreAttackEvent from '../Events/OgreAttackEvent';
import QuicksandEvent from '../Events/QuicksandEvent';
import AvalangeEvent from '../Events/AvalangeEvent';
import LightningStormEvent from '../Events/LightningStormEvent';
import SandstormEvent from '../Events/SandStormEvent';
import NarrowPathEvent from '../Events/NarrowPathEvent';
import TileGenerator, { Biomes } from '../Tiles/TileGenerator';
import Animations from '../Animations/Animations';
import Timer from '../Timer/Timer';
import { Game } from 'phaser-ce';

export enum EventTypes{
    wolfAttack = 0,     //forest
    condorAttack = 1,   //desert
    bearAttack = 2,     //forest
    ogreAttack = 3,    //mountains
    quickSand = 4,      //desert
    avalange = 5,       //mountains
    lightningStorm = 6, //forest
    sandStorm = 7,      //desert
    narrowPath = 8,     //mountain
};

export default class EventGenerator{
    private gameVar : Phaser.Game;
    private anim : Animations;
    private timer : Timer;
    private currentEvent : iEvent;
    private lastEvent : iEvent;
    private tileGenerator : TileGenerator;
    private availableTypes : number[];
    private selectedEvent : number;

    constructor(gameVar : Phaser.Game,tileGen : TileGenerator,timer : Timer){
        this.gameVar = gameVar;
        this.timer = timer;
        this.tileGenerator = tileGen;
        this.anim = new Animations(gameVar);
        this.LoadEventAssets();
    }

    public CreateEvent():iEvent{
        //clear array
        this.availableTypes = [];

        //figure out which events are allowed to be fired on the current tile
        switch(this.tileGenerator.GetCurrentTile().biome){
            case Biomes.forest:
                //check if there has been a previous event to take into account
                if(this.lastEvent != null){
                    if(this.lastEvent.eventType != EventTypes.wolfAttack) this.availableTypes.push(EventTypes.wolfAttack);
                    if(this.lastEvent.eventType != EventTypes.bearAttack) this.availableTypes.push(EventTypes.bearAttack);
                    if(this.lastEvent.eventType != EventTypes.lightningStorm) this.availableTypes.push(EventTypes.lightningStorm);
                }else{ //if not, just add every event of the tile to the available events array
                    this.availableTypes.push(EventTypes.wolfAttack);
                    this.availableTypes.push(EventTypes.bearAttack);
                    this.availableTypes.push(EventTypes.lightningStorm);
                }
                break;
            case Biomes.desert:
                if(this.lastEvent != null){
                    if(this.lastEvent.eventType != EventTypes.condorAttack) this.availableTypes.push(EventTypes.condorAttack);
                    if(this.lastEvent.eventType != EventTypes.quickSand) this.availableTypes.push(EventTypes.quickSand);
                    if(this.lastEvent.eventType != EventTypes.sandStorm) this.availableTypes.push(EventTypes.sandStorm);
                }else{
                    this.availableTypes.push(EventTypes.condorAttack);
                    this.availableTypes.push(EventTypes.quickSand);
                    this.availableTypes.push(EventTypes.sandStorm);
                }
                break;
            case Biomes.mountain:
                if(this.lastEvent != null){
                    if(this.lastEvent.eventType != EventTypes.ogreAttack) this.availableTypes.push(EventTypes.ogreAttack);
                    if(this.lastEvent.eventType != EventTypes.avalange) this.availableTypes.push(EventTypes.avalange);
                    if(this.lastEvent.eventType != EventTypes.narrowPath) this.availableTypes.push(EventTypes.narrowPath);
                    console.log("Last event IS HERE!");
                }else{
                    console.log("Last event doesnt exist!");
                    this.availableTypes.push(EventTypes.ogreAttack);
                    this.availableTypes.push(EventTypes.avalange);
                    this.availableTypes.push(EventTypes.narrowPath);
                }
                break;
        }
        let e = this.selectEvent(this.availableTypes);
        //store the previous event so it cant be repeated
        this.lastEvent = e;

        return e;
    }

    private selectEvent(options : number[]):iEvent{
        
        //pick an eventtype from the enum at random index that is present in the options array
        this.selectedEvent = options[Math.floor(Math.random() * options.length)];

        console.log(EventTypes[this.selectedEvent]);
        console.log("Selected event " + EventTypes[this.selectedEvent] + " from " + this.availableTypes.length + " available options");

        switch(this.selectedEvent){
            case 0:
                return new WolfAttackEvent(this.gameVar,this.timer);
            case 1:
                return new CondorAttackEvent(this.gameVar,this.timer);
            case 2:
                return new BearAttackEvent(this.gameVar,this.timer);
            case 3:
                return new OgreAttackEvent(this.gameVar,this.timer);
            case 4:
                return new QuicksandEvent(this.gameVar,this.timer);
            case 5:
                return new AvalangeEvent(this.gameVar,this.timer);
            case 6: 
                return new LightningStormEvent(this.gameVar,this.timer);
            case 7:
                return new SandstormEvent(this.gameVar,this.timer);
            case 8:
                return new NarrowPathEvent(this.gameVar,this.timer);
        }
    }

    //load the spritesheets and sprites of the enemies that can appear in events
    private LoadEventAssets():void{
        this.anim.LoadSpritesheet('wolf','assets/animations/WolfSpritesheet.png',500,500,3);
        this.anim.LoadSpritesheet('ogre','assets/animations/OgreSpritesheet.png',500,500,3);
        this.anim.LoadSpritesheet('condor','assets/animations/CondorSpritesheet.png',500,500,3);        
    }

    public GetTileGenerator():TileGenerator{ return this.tileGenerator; }
}