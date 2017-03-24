var express = require('express')

var app = express()

app.get('', function(req, res){
    
    var result = {}
    
    result.ipaddress    = "ipaddress"
    result.language     = "language"
    result.software     = "software"
    
    res.send(JSON.stringify(result))
})

.listen(process.env.PORT || 8080)