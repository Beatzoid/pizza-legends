import GameObject from "./gameobject.js";

interface OverworldMapConfig {
    gameObjects: Record<string, GameObject>;
    upperSrc: string;
    lowerSrc: string;
}

class OverworldMap {
    public gameObjects: Record<string, GameObject>;

    private upperImage: HTMLImageElement;
    private lowerImage: HTMLImageElement;

    public constructor(config: OverworldMapConfig) {
        this.gameObjects = config.gameObjects;

        this.upperImage = new Image();
        this.upperImage.src = config.upperSrc;

        this.lowerImage = new Image();
        this.lowerImage.src = config.lowerSrc;
    }

    public drawLowerImage(ctx: CanvasRenderingContext2D) {
        ctx.drawImage(this.lowerImage, 0, 0);
    }

    public drawUpperImage(ctx: CanvasRenderingContext2D) {
        ctx.drawImage(this.upperImage, 0, 0);
    }
}

export default OverworldMap;
