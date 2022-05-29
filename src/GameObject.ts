import Sprite from "./Sprite.js";

export default class GameObject {
    public x: number;
    public y: number;
    public sprite: Sprite;

    public constructor(config: { x: number; y: number; src?: string }) {
        this.x = config.x || 0;
        this.y = config.y || 0;
        this.sprite = new Sprite({
            gameObject: this,
            src: config.src || "/assets/images/characters/people/hero.png"
        });
    }
}
