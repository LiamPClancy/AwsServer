/**
 * Created by lpc on 28/03/15.
 */

fs = require('fs');
path = require('path');

function getMessage(response){
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("From The Expanded App");
    response.end();
}

function getPicture(response){
    //var picturePathText = path.join(_dirName, );
    if (fs.existsSync('./orangeBirthday.jpeg'))
    {
        var img = fs.readFileSync('./orangeBirthday.jpeg');
    }


    response.writeHead(404, {"Content-Type": "image/jpeg"});
    response.end(img);

}

function getMusic(response){
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("No music available");
    response.end();
}

function postMessage(response){
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("No post");
    response.end();
}

exports.getMessage = getMessage;
exports.getPicture = getPicture;
exports.getMusic = getMusic;
exports.postMessage = postMessage;

