const config = require('./config/config');
const app = require('./index')

var port = config.port;
app.listen(port, () => {
    console.log('Backend Server with Express running on *:' + port);
});