import React from 'react';
import AdminPanel from './AdminPanel';
import {shallow} from 'enzyme';

describe('Shallow Admin Panel', ()=>{
  it('Object Check', ()=>{
    let wrapper = shallow(<AdminPanel />)
    console.log(wrapper);
    expect(wrapper.exists('.admin-grid')).toEqual(true);
  })
})
