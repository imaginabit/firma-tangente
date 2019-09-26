var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();

var config = {
    user: "tangente", // NOTE that this was username in 1.x 
    // password: "pass",           // optional, prompted if none given
    host: "fw1.freepresshost.com",
    port: 21,
    localRoot: __dirname + '/dist',
    remoteRoot: '/public_html/tangente.coop/firma/',
    include: ['*', '**/*'], // this would upload everything except dot files
    // include: ['*.php', 'dist/*'],
    // exclude: ['dist/**/*.map'],     // e.g. exclude sourcemaps - ** exclude: [] if nothing to exclude **
    deleteRemote: false, // delete ALL existing files at destination before uploading, if true
    forcePasv: true // Passive mode is forced (EPSV command is not sent)
}

// use with promises
ftpDeploy.deploy(config)
    .then(res => console.log('finished:', res))
    .catch(err => console.log(err))