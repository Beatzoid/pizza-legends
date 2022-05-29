export default class Overworld {
    private element?: Element | null;
    private canvas?: HTMLCanvasElement | null;
    private ctx?: CanvasRenderingContext2D | null;

    public constructor(config: { element?: Element | null }) {
        this.element = config.element;
        this.canvas = this.element?.querySelector(".game-canvas");
        this.ctx = this.canvas?.getContext("2d");
    }

    public init() {
        const background = new Image();
        background.onload = () => {
            this.ctx?.drawImage(background, 0, 0);
        };
        background.src = "/assets/images/maps/DemoLower.png";

        const shadow = new Image();
        const x = 5;
        const y = 6;

        shadow.onload = () => {
            this.ctx?.drawImage(
                shadow,
                0, // Left cut
                0, // Top Cut
                32, // Width of cut
                32, // Height of cut
                x * 16 - 8,
                y * 16 - 18,
                32,
                32
            );
        };
        shadow.src = "/assets/images/characters/shadow.png";

        const hero = new Image();

        hero.onload = () => {
            this.ctx?.drawImage(
                hero,
                0, // Left cut
                0, // Top Cut
                32, // Width of cut
                32, // Height of cut
                x * 16 - 8,
                y * 16 - 18,
                32,
                32
            );
        };
        hero.src = "/assets/images/characters/people/hero.png";
    }
}
