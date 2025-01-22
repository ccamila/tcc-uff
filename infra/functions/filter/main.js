const NGSIAgent = require('./ngsi/ngsiAgent.js');
const NGSIClient = require('./ngsi/ngsiClient.js');
const filterfunction = require('./filter.js');
const brokerURL = 'http://192.168.99.1:8071/ngsi10'
var ngsi10client = new NGSIClient.NGSI10Client(brokerURL);

function publish(ctxUpdate) {
    if (ngsi10client == null) {
        return
    }

    // if the output has been set, use the configured entity id and type
    if ('id' in output && 'type' in output) {
        ctxUpdate.entityId = {};
        ctxUpdate.entityId.id = output.id;
        ctxUpdate.entityId.type = output.type;
        ctxUpdate.entityId.isPattern = false;
    }

    console.log(ctxUpdate);

    ngsi10client.updateContext(ctxUpdate).then(function(data) {
        console.log('======send update======');
        console.log(data);
    }).catch(function(error) {
        console.log(error);
        console.log('failed to update context');
    });
}

function handleNotify(req, ctxObjects, res) {
    for (var i = 0; i < ctxObjects.length; i++) {
        console.log(ctxObjects[i]);
        try {
            filterfunction.handler(ctxObjects[i], publish, query, subscribe);
        } catch (error) {
            console.log(error)
        }
    }
}
// set up the NGSI agent to listen on 
NGSIAgent.setNotifyHandler(handleNotify);
NGSIAgent.setAdminHandler(handleAdmin);
NGSIAgent.start(myport, startApp);
process.on('SIGINT', function() {
    NGSIAgent.stop();    
    stopApp();
    
    process.exit(0);
});