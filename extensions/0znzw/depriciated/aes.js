/* eslint-disable */
//This is here cause I made it, but its not going to be listed.
(function(Scratch) {
    'use strict';
  class AesCrypto {
    getInfo() {
      return {
        id: 'AesCrypto', // change this if you make an actual extension!
        name: 'AES',
        blocks: [
          {
            opcode: 'encryptAES',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Encrypt data: [data] with password: [pwd] and [bytes] bytes.',
            arguments: {
              pwd: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'password'
              },
              data: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Hello, World!'
              },
              bytes: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '256'
              }
            }
          },
          {
            opcode: 'decryptAES',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Decrypt data: [data] with password: [pwd] and [bytes] bytes.',
            arguments: {
              pwd: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'password'
              },
              data: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Hello, World!'
              },
              bytes: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '256'
              }
            }
          },
          {
            opcode: 'SetupAES',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Setup Librarys'
          }
        ]
      };
    }
  SetupAES() {
  //<script src="https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js" crossorigin="anonymous"></script>
  var JQscript = document.createElement('script');
  JQscript.src="https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js";
  JQscript.crossorigin="anonymous";
  window.document.body.appendChild(JQscript);
  //<script src="https://rawgit.com/victornpb/f639f37373be0f6e82e1/raw/5d8f7ee8b32ae04de087d2377d8086e3389ee411/AES.js" crossorigin="anonymous"></script>
  var AEscript = document.createElement('script');
  AEscript.src="https://rawgit.com/victornpb/f639f37373be0f6e82e1/raw/5d8f7ee8b32ae04de087d2377d8086e3389ee411/AES.js";
  AEscript.crossorigin="anonymous";
  window.document.body.appendChild(AEscript);
  }
  encryptAES(args) {
      var ciphertext = Aes.Ctr.encrypt(args.data, args.pwd, args.bytes);
      return ciphertext;
  }
   decryptAES(args) {
      var plain = Aes.Ctr.decrypt(args.data, args.pwd, args.bytes);
      return plain;
  }
  }
  Scratch.extensions.register(new AesCrypto());
  })(Scratch);
/* eslint-enable */