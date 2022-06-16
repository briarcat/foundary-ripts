import RIPItemSheet from "./module/sheets/RIPItemSheet";

Hooks.once("init", function(){
   console.log("ripts | Initializing RIP The Stars System");

   Items.unregisterSheet("core", ItemSheet);
   Items.registerSheet("ripts", RIPItemSheet, { makeDefault: true});
});