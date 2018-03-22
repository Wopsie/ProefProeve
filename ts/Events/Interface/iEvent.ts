//Certain events can only be called on certain tiles
//it is up to the tile to store what events can be called
//the event itself is completely standalone
import 'phaser-ce';
import { eventTypes } from '../EventGenerator';
export default interface iEvent{
    eventName : string;
    eventType : eventTypes;
    dialogue? : JSON; // not finalized
    npcAssets : Phaser.Image; // for example a wolf spritesheet
    StartEvent():void;
    AgressiveAction():void;
    DefensiveAction():void;
    PassiveAction():void;
}