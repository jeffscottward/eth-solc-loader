'use strict'

var ethSolcLoader = require('../')
var test = require('tape')

test('awesome:test', function (t) {
  t.ok(ethSolcLoader() === 'awesome')
  t.end()
})
