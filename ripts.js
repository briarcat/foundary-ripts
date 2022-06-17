import {ripts} from "./module/config.js"
import RIPItemSheet from "./module/sheets/RIPItemSheet.js";
import RIPCharacterSheet from "./module/sheets/RIPCharacterSheet.js";

async function preloadHandlebarsTemplates() {
    const templatePaths = [
        "systems/foundry-ripts/templates/partials/character-details-block.hbs"
    ];

    return loadTemplates(templatePaths);
};

Hooks.once("init", function () {
    console.log("ripts | Initializing RIP The Stars System");

    CONFIG.ripts = ripts;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("ripts", RIPItemSheet, {makeDefault: true});

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("ripts", RIPCharacterSheet, {makeDefault: true});

    preloadHandlebarsTemplates();
});