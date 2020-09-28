function photoFile(filename, size, type, pixelNumber){
    const getInfo = function() {
        return `Name : ${filename} / size : ${size} / type : ${type} / pixelNumber : ${pixelNumber}`;
    }
    return {
        getInfo,
    }
}
function videoFile(filename, size, type, hd){
    const getInfo = function() {
        return `Name : ${filename} / size : ${size} / type : ${type} / hd : ${hd}`;
    }
    return {
        getInfo,
    }
}
function songFile(filename, size, type, converted){
    const getInfo = function() {
        return `Name : ${filename} / size : ${size} / type : ${type} / converted : ${converted}`;
    }
    return {
        getInfo,
    }
}
function textFile(filename, size, type, encrypted){
    const getInfo = function() {
        return `Name : ${filename} / size : ${size} / type : ${type} / encrypted : ${encrypted}`;
    }
    return {
        getInfo,
    }
}

module.exports = { photoFile, videoFile, songFile, textFile }