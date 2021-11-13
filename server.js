// console.log('Node is running!')
const express = require('express')
const app = express()
app.use(express.static('public'))

app.use('/portfolio', require('./server/routes/portfolio'))    
app.use('/', require('./server/routes/index'))    

app.listen(3000, function() {

    console.log('Listening on PORT 3000')

})
