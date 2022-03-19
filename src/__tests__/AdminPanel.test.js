import React from 'react';
import {shallow} from 'enzyme';
import AdminPanel from '../components/Dashboard/Admin/AdminPanel/AdminPanel';

describe('Shallow Admin Panel', ()=>{
  it('Object Check', ()=>{
    let wrapper = shallow(<AdminPanel />)
    console.log(wrapper);
    // expect(wrapper.exists('.admin-grid')).toEqual(true);
  })
})
