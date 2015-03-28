/**
 * Created by lpc on 28/03/15.
 */
var server = require("./server.js");
var router = require("./router.js");
var requestHandlers = require("./requestHandlers.js");


var handle = {}
handle["/"] = requestHandlers.getMessage;
handle["/getMessage"] = requestHandlers.getMessage;
handle["/getPicture"] = requestHandlers.getPicture;
handle["/getMusic"] = requestHandlers.getMusic;

server.start(router.route, handle);
