/* eslint-disable */
//This is here cause I made it, but its not going to be listed.
(function(Scratch) {
    'use strict';
  class RsaCrypto {
    getInfo() {
      return {
        id: 'RsaCrypto',
        name: 'RSA',
        blocks: [
          {
            opcode: 'encryptRSA',
            blockType: Scratch.BlockType.REPORTER,
            text: 'RSA.Encrypt data: [data] with public-key: [pbl].',
            arguments: {
              pbl: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ''
              },
              data: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Hello, World!'
              }
            }
          },
          {
            opcode: 'decryptRSA',
            blockType: Scratch.BlockType.REPORTER,
            text: 'RSA.Decrypt data: [data] with private-key: [prv].',
            arguments: {
              prv: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ''
              },
              data: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Hello, World!'
              }
            }
          },
          {
            opcode: 'SetupRSA',
            blockType: Scratch.BlockType.COMMAND,
            text: 'RSA.Setup Librarys'
          }
        ]
      };
    }
    SetupRSA() {
      var RSAscript = document.createElement('script');
      RSAscript.src="https://cdn.jsdelivr.net/gh/travist/jsencrypt@master/bin/jsencrypt.min.js";
      RSAscript.crossorigin="anonymous";
      window.document.body.appendChild(RSAscript);
      }
  encryptRSA(args) {
      var crypt = new JSEncrypt();
      crypt.setKey(args.pbl);
      var ciphertext = crypt.encrypt(args.data);
      return ciphertext;
  }
   decryptRSA(args) {
      var crypt = new JSEncrypt();
      crypt.setKey(args.prv);
      var plain = crypt.decrypt(args.data);
      return plain;
  }
  }
  Scratch.extensions.register(new RsaCrypto());
  })(Scratch);
  
/* eslint-enable */