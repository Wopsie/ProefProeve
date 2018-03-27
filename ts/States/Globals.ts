import 'phaser-ce';
export default class Globals{

    //private gamevar : Phaser.Game;
    static instance : Globals = new Globals();

    private static skylayer : Phaser.Group;
    private static backTileLayer : Phaser.Group;
    private static eventTileLayer : Phaser.Group;
    private static frontTileLayer : Phaser.Group;
    private static enemyLayer : Phaser.Group;
    private static playerLayer : Phaser.Group;
    private static uiLayer : Phaser.Group;

    constructor(){
        //this.gamevar = game;
        /*
        this.skylayer = game.add.group();
        this.backTileLayer = game.add.group();
        this.eventTileLayer = game.add.group();
        this.frontTileLayer = game.add.group();
        this.enemyLayer = game.add.group();
        this.playerLayer = game.add.group();
        this.uiLayer = game.add.group();
        */
    }

    //public GetInstance():Globals{
        //return this.instance;
    //}
/*
    public GetSkyLayer():Phaser.Group{ return this.skylayer; }
    public GetBackTileLayer():Phaser.Group{ return this.backTileLayer; }
    public GetEventTileLayer():Phaser.Group{ return this.eventTileLayer; }
    public GetFrontTileLayer():Phaser.Group{ return this.frontTileLayer; }
    public GetUILayer():Phaser.Group{ return this.uiLayer; }
    public GetPlayerLayer():Phaser.Group{ return this.playerLayer; }
    public GetEnemyLayer():Phaser.Group{ return this.enemyLayer; }
    */
}