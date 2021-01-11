import React from 'react';
import { shallow } from 'enzyme';
import { HomepageComponent } from './Homepage';

const posts = [
  {
    id: 1,
    title: 'textTitle1',
    text: 'text1',
    created: '2020.12.03',
    updated: '2020.12.06',
    email: 'Email1',
    status: 'published',
    photo: 'foto1.jpg',
    price: 24,
    phone: 345876987,
    location: 'Warsaw',
  },

];
describe( 'Component Homepage', () => {
  it( 'should render without crashing', () => {
    const component = shallow( <HomepageComponent posts={ posts } /> );
    expect( component ).toBeTruthy();
  } );
} );
