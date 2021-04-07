const { Given, When, Then } = require('cucumber');
const assert = require('assert').strict;
const resHelper = require('../util/resHelper');

Given('un contacto {}', request => {
  this.context['request'] = JSON.parse(request);
});

When('envio una solicitud POST a {}', async path => {
  this.context['response'] = await resHelper.postData(
    `${process.env.SERVICE_URL}${path}`,
    this.context['request']
  );
});
/*
Then('yo obtengo el código de respuesta {int}', async code => {
  assert.equal(this.context['response'].status == code);
});
*/