const { Given, When, Then } = require('cucumber')
const { request } = require('http')
const assert = require('assert').strict
const restHelper = require('../util/restHelper')

Given('un contacto {}', request => {
  this.context['request'] = JSON.parse(request)
})

When('envio una solicitud POST a {}', async path => {
  this.context['response'] = await restHelper.postData(
    `${process.env.SERVICE_URL}${path}`,
    this.context['request']
  )
})

Then('yo obtengo el codigo de respuesta {int}', async code => {
  assert.equal(this.context['response'].status, code)
})
