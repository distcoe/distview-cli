'use strict'
const config = require('../templates')

module.exports = () => {
  const templateList = Object.keys(config.tpl);
  templateList.forEach((template, index) => {
    console.log(template)
  })
  process.exit()
}