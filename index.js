let PORT = process.env.PORT || 5000;
let express = require('express');
let app = express();

let http = require('http');
let server = http.Server(app);

app.use(express.static('client'));
app.post('/login',function (request,response){

})
server.listen(PORT, function() {

});


