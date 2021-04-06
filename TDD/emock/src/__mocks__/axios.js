const data = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: { lat: '-37.3159', lng: '81.1496' }
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets'
    }
  }
]

export default {
  get: jest.fn(url => {
    if (url === 'https://www.wilvec.com/users/') {
      return Promise.resolve({
        data,
        status: 200
      })
    } else if (url === 'https://www.wilvec.com/users/1') {
        return Promise.resolve({
            data: data[0],
            status: 200
        });
    } else {
        throw new Error('Mock error Code 404');
    }
  })
};
