import GameObject from "./gameobject.js";

export default {
    DemoRoom: {
        lowerSrc: "/images/maps/DemoLower.png",
        upperSrc: "/images/maps/DemoUpper.png",
        gameObjects: {
            hero: new GameObject({ x: 5, y: 6 }),
            npc1: new GameObject({
                x: 7,
                y: 9,
                src: "/images/characters/people/npc1.png"
            })
        }
    },
    Kitchen: {
        lowerSrc: "/images/maps/KitchenLower.png",
        upperSrc: "/images/maps/KitchenUpper.png",
        gameObjects: {
            hero: new GameObject({ x: 3, y: 5 }),
            npc1: new GameObject({
                x: 9,
                y: 6,
                src: "/images/characters/people/npc1.png"
            }),
            npc2: new GameObject({
                x: 8,
                y: 7,
                src: "/images/characters/people/npc2.png"
            })
        }
    }
};
