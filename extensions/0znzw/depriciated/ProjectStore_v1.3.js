const ProjectStore = class {
    /*
     * @0znzw || DO NOT REMOVE THIS COMMENT || v1.4
     * LICENSED UNDER Creative Commons Attribution 4.0 International.
     * https://creativecommons.org/licenses/by/4.0/deed.en
     * https://creativecommons.org/licenses/by/4.0/legalcode.en
    */
    #namespace;
    constructor(_namespace) {
        this.#namespace = _namespace;
        vm.project_data = JSON.parse(vm.toJSON())['project_data'] || {};
        if (vm.toJSONbound == undefined) vm.toJSONbound = vm.toJSON.bind(vm);
        vm.project_data[this.#namespace] = vm.project_data[this.#namespace] || {};
        vm.toJSON = this.#toJSON;
    }
    #toJSON(e, t) {
        let tmp = JSON.parse(vm.toJSONbound(e, t));
        tmp['project_data'] = vm.project_data || {};
        return JSON.stringify(tmp);
    }
    get(prop) {
        return vm.project_data[this.#namespace][prop];
    }
    set(prop, value) {
        vm.project_data[this.#namespace][prop] = value;
    }
    remove(prop) {
        vm.project_data[this.#namespace][prop] = {};
        delete vm.project_data[this.#namespace][prop];
    }
    unhook() {
        vm.project_data[this.#namespace] = {};
        delete vm.project_data[this.#namespace];
    }
}