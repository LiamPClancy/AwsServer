/**
 * Created by lpc on 28/03/15.
 */

function getMessage(response){
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("From The Expanded App");
    response.end();
}

function getPicture(response){
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("No pic available");
    response.end();
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

