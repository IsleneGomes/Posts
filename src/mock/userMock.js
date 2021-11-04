import mock from '../utils/mock';

// mock.onPost('/api/sign-in').reply(200, {
//   id: 1,
//   username: 'Islene',
//   password: 'string',
// });

mock.onPost('/home').reply((config) => {
    const { username, password } = JSON.parse(config.data);
    // console.log(user, password)

    if (username !== config.data.user && password !== config.data.password) {
      return [400, { message: 'Usuário ou senha incorretos' }];
    }
    // const user = {
    //   id: 1,
    //   username: 'Islene',
    //   password: 'string'
    // }
    return [200, {}];
  }
);