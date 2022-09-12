import OverworldMap from "./overworldMap.js";
import overworldMapData from "./overworldMaps.js";

interface OverworldConfig {
    element: HTMLElement;
}

class Overworld {
    private element: HTMLElement;
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private map: OverworldMap;

    public constructor(config: OverworldConfig) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas")!;
        this.ctx = this.canvas.getContext("2d")!;
        this.map = new OverworldMap(overworldMapData.Kitchen);
    }

    public startGameLoop() {
        const step = () => {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            this.map.drawLowerImage(this.ctx);

            Object.values(this.map.gameObjects).forEach((object) => {
                object.sprite.draw(this.ctx);
            });

            this.map.drawUpperImage(this.ctx);

            requestAnimationFrame(() => {
                step();
            });
        };

        step();
    }

    public init() {
        this.startGameLoop();
    }
}

export default Overworld;
