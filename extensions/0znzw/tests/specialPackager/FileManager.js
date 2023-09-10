/*
  Created by 0znzw | v1.2
  Licensed Under MIT License.
  DO NOT REMOVE THIS COMMENT!!
*/
(function(Scratch) {
    'use strict';

    let fs;
    try {
      fs = window.fileSystemPromiseAPI;
    } catch(err) {
      console.log('')
    }

    class fileReader {
      getInfo() {
        return {
          id: '0znzwFileManager',
          name: 'File Manager',
          blocks: [
            {
              blockType: Scratch.BlockType.BOOLEAN,
              opcode: 'can_use_api',
              text: 'packaged-file api avalible?'
            },
            {
              blockType: Scratch.BlockType.LABEL,
              text: 'Directorys'
            },
            {
              blockType: Scratch.BlockType.BOOLEAN,
              opcode: 'isDirectory',
              text: 'is [PATH] a directory?',
              arguments: {
                PATH: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'C:\\Hello'
                }
              }
            },
            {
              blockType: Scratch.BlockType.COMMAND,
              opcode: 'mkDir',
              text: 'create directory [PATH]',
              arguments: {
                PATH: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'C:\\Hello'
                }
              }
            },
            {
              blockType: Scratch.BlockType.REPORTER,
              opcode: 'listDir',
              text: 'list files in directory [PATH]',
              arguments: {
                PATH: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'C:\\Hello'
                }
              }
            },
            {
              blockType: Scratch.BlockType.LABEL,
              text: 'File Reading'
            },
            {
              blockType: Scratch.BlockType.REPORTER,
              opcode: 'readFile',
              text: 'read file [PATH] as type [MODE]',
              arguments: {
                PATH: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'C:\\Hello\\world.txt'
                },
                MODE: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'text',
                  menu: 'modes'
                }
              }
            },
            {
              blockType: Scratch.BlockType.LABEL,
              text: 'File Writing'
            },
            {
              blockType: Scratch.BlockType.BOOLEAN,
              opcode: 'isFile',
              text: 'is [PATH] a file?',
              arguments: {
                PATH: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'C:\\Hello\\world.txt'
                }
              }
            },
            {
              blockType: Scratch.BlockType.COMMAND,
              opcode: 'createFile',
              text: 'create file [PATH]',
              arguments: {
                PATH: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'C:\\Hello\\world.txt'
                }
              }
            },
            {
              blockType: Scratch.BlockType.COMMAND,
              opcode: 'writeFile',
              text: 'write [DATA] to file [PATH] as type [MODE]',
              arguments: {
                DATA: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'Hello, World!'
                },
                PATH: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'C:\\Hello\\world.txt'
                },
                MODE: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'text',
                  menu: 'modes'
                }
              }
            },
            {
              blockType: Scratch.BlockType.LABEL,
              text: 'Attributes'
            },
            {
              blockType: Scratch.BlockType.LABEL,
              text: 'COMING SOON!'
            },
            {
              blockType: Scratch.BlockType.LABEL,
              text: 'Path Utils'
            },
            {
              blockType: Scratch.BlockType.BOOLEAN,
              opcode: 'pathExists',
              text: 'file / folder [PATH] exists?',
              arguments: {
                PATH: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'C:\\Hello\\world.txt'
                }
              }
            },
            {
              blockType: Scratch.BlockType.COMMAND,
              opcode: 'setDelim',
              text: 'set delimiter to [DELIM]',
              arguments: {
                DELIM: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: ';'
                }
              }
            },
            {
              blockType: Scratch.BlockType.COMMAND,
              opcode: 'setSeparator',
              text: 'set separator to [SEP]',
              arguments: {
                SEP: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: '\\'
                }
              }
            },
            {
              blockType: Scratch.BlockType.REPORTER,
              opcode: 'makeLong',
              text: 'convert path [PATH] to long/namespaced',
              arguments: {
                PATH: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'C:\\Hello\\world.txt'
                }
              }
            },
            {
              blockType: Scratch.BlockType.REPORTER,
              opcode: 'normalize',
              text: 'normalize path [PATH]',
              arguments: {
                PATH: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'C:\\Hello\\world.txt'
                }
              }
            },
            {
              blockType: Scratch.BlockType.REPORTER,
              opcode: 'relative',
              text: 'relative path from [PATH] to [PATH2]',
              arguments: {
                PATH: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'Hello'
                },
                PATH2: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'world.txt'
                }
              }
            },
            {
              blockType: Scratch.BlockType.REPORTER,
              opcode: 'getFilename',
              text: 'get filename from path [PATH]',
              arguments: {
                PATH: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'C:\\Hello\\world.txt'
                }
              }
            },
            {
              blockType: Scratch.BlockType.REPORTER,
              opcode: 'getExtensionname',
              text: 'get file extension from path [PATH]',
              arguments: {
                PATH: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'world.txt'
                }
              }
            },
            {
              blockType: Scratch.BlockType.REPORTER,
              opcode: 'getDirectoryname',
              text: 'get directory name from path [PATH]',
              arguments: {
                PATH: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'C:\\Hello\\world.txt'
                }
              }
            },
            {
              blockType: Scratch.BlockType.BOOLEAN,
              opcode: 'isAbsolute',
              text: 'is path [PATH] absolute?',
              arguments: {
                PATH: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'C:\\Hello\\world.txt'
                }
              }
            },
          ], menus: {
            encodings: {acceptReporters: true, items: '_getEncodings'},
            modes: {acceptReporters: true, items: ['text', 'base64']}
          }
        };
      }
      /* utility functions */
      _getEncodings(...args) {
        let json = ['utf8'];
        let argValues = Object.values(...args);
        if (argValues.length == 6) {
          return json.includes(argValues[5]);
        }
        return json;
      }
      _isFile(pathItem) {
        return !!pathAPI.extname(pathItem);
      }
      /* end utilitys */
      can_use_api() {
        try { fs && 1 } catch { return false };
        try { fileSystemAPI && 1 } catch { return false };
        try { fileSystemPromiseAPI && 1 } catch { return false };
        try { pathAPI && 1 } catch { return false };
        try { appAPI && 1 } catch { return false };
        return true;
      }
      /* path utils */
      setDelim({ DELIM }) {
        pathAPI.delimiter = Scratch.Cast.toString(DELIM);
      }
      setSeparator({ SEP }) {
        pathAPI.sep = Scratch.Cast.toString(SEP);
      }
      makeLong({ PATH }) {
        PATH = Scratch.Cast.toString(PATH);
        return pathAPI._makeLong(PATH);
      }
      normalize({ PATH }) {
        PATH = Scratch.Cast.toString(PATH);
        return pathAPI.normalize(PATH);
      }
      relative({ PATH, PATH2 }) {
        PATH = Scratch.Cast.toString(PATH);
        PATH2 = Scratch.Cast.toString(PATH2);
        return pathAPI.relative(PATH, PATH2);
      }
      getFilename({ PATH }) {
        PATH = Scratch.Cast.toString(PATH);
        return pathAPI.basename(PATH);
      }
      getDirectoryname({ PATH }) {
        PATH = Scratch.Cast.toString(PATH);
        return pathAPI.dirname(PATH);
      }
      getExtensionname({ PATH }) {
        PATH = Scratch.Cast.toString(PATH);
        return pathAPI.extname(PATH);
      }
      isAbsolute({ PATH }) {
        PATH = Scratch.Cast.toString(PATH);
        return pathAPI.isAbsolute(PATH);
      }
      joinPath({ PATH, PATH2 }) {
        PATH = Scratch.Cast.toString(PATH);
        PATH2 = Scratch.Cast.toString(PATH2);
        return pathAPI.join(PATH, PATH2);
      }
      parsePath({ PATH }) {
        PATH = Scratch.Cast.toString(PATH);
        return JSON.stringify(pathAPI.parse(PATH));
      }
      pathExists({ PATH }) {
        PATH = Scratch.Cast.toString(PATH);
        if (fileSystemAPI.existsSync(PATH)) {
          return true;
        }
        return false;
      }
      /* end path utils */
      /* reading files */
      async readFile({ PATH, MODE }) {
        PATH = Scratch.Cast.toString(PATH);
        MODE = Scratch.Cast.toString(MODE);
        let DATA = '';
        try {
          DATA = await fs.readFile(PATH, 'utf8');
        } catch(e) {
          console.error(e);
          return '';
        }
        switch(MODE) {
          case 'base64':
            DATA = Base64.encode(DATA);
          default:
            DATA = DATA;
        }
        return DATA;
      }
      /* end reading files */
      /* writing files */
      isFile({ PATH }) {
        PATH = Scratch.Cast.toString(PATH);
        if (!fileSystemAPI.existsSync(PATH)) return false;
        return this._isFile(PATH);
      }
      createFile({ PATH }) {
        PATH = Scratch.Cast.toString(PATH);
        fileSystemAPI.appendFile(PATH, '', function (err) {
          if (err) console.error(err);
        }); 
      }
      async writeFile({ DATA, PATH, MODE }) {
        DATA = Scratch.Cast.toString(DATA);
        PATH = Scratch.Cast.toString(PATH);
        MODE = Scratch.Cast.toString(MODE);
        switch(MODE) {
          case 'base64':
            DATA = Base64.decode(DATA);
          default:
            DATA = DATA;
        }
        fs.writeFile(PATH, DATA, function (err) {
          if (err) console.error(err);
        }); 
      }
      /* end writing files */
      /* directory's */
      isDirectory({ PATH }) {
        PATH = Scratch.Cast.toString(PATH);
        if (!fileSystemAPI.existsSync(PATH)) return false;
        return !this._isFile(PATH);
      }
      mkDir({ PATH }) {
        PATH = Scratch.Cast.toString(PATH);
        fs.access(PATH, (error) => {
          if (error) {
            fs.mkdir(PATH, { recursive: true }, (error) => {
              if (error) {
                console.log(error);
              }
            });
          }
        });
      }
      async listDir({ PATH }) {
        PATH = Scratch.Cast.toString(PATH);
        let files = await fileSystemAPI.readdirSync(PATH);
        return JSON.stringify(files);
      }
      /* end directory's */
    }
    Scratch.extensions.register(new fileReader());
  })(Scratch);