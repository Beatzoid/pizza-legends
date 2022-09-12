interface OverworldConfig {
    element: HTMLElement;
}

class Overworld {
    private element: HTMLElement;
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;

    constructor(config: OverworldConfig) {
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

        const x = 5;
        const y = 6;

        const shadow = new Image();
        shadow.src = "/images/characters/shadow.png";

        shadow.onload = () => {
            this.ctx.drawImage(
                shadow,
                0, // Left Cut
                0, // Top Cut
                32, // Width of cut
                32, // Height of cut
                x * 16 - 8, // 16 = tile size, 8 = sprite offset
                y * 16 - 18, // 16 = tile size, 18 = sprite offset
                32,
                32
            );
        };

        const hero = new Image();

        hero.src = "/images/characters/people/hero.png";
        hero.onload = () => {
            this.ctx.drawImage(
                hero,
                0, // Left Cut
                0, // Top Cut
                32, // Width of cut
                32, // Height of cut
                x * 16 - 8, // 16 = tile size, 8 = sprite offset
                y * 16 - 18, // 16 = tile size, 18 = sprite offset
                32,
                32
            );
        };
    }
}

export default Overworld;
