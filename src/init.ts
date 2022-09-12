import Overworld from "./overworld.js";

(() => {
    const overworld = new Overworld({
        element: document.querySelector(".game-container")!
    });

    overworld.init();
})();
