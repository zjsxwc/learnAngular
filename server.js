var connect = require('connect'),
    serveStatic = require('serve-static');

var app = connect();

app.use(serveStatic("./pages"));
app.listen(5000);