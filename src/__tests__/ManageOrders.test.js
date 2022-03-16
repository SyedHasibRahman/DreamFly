import React from 'react';
import {shallow} from 'enzyme';
import ManageOrders from '../components/Dashboard/Admin/ManageOrder/ManageOrders';

describe('Manage Orders Component Test', ()=>{
  it('Object Check', ()=>{
    let wrapper = shallow(<ManageOrders />)
    console.log(wrapper);
  })
})