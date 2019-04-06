const page = require('./homepage.json')
const follow = require('./commend.json')
const list = require('./cookbook-list.json')
const detail = require('./cookbook-detail.json')
const category = require('./cookbook-category.json')
const reno = require('./reno.json')

module.exports = function() {
  return {
    page,
    follow,
    list,
    detail,
    category,
    reno
  }
}