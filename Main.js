const { Factory, kindOfFile } = require ('./models/FactoryFile');
const { PhotoParameters, SongParameters } = require ('./models/FileParameters');
const { Controller } = require('./Controllers/Controller');
const { Bdd } = require('./Bdd');

const datas = new Bdd();
const controller = new Controller(datas);

controller.run();

setTimeout( () => {
    const factory = Factory.get();
    datas.insertNewFiles([
        factory.createFile(kindOfFile.PHOTO_FILE, new PhotoParameters('last_ski_session.jpg', 4424, 'jpg', 4000)),
        factory.createFile(kindOfFile.SONG_FILE, new SongParameters('dems.mp3', 7024, 'mp3', false))
    ]);
}, 30000);