// function photoFile(filename, size, type, pixelNumber)
// function videoFile(filename, size, type, hd)
// function songFile(filename, size, type, converted)
// function textFile(filename, size, type, encrypted)


const File = function File(filename, size, type, pixelNumber) {
  this.filename = filename;
  this.size = size;
  this.type = type;
  this.pixelNumber = pixelNumber;
};

File.prototype.Afficher = function() {
  return `Name : ${this.filename} / size : ${this.size} / type : ${this.type}`;
};

const fileA = new File('Iphone', '1024', 'jpg', 'erer');
console.log('fileA', fileA.Afficher());

const FileFactory = function() {};

FileFactory.prototype.displayFile = function(type, params = {}) {
  switch (type) {
      case 'photoFile':
          this.pixelNumber = 'test';
          break;
      case 'videoFile':
          //dunno
          break;
      case 'songFile':
          //dunno
          break;
      case 'textFile':
          //dunno
          break;
  }

  return new this.numericProductClass(params);
};

const photoFile = function(params) {
  const { type, pixelNumber } = params;
  this.filename = filename;
  this.size = size;
};

const videoFile = function(params) {
  const { type, hd } = params;
  this.filename = filename;
  this.size = size;
};

const songFile = function(params) {
  const { type, converted } = params;
  this.filename = filename;
  this.size = size;
};

const textFile = function(params) {
  const { type, encrypted } = params;
  this.filename = filename;
  this.size = size;
};
