const { CLIView } = require('../views/View');
const { Observer } = require('./Observer');

class Controller {
    view = new CLIView();
    welcomeMessage = 'Bonjour, pour afficher les fichiers utilisez les flèches directionnelles.\n';

    constructor (datas) {
        const observer = new Observer( this.view, datas );
        this.view.on( observer.checkKey, observer );
    }

    run() {
        this.view.renderMessage(this.welcomeMessage);
        this.view.display();
    }
}

module.exports = { Controller };