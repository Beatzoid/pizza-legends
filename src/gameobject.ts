import Sprite from "./sprite.js";

interface GameObjectConfig {
    x?: number;
    y?: number;
    src?: string;
}

class GameObject {
    public x: number;
    public y: number;
    public sprite: Sprite;

    public constructor(config: GameObjectConfig) {
        this.x = config.x ?? 0;
        this.y = config.y ?? 0;
        this.sprite = new Sprite({
            gameObject: this,
            src: config.src || "/images/characters/people/hero.png"
        });
    }
}

export default GameObject;
