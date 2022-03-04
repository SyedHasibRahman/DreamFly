import React from 'react';
import {shallow} from 'enzyme';
import ManageOrder from './ManageOrder';

describe('Manage Order Component Test', ()=>{
  it('Object Check', ()=>{
    let wrapper = shallow(<ManageOrder />)
    console.log(wrapper);
  })
})
