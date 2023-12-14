const path    = require('path');
const express = require('express')
const cors    = require('cors')
const db      = require('./db')
const app     = express()
const port    = 3000
const clientPath = path.resolve(__dirname, '../client/dist')

app.use(express.static(clientPath))
app.use(cors())


app.post  ('/api/links'    , db.createLink);//C
app.get   ('/api/links'    , db.getLinks)   //R
app.put   ('/api/links/:id', db.updateLink);//U
app.delete('/api/links/:id', db.deleteLink);//D


app.use(express.static(path.resolve(__dirname, '../client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'))
    })

app.listen(port, () => {
console.log(`App running on port ${port}.`)
})