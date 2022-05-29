import Overworld from "./Overworld.js";

(() => {
    const overworld = new Overworld({
        element: document.querySelector(".game-container")!
    });
    overworld.init();
})();
