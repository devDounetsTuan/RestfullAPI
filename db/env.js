var path = require('path'),
rootPath = path.normalize(__dirname + '/../../');

module.exports = {
development: {
         rootPath: rootPath,
         db: 'mongodb://admin:D%40uheo1001@ds149309.mlab.com:49309/thiendia69',
         port: process.env.PORT || 3000
},
production: {
         rootPath: rootPath,
         db: process.env.MONGOLAB_URI || 'you can add a mongolab uri here ($ heroku config | grep MONGOLAB_URI)',
         port: process.env.PORT || 80
}
};