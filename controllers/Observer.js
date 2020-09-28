const { Factory } = require ('../models/FactoryFile');

class Observer {
    fileIndex = -1; 
    viewedFilesNumber = 0;

    constructor( view, datas ) {
        this.myView = view;
        this.datas = datas;
    }

    checkKey(key) {
        const myFiles = this.datas.getFiles();
        const factory = Factory.get();
        let currentFile;

        // Ctrl+C ( exit )
        if ( key === '\u0003' ) {
            process.exit();
        }
        // Write the key to stdout all normal like
        switch (key) {
            // right arrow
            case '\u001B\u005B\u0043':
                this.fileIndex = (this.fileIndex + 1)%myFiles.length;
                currentFile = myFiles[this.fileIndex];
                this.myView.renderFiles([currentFile]);
                if(!currentFile.hasOwnProperty('state')) {
                    this.datas.replace(this.fileIndex, factory.createFileState(currentFile));
                    this.viewedFilesNumber ++;
                }
            break;
            // left arrow
            case '\u001B\u005B\u0044':
                if (this.fileIndex > 0) {
                    this.fileIndex --;
                } else {
                    this.fileIndex = myFiles.length-1;
                }
                currentFile = myFiles[this.fileIndex];
                this.myView.renderFiles([currentFile]);
                if(!currentFile.hasOwnProperty('state')) {
                    this.datas.replace(this.fileIndex, factory.createFileState(currentFile));
                    this.viewedFilesNumber ++;
                }
            break;
            case 'c':
                console.log(`Here is ${myFiles.length} files right now !`);
            break;
            case 'e':
                console.log(`You have already seen ${this.viewedFilesNumber} differents files !`);
            break;
            default:
            return; // Quitter lorsque cela ne gère pas l'événement touche.
        }
        this.myView.display();
    }
}

module.exports = { Observer };