import GameObject from "./gameobject.js";

interface SpriteConfig {
    animations?: Record<string, unknown>;
    currentAnimation?: string;
    src: string;
    gameObject: GameObject;
}

class Sprite {
    private animations: SpriteConfig["animations"];
    private currentAnimation: string;
    private currentAnimationFrame: number;

    private image: HTMLImageElement;
    private isLoaded: boolean;

    private shadow: HTMLImageElement;
    private isShadowLoaded: boolean;
    private useShadow: boolean;

    private gameObject: GameObject;

    public constructor(config: SpriteConfig) {
        this.image = new Image();
        this.image.src = config.src;
        this.image.onload = () => {
            this.isLoaded = true;
        };

        // Shadow
        this.shadow = new Image();

        this.useShadow = true;
        if (this.useShadow) {
            this.shadow.src = "/images/characters/shadow.png";
        }

        this.shadow.onload = () => {
            this.isShadowLoaded = true;
        };

        // Animations
        this.animations = config.animations || {
            idleDown: [[0, 0]]
        };
        this.currentAnimation = config.currentAnimation || "idleDown";
        this.currentAnimationFrame = 0;

        this.gameObject = config.gameObject;
    }

    public draw(ctx: CanvasRenderingContext2D) {
        const x = this.gameObject.x * 16 - 8;
        const y = this.gameObject.y * 16 - 18;

        if (this.isShadowLoaded) {
            ctx.drawImage(this.shadow, x, y);
        }

        if (this.isLoaded) {
            ctx.drawImage(this.image, 0, 0, 32, 32, x, y, 32, 32);
        }
    }
}

export default Sprite;
