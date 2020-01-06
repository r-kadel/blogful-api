require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { NODE_ENV } = require('./config')
const articlesRouter = require('./articles/articles-router')
const errorHandler = require('./error-handler')

const app = express()

const morganOption = NODE_ENV === 'production' ? 'tiny' : 'common'

app.use(morgan(morganOption))
app.use(helmet())
app.use(cors())

app.get('/xss', (req, res) => {
   res.cookie('secretToken', '1234567890');
   res.sendFile(__dirname + '/xss-example.html');
 });
 
app.use('/articles', articlesRouter)
app.use(errorHandler)

module.exports = app
