const { PhotoParameters, VideoParameters, TextParameters, SongParameters } = require ('./models/FileParameters');
const { kindOfFile, Factory } = require('./models/FactoryFile');

class Bdd {
    factory = Factory.get();
    files = [
        this.factory.createFile(kindOfFile.PHOTO_FILE, new PhotoParameters('surf_at_lacanau.jpg', 1024, 'jpg', 1000)), 
        this.factory.createFile(kindOfFile.TEXT_FILE, new TextParameters('documentation_react.docx', 2024, 'docx', true)),
        this.factory.createFile(kindOfFile.SONG_FILE, new SongParameters('love_yourself.mp3', 6024, 'mp3', true)),
        this.factory.createFile(kindOfFile.VIDEO_FILE, new VideoParameters('got.avi', 10024, 'avi', true)),
        this.factory.createFile(kindOfFile.PHOTO_FILE, new PhotoParameters('party_at_cancun.jpg', 1424, 'jpg', 3000)),
        this.factory.createFile(kindOfFile.TEXT_FILE, new TextParameters('my_best_book.pdf', 3024, 'pdf', false)),
        this.factory.createFile(kindOfFile.SONG_FILE, new SongParameters('my_song.mp3', 8024, 'mp3', false)),
        this.factory.createFile(kindOfFile.VIDEO_FILE, new VideoParameters('breaking_bad.mp4', 8024, 'mp4', false)),
        this.factory.createFile(kindOfFile.PHOTO_FILE, new PhotoParameters('family.png', 2024, 'png', 2000)),
        this.factory.createFile(kindOfFile.TEXT_FILE, new TextParameters('documentation_react.docx', 2024, 'docx', true)),
        this.factory.createFile(kindOfFile.SONG_FILE, new SongParameters('band.mp3', 2024, 'mp3', true)),
        this.factory.createFile(kindOfFile.VIDEO_FILE, new VideoParameters('youtube.mp4', 12024, 'mp4', true))
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