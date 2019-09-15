let mongoose = require('mongoose')
let UserIdSchema = require('../schemas/userId')
let UserIds = mongoose.model('Id', UserIdSchema)

module.exports = UserIds
