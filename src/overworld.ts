import GameObject from "./gameobject.js";

interface OverworldConfig {
    element: HTMLElement;
}

class Overworld {
    private element: HTMLElement;
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;

    public constructor(config: OverworldConfig) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas")!;
        this.ctx = this.canvas.getContext("2d")!;
    }

    public init() {
        const bgImage = new Image();
        bgImage.src = "/images/maps/DemoLower.png";

        bgImage.onload = () => {
            this.ctx.drawImage(bgImage, 0, 0);
        };

        // Game Objects
        const hero = new GameObject({
            x: 5,
            y: 6
        });
        const npc1 = new GameObject({
            x: 7,
            y: 9,
            src: "/images/characters/people/npc1.png"
        });

        setTimeout(() => {
            hero.sprite.draw(this.ctx);
            npc1.sprite.draw(this.ctx);
        }, 200);
    }
}

export default Overworld;
