// this is a drop in replacement for v1.3, but you do need to hook it unlink the original

const ProjectStore = class {
    /*
     * @0znzw || DO NOT REMOVE THIS COMMENT || v1.4
     * LICENSED UNDER Creative Commons Attribution 4.0 International.
     * https://creativecommons.org/licenses/by/4.0/deed.en
     * https://creativecommons.org/licenses/by/4.0/legalcode.en
     */
    #namespace;
    #target;
    #data;
    constructor(_namespace) {
        this.#namespace = _namespace;
    }
    #isJSON(obj) {
        try {
            JSON.parse(obj);
            return true
        } catch {
            return false
        };
    }
    #getJSON() {
        return JSON.parse(this.#data.value);
    }
    #updateData(obj) {
        this.#data.value = JSON.stringify(obj);
    }
    #hasNamespace() {
        return this.#getJSON().hasOwnProperty(this.#namespace);
    }
    #initNamespace() {
        let json = this.#getJSON();
        json[this.#namespace] = {};
        this.#updateData(json);
    }
    isHooked = false;
    async #initSprite() {
      if (this.#getSprite() == undefined) await vm.addSprite({"isStage":false,"name":"\u0000\u0000\u0000\u0000project data\u0000\u0000\u0000\u0000","variables":{},"lists":{},"broadcasts":{},"blocks":{"uCn[~uv]RWN_/xQ6xNjw_projectStore":{"opcode":"procedures_definition","next":null,"parent":null,"inputs":{"custom_block":[1,"xlC:?,3e8,er1Vhv9Hht_projectStore"]},"fields":{},"shadow":false,"topLevel":true,"x":44,"y":44},"xlC:?,3e8,er1Vhv9Hht_projectStore":{"opcode":"procedures_prototype_projectStore","next":null,"parent":"uCn[~uv]RWN_/xQ6xNjw_projectStore","inputs":{"(t!0s{$)gN}I)5GTA)B4_projectStore":[1,"w)+5@NCxcn@3xC;HA9|(_projectStore"]},"fields":{},"shadow":true,"topLevel":false,"mutation":{"tagName":"mutation","children":[],"proccode":"%s","argumentids":"[\"(t!0s{$)gN}I)5GTA)B4_projectStore\"]","argumentnames":"[\"\"]","argumentdefaults":"[\"\"]","warp":"true"}},"w)+5@NCxcn@3xC;HA9|(_projectStore":{"opcode":"argument_reporter_string_number","next":null,"parent":"xlC:?,3e8,er1Vhv9Hht_projectStore","inputs":{},"fields":{"VALUE":["",null]},"shadow":true,"topLevel":false},"L}eN`m|v;fQu(k?lRf1S_projectStore":{"opcode":"procedures_call","next":null,"parent":null,"inputs":{"(t!0s{$)gN}I)5GTA)B4_projectStore":[1,[10,"project data"]]},"fields":{},"shadow":false,"topLevel":true,"x":323,"y":455,"mutation":{"tagName":"mutation","children":[],"proccode":"%s","argumentids":"[\"(t!0s{$)gN}I)5GTA)B4_projectStore\"]","warp":"true"}}},"comments":{},"currentCostume":0,"costumes":[{"name":"costume1","bitmapResolution":1,"dataFormat":"svg","assetId":"592bae6f8bb9c8d88401b54ac431f7b6","md5ext":"592bae6f8bb9c8d88401b54ac431f7b6.svg","rotationCenterX":44,"rotationCenterY":44}],"sounds":[],"volume":100,"visible":true,"x":0,"y":0,"size":100,"direction":90,"draggable":false,"rotationStyle":"all around"});
      return true;
    }
    #getSprite() {
        return vm.runtime.getSpriteTargetByName('\u0000\u0000\u0000\u0000project data\u0000\u0000\u0000\u0000');
    }
    async hook() {
        if (!this.isHooked) {
            await this.#initSprite();
            this.#target = this.#getSprite();
            this.#data = this.#getBlocksByOpcode('text')[0].fields.TEXT;
            if (!this.#isJSON(this.#data.value)) this.#data.value = '{}';
            if (!this.#hasNamespace()) this.#initNamespace();
            this.isHooked = true;
            return Promise.resolve();
        }
        return Promise.reject();
    }
    get(prop) {
        return this.#getJSON()[this.#namespace][prop];
    }
    set(prop, value) {
        let json = this.#getJSON();
        json[this.#namespace][prop] = value;
        this.#updateData(json);
    }
    remove(prop) {
        let json = this.#getJSON();
        delete json[this.#namespace][prop];
        this.#updateData(json);
    }
    unhook() {
        let json = this.#getJSON();
        delete json[this.#namespace];
        this.#updateData(json);
    }
    #getBlocksByOpcode(opcode) {
        let blocks = Object.values(this.#target.blocks._blocks);
        let myBlocks = [];
        for (let i = 0; i < blocks.length; i++) {
            let block = blocks[i];
            if (block.opcode == opcode) myBlocks.push(block);
        }
        return myBlocks;
    }
}