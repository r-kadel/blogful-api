require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { NODE_ENV } = require('./config')
const articlesRouter = require('./articles/articles-router')
const errorHandler = require('./error-handler')
const usersRouter = require('./users/users-router')
const commentsRouter = require('./comments/comments-router')

const app = express()

const morganOption = NODE_ENV === 'production' ? 'tiny' : 'common'

app.use(morgan(morganOption))
app.use(helmet())
app.use(cors())

app.use('/api/comments', commentsRouter)
app.use('/api/users', usersRouter)
app.use('/api/articles', articlesRouter)
app.use(errorHandler)

module.exports = app
