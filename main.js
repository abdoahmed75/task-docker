const express = require("express")
const Host = express()
const port_number = 300
Host.get('/', (req, res) => {
    res.send('hello my name is abdullah ahmed and section 2')
})


Host.listen(port_number, () => {
    console.log(`listening`)
})
