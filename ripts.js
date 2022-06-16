import {ripts} from "./module/config.js"
import RIPItemSheet from "./module/sheets/RIPItemSheet.js";

Hooks.once("init", function () {
    console.log("ripts | Initializing RIP The Stars System");

    CONFIG.ripts = ripts;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("ripts", RIPItemSheet, {makeDefault: true});
});