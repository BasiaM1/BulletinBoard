export const initialState = {
  posts: {
    data: [ {
      id: '1',
      title: 'textTitle1',
      text: 'text1',
      created: '2020.12.03',
      updated: '2020.12.06',
      email: 'Email1',
      status: 'published',
      price: 24,
      phone: 345876987,
      location: 'Warsaw',
      userId: '2',
    },
    {
      id: '2',
      title: 'textTitle2',
      text: 'text2',
      created: '2020.11.29',
      updated: '2020.11.30',
      email: 'Email2',
      status: 'published',
      price: 28,
      phone: 521876987,
      location: 'Warsaw',
      userId: '4',
    },
    {
      id: '3',
      title: 'textTitle3',
      text: 'text3',
      created: '2020.12.29',
      updated: '2020.12.30',
      email: 'Email3',
      status: 'published',
      price: 132,
      phone: 724876987,
      location: 'Krakow',
      userId: '4',

    } ],

    loading: {
      active: false,
      error: false,
    },
  },
  users: [
    {
      id: '1',
      name: 'admin',
      role: 'admin',
      active: true,
    },
    {
      id: '2',
      name: 'logged user1',
      role: 'logged',
      active: true,
    },

    {
      id: '3',
      name: 'not logged user',
      role: 'not logged',
      active: false,
    },
    {
      id: '4',
      name: 'logged user2',
      role: 'logged',
      active: true,
    },
  ],

};
