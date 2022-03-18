import React from 'react';
import {shallow} from 'enzyme';
import MakeAdmin from '../components/Dashboard/Admin/MakeAdmin/MakeAdmin';

describe('Make Admin Component Test', ()=>{
  it('Object Check', ()=>{
    let wrapper = shallow(<MakeAdmin />)
    console.log(wrapper);
    expect(wrapper.exists('.admin')).toEqual(true);
  })
})
