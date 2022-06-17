export default class RIPCharacterSheet extends ActorSheet {

    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            template: `systems/foundry-ripts/templates/sheets/character-sheet.html`,
            classes: ["ripts", "sheet", "character"]
        });
    }

    getData() {
        const data = super.getData();

        data.config = CONFIG.ripts;

        return data;
    }
}