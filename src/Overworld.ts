import GameObject from "./GameObject.js";

export default class Overworld {
    private element: Element;
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;

    public constructor(config: { element: Element }) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas")!;
        this.ctx = this.canvas.getContext("2d")!;
    }

    public init() {
        const background = new Image();
        background.onload = () => {
            this.ctx?.drawImage(background, 0, 0);
        };
        background.src = "/assets/images/maps/DemoLower.png";

        const hero = new GameObject({ x: 5, y: 6 });
        const npc1 = new GameObject({
            x: 7,
            y: 9,
            src: "/assets/images/characters/people/npc1.png"
        });

        setTimeout(() => {
            hero.sprite.draw(this.ctx);
            npc1.sprite.draw(this.ctx);
        }, 200);
    }
}
