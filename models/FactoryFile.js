const { photoFile, videoFile, songFile, textFile } = require ('./FilesModel');

// FACTORY

const kindOfFile = {
    SONG_FILE: 'songFile',
    TEXT_FILE: 'textFile',
    VIDEO_FILE: 'videoFile',
    PHOTO_FILE: 'photoFile'
}
const STATE_VU = '1';

const stateDecorator = (file, state) => {
    file.state = state;
    const oldFileInfo = file.getInfo();
    
    file.getInfo = () => {
        return oldFileInfo + ` / state : ${state}`;
    };
    return file;
};

const Factory = (function() {
    let instance;

    const Init = function() {

        const createFile = function(fileType, param) {
            let fileInstance;
    
            if (fileType === kindOfFile.PHOTO_FILE) {
                fileInstance = new photoFile(param.fileName, param.size, param.type, param.pixelNumber);
            } else if (fileType === kindOfFile.VIDEO_FILE) {
                fileInstance = new videoFile(param.fileName, param.size, param.type, param.hd);
            } else if (fileType === kindOfFile.TEXT_FILE) {
                fileInstance = new textFile(param.fileName, param.size, param.type, param.encrypted);
            } else if (fileType === kindOfFile.SONG_FILE) {
                fileInstance = new songFile(param.fileName, param.size, param.type, param.converted);
            }
    
            return fileInstance;
        }

        const createFileState = function(file){
            return stateDecorator(file, STATE_VU);
        }

        return {
            createFile,
            createFileState
        }
    };

    return {
        get: () => {
            if (!instance) {
                instance = Init();
            }

            return instance;
        }
    };
})();

module.exports = { Factory, kindOfFile };