const { Observer } = require('../controllers/Observer');

// log helper
const logger = (function () {
    let log = "";
 
    return {
        add: function (msg) { 
            log += msg; 
        },
        show: function () { 
            console.log(log); log = ""; 
        }
    }
})();

class CLIView {
    encoding = 'utf8';
    observable = process.stdin;

    constructor() {
        this.observable.setRawMode( true );
        this.observable.resume();
        this.observable.setEncoding( this.encoding );        
    }

    on( func, ctxt) {
        this.observable.on( 'data', func.bind(ctxt));
    }    
    
    renderMessage(message) {
        logger.add(message);
    }

    renderFiles(files) {
        for (let i = 0, len = files.length; i < len; i++) {
            logger.add(files[i].getInfo());
        }
    }

    display() {        
        logger.show();
    }
}

module.exports = { CLIView };