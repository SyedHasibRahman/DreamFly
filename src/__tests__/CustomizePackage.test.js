import React from 'react';
import {shallow} from 'enzyme';
import CustomizePackage from '../components/Dashboard/Admin/CustomizePackage/CustomizePackage/CustomizePackage';

describe('Customize Package Component Test', ()=>{
  it('Object Check', ()=>{
    let wrapper = shallow(<CustomizePackage />)
    console.log(wrapper);
  })
})
