var express = require('express')

var app = express()

app.get('', function(req, res){
    
    var result = {}
    
    result.ipaddress    = req.headers['x-forwarded-for']
    result.language     = req.headers['accept-language'].substring(0,5)
    result.software     = req.headers['user-agent'].substring(req.headers['user-agent'].indexOf('(')+1,req.headers['user-agent'].indexOf(')'))
    
    res.send(JSON.stringify(result))
})

.listen(process.env.PORT || 8080)