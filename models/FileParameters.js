class FileParameters {
    constructor(fileName, size, type) {
        this.fileName = fileName;
        this.size = size;
        this.type = type;
    }
}
class PhotoParameters extends FileParameters {
    constructor(fileName, size, type, pixelNumber) {
        super(fileName, size, type); 
        this.pixelNumber = pixelNumber;
    }
}
class VideoParameters extends FileParameters {
    constructor(fileName, size, type, hd) {
        super(fileName, size, type); 
        this.hd = hd;
    }
}
class SongParameters extends FileParameters {
    constructor(fileName, size, type, converted) { 
        super(fileName, size, type); 
        this.converted = converted;
    }
}
class TextParameters extends FileParameters {
    constructor(fileName, size, type, encrypted) {
        super(fileName, size, type); 
        this.encrypted = encrypted;
    }
}

module.exports = { PhotoParameters, VideoParameters, SongParameters, TextParameters };