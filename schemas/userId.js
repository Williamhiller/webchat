let mongoose = require('mongoose')
//  聊天记录模型
let UserIdSchema = new mongoose.Schema({
  name: String,
  id: Number
})

UserIdSchema.static({
  fetch: function (cb) {
    return this
      .find({})
      .sort('meta.updateAt')
      .exec(cb)
  },
  findById: function (id, cb) {
    return this
      .findOne({_id: id})
      .exec(cb)
  }
})
module.exports = UserIdSchema
