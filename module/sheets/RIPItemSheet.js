export default class RIPItemSheet extends ItemSheet {

    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            width: 530,
            height: 720,
            classes: ["ripts", "sheet", "item"]
        });
    }

    get template() {
        return `systems/foundry-ripts/templates/sheets/${this.item.data.type}-sheet.html`;
    }

    getData() {
        const data = super.getData();

        data.config = CONFIG.ripts;

        return data;
    }
}