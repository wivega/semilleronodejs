const { Given, When, Then } = require('cucumber');
const assert = require('assert').strict;
const restHelper = require('../util/resthelper');
let result;
let response;


Given('un contacto {}', (x) => {
  result = JSON.parse(x);
});

When('envio una solicitud POST a {}', async (path) => {
  //console.log(`${process.env.SERVICE_URL}${path}`);
  response = await restHelper.postData(`http://localhost:80${path}`, result);
});

Then('yo obtengo el codigo de respuesta {int}', async (code) => {
  assert.equal(response.status, code);
});



let id;

Given('The contact with {int} exist', (x) => {
 id =  x ;
});

When('I send GET request to {}', async (path) => {
  //console.log(`${process.env.SERVICE_URL}${path}`);
  response = await restHelper.getData(`http://localhost:80${path}/${id}`);
  console.log(response);
});

Then(/^I receive (.*)$/, async (dat) => {     
  console.log(JSON.parse(dat));
  assert.deepEqual(response.data,JSON.parse(dat));
});

// Then(/^I receive (.*)$/, async function (expectedResponse) {
//   assert.deepEqual(this.context['response'].data, JSON.parse(expectedResponse));
// })

// Scenario Outline: get contact
// Given The contact with <id> exist
// When I send GET request to /directory
// Then I receive <response>

// Examples:
// | id | response                                                                                                                                      |
// | 99 | {"id":99,"name":"Dwayne Klocko","email":"Rene30@hotmail.com","phoneNumber":"1-876-420-9890","secondaryPhoneNumber": "(914) 249-3519"}         |
// | 7  | {"id":7,"name":"Ian Weimann DVM","email":"Euna_Bergstrom@hotmail.com","phoneNumber":"(297) 962-1879", "secondaryPhoneNumber": "788.323.7782"} |

