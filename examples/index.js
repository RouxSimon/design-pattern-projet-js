// FACTORY TEST

function Factory() {
    this.createFile = function (fileType, param) {
        const fileInstance;

        if (fileType === "photoFile") {
            fileInstance = new photoFile(param.filename, param.size, param.type, param.pixelNumber);
        } else if (type === "videoFile") {
            fileInstance = new videoFile(param.filename, param.size, param.type, param.hd);
        } else if (type === "textFile") {
            fileInstance = new textFile(param.filename, param.size, param.type, param.encrypted);
        } else if (type === "songFile") {
            fileInstance = new songFile(param.filename, param.size, param.type, param.converted);
        }

        return fileInstance;
    }
}

// log helper
var log = (function () {
    var log = "";
 
    return {
        add: function (msg) { log += msg + "\n"; },
        show: function () { console.log(log); log = ""; }
    }
})();
 
function run() {
    const files = [];
    const factory = new Factory();
 
    files.push(factory.createFile("photoFile"));
    files.push(factory.createFile("songFile"));
    files.push(factory.createFile("textFile"));
    files.push(factory.createFile("videoFile"));
    
    for (const i = 0, len = files.length; i < len; i++) {
        files[i].afficher();
    }
 
    log.show();
}
