/*!
 * VERSION 1.0
 * Originally created by https://scratch.mit.edu/users/0znzw/ | Licensed Under the MIT License
 * DO NOT REMOVE THIS COMMENT
 */
(function(Scratch) {
  'use strict';
  if (!Scratch.extensions.unsandboxed) {
    throw new Error(`QueryParams must run unsandboxed`);
  }
  const urlParams = new URLSearchParams(window.location.search);
  const vm = Scratch.vm;
  class QueryParams {
  getInfo() {
    return {
      id: '0znzwQueryParams',
      name: 'Query Parameters',
      color1: "#b4b4b4",
      color2: "#9c9c9c",
      color3: "#646464",
      blocks: [{
        opcode: 'setParam',
        blockType: Scratch.BlockType.COMMAND,
        text: 'set param [name] to [value]',
        arguments: {
            name: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'fps'
            },
            value: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '60'
            }
        }
      }, {
        opcode: 'appendParam',
        blockType: Scratch.BlockType.COMMAND,
        text: 'append param [name] with value [value]',
        arguments: {
            name: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'fps'
            },
            value: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '60'
            }
        }
      }, '---',  {
        opcode: 'deleteParam',
        blockType: Scratch.BlockType.COMMAND,
        text: 'remove param [name]',
        arguments: {
            name: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'extension'
            }
        }
      }, '---', {
        opcode: 'hasParam',
        blockType: Scratch.BlockType.BOOLEAN,
        text: 'has param [name]',
        arguments: {
            name: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'extension'
            }
        }
      }, {
        opcode: 'sortParam',
        blockType: Scratch.BlockType.REPORTER,
        text: 'get sorted parameters'
      }, '---', {
        opcode: 'getParam',
        blockType: Scratch.BlockType.REPORTER,
        text: 'get param [name]',
        arguments: {
            name: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'extension'
            }
        }
      }, {
        opcode: 'getAllParam',
        blockType: Scratch.BlockType.REPORTER,
        text: 'get all params named [name]',
        arguments: {
            name: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'extension'
            }
        }
      },  {
        opcode: 'getValues',
        blockType: Scratch.BlockType.REPORTER,
        text: 'get all values'
      }, {
        opcode: 'getKeys',
        blockType: Scratch.BlockType.REPORTER,
        text: 'get all keys'
      }, {
        opcode: 'getAll',
        blockType: Scratch.BlockType.REPORTER,
        text: 'get all in pairs'
      }, '---', {
        opcode: 'refreshURI',
        blockType: Scratch.BlockType.COMMAND,
        text: 'update url'
      }]};
  }
  hasParam({ name }) {
    return urlParams.has(name);
  }
  getParam({ name }) {
    return decodeURIComponent(urlParams.get(name));
  }
  getAllParam({ name }) {
    return JSON.stringify(urlParams.getAll(name));
  }
  setParam({ name, value }) {
    urlParams.set(name, encodeURIComponent(value));
  }
  deleteParam({ name }) {
    urlParams.delete(name);
    'sort values keys';
  }
  appendParam({ name, value}) {
    urlParams.append(name, encodeURIComponent(value));
  }
  sortParam() {
    return urlParams.sort();
  }
  getValues() {
    const values = [];
    for (const value of urlParams.values()) {
      values.push(value);
    }
    return JSON.stringify(values);
  }
  getKeys() {
    const keys = [];
    for (const key of urlParams.keys()) {
      keys.push(key);
    }
    return JSON.stringify(keys);
  }
  getAll() {
    const pairs = [];
    for (const [key, value] of urlParams.entries()) {
      pairs.push({key, value});
    }
    return pairs;
  }
  refreshURI() {
    history.replaceState(null, "", "?" + urlParams.toString());
  }
}
  Scratch.extensions.register(new QueryParams());
})(Scratch);