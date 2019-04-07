const page = require('./index.json')
const follow = require('./commend.json')
const followData = require('./follow.json')
const reno = require('./reno.json')
const navList = require('./navList.json')

module.exports = function() {
  return {
    page,
    follow,
    followData,
    reno,
    navList
  }
}