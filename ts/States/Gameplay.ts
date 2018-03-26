import 'phaser-ce';
import AudioManager from '../Audio/AudioManager';
import EventTemplate from '../Events/EventTemplate';// this is how you import classes that are marked with "export default"
import Hero from '../Player/Hero';
import TileGenerator from '../Tiles/TileGenerator';
import Timer from '../Timer/Timer';
import UiSprites from '../Events/Interface/UiSprites'
import Globals from '../States/Globals';
export default class Gameplay extends Phaser.State {
    public static Name: string = 'gameplay';
    public name: string = Gameplay.Name;
    private _testSprite: Phaser.Sprite;
    private timer: Timer;
    private hero: Hero;
    //private playerAnim : Animation;
    private audioManager: AudioManager;
    
    public gameVar : Phaser.Game;
    private testEvent: EventTemplate;
    private tileGenerator: TileGenerator;
    private UiSprites : UiSprites;
    private globals : Globals;

    private GAME_WIDTH : number = 720;
    private GAME_HEIGHT : number = 1280;

    constructor() {
        super();
    }

    public preload(): void{
        super.preload(this.game);
        this.timer = new Timer(this.game);
        this.hero = new Hero(this.game);
        this.game.input.mouse.capture = true;
        this.audioManager = new AudioManager();
        this.audioManager.Preload(this.game);
        this.audioManager.LoadInSounds();
        //instantiate classes
        this.tileGenerator = new TileGenerator(this.game);
        this.UiSprites = new UiSprites(this.game, this.tileGenerator);
        //call methods that load assets
        this.tileGenerator.LoadTileAssets();


    }
    
    public create(): void{
        super.create(this.game);
        this.timer.Create();
        this.hero.Create();
        this.tileGenerator.Create();
        
        this.UiSprites.create();
        //this.tileGenerator.uiButtonSwitchSignal.add(this.UiSprites.DestroyButtons, this, 0);
    }

    public update(): void{
        super.update(this.game);
        this.audioManager.Update();
        this.tileGenerator.Update();
    }

    public shutdown(): void {
        super.shutdown(this.game);
    }

    public init(): void
    {
        if (this.game.device.desktop) {

            this.scale.pageAlignHorizontally = true;
            this.scale.windowConstraints.bottom = 'visual';

            this.game.onBlur.add(() => {
                this.game.sound.mute = true;
            });
            this.game.onFocus.add(() => {
                this.game.sound.mute = false;
            });
            window.addEventListener('resize', () => {
                this.scaleCanvasContain();
            });
            this.scaleCanvasContain();
        } else {
            let rotateScreen: any = document.getElementById('rotateWarning');
            rotateScreen.classList.add('rotateWarning');
            this.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
            this.scale.fullScreenScaleMode = Phaser.ScaleManager.USER_SCALE;

            window.addEventListener('resize', () => {
                Gameplay.mobileResizeCallback(this.game.scale);
            });
            Gameplay.mobileResizeCallback(this.game.scale);
            this.game.scale.onSizeChange.add(
                () => {
                    this.game.state.getCurrentState().resize(window.innerWidth, window.innerHeight);
                },
                this
            );
        }
        //input pointers limited to 1
        this.game.input.maxPointers = 1;

        //Disable contextual menu
        this.game.canvas.oncontextmenu = function (e: Event): void {
            e.preventDefault();
        };
    }
    private scaleCanvasContain(): void {
        if (window.innerHeight / window.innerWidth > this.GAME_HEIGHT / this.GAME_WIDTH) {
            this.scale.maxHeight = window.innerWidth * (this.GAME_HEIGHT / this.GAME_WIDTH);
            this.scale.maxWidth = window.innerWidth;
        } else {
            this.scale.maxHeight = window.innerHeight;
            this.scale.maxWidth = window.innerHeight / (this.GAME_HEIGHT / this.GAME_WIDTH);
        }
    }

    public static mobileResizeCallback(manager: Phaser.ScaleManager): void {
        let width: number = window.innerWidth;
        let height: number = window.innerHeight;

        let usedWidth: number = 720;
        let usedHeight: number = 1280;

        let scaleFactor: number = 1;

        //So first we check if the game is beeing played in landscape
        if (width > height) {
            scaleFactor /= width / usedHeight;
        } else {
            scaleFactor /= height / usedWidth;
        }

        let CALCULATED_WIDTH: number = Math.ceil(width * scaleFactor);
        let CALCULATED_HEIGHT: number = Math.ceil(height * scaleFactor);

        manager.setGameSize(CALCULATED_WIDTH, CALCULATED_HEIGHT);
        manager.setUserScale(1 / scaleFactor, 1 / scaleFactor);
    }
}