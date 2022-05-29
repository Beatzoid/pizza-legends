import GameObject from "./GameObject.js";

export default class Sprite {
    public animations;
    public currentAnimation: string;
    public currentAnimationFrame: number;
    public image: HTMLImageElement;
    public shadow: HTMLImageElement;
    public gameObject: GameObject;

    private isLoaded: boolean;
    private isShadowLoaded: boolean;
    private useShadow: boolean;

    public constructor(config: {
        animations?: unknown;
        currentAnimation?: string;
        src: string;
        gameObject: GameObject;
    }) {
        this.image = new Image();
        this.image.onload = () => {
            this.isLoaded = true;
        };

        this.shadow = new Image();
        this.useShadow = true;

        if (this.useShadow) this.image.src = config.src;

        this.shadow.src = "/assets/images/characters/shadow.png";
        this.shadow.onload = () => {
            this.isShadowLoaded = true;
        };

        this.animations = config.animations || {
            idleDown: [[0, 0]]
        };
        this.currentAnimation = config.currentAnimation || "idleDown";
        this.currentAnimationFrame = 0;

        this.gameObject = config.gameObject;
    }

    public draw(ctx: CanvasRenderingContext2D) {
        if (!this.isLoaded) console.warn("Sprite not loaded");

        const x = this.gameObject.x * 16 - 8;
        const y = this.gameObject.y * 16 - 18;

        if (this.isShadowLoaded) ctx.drawImage(this.shadow, x, y);

        ctx.drawImage(this.image, 0, 0, 32, 32, x, y, 32, 32);
    }
}
