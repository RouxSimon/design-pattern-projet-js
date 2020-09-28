const { PhotoParameters, VideoParameters, TextParameters, SongParameters } = require ('./models/FileParameters');
const { kindOfFile, Factory } = require('./models/FactoryFile');

class Bdd {
    factory = Factory.get();
    files = [
        this.factory.createFile(kindOfFile.PHOTO_FILE, new PhotoParameters('photo.jpg', 1024, 'jpg', 1000)), 
        this.factory.createFile(kindOfFile.VIDEO_FILE, new VideoParameters('video.mp4', 1024, 'jpg', 1000)),
        this.factory.createFile(kindOfFile.TEXT_FILE, new TextParameters('text.txt', 1024, 'jpg', 1000)),
        this.factory.createFile(kindOfFile.SONG_FILE, new SongParameters('song.mp3', 1024, 'jpg', 1000))
    ]

    insertNewFiles( newElements ) {
        this.files = this.files.concat(newElements);
    }

    getFiles() {
        return this.files;
    }

    replace(oldFile, newFile) {
        const index = this.files.indexOf(oldFile);
        this.files[index] = newFile;
    }
}

module.exports = { Bdd };