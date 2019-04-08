const page = require('./index.json')
const follow = require('./commend.json')
const followData = require('./follow.json')
const reno = require('./reno.json')
const navList = require('./navList.json')
const lookData = require('./look.json')

module.exports = function() {
  return {
    page,
    follow,
    followData,
    reno,
    navList,
    lookData
  }
}