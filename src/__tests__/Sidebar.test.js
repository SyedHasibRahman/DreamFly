import React from 'react';
import {shallow} from 'enzyme';
import Sidebar from '../components/Dashboard/Sidebar/Sidebar';

describe('Sidebar Component Test', ()=>{
  it('Object Check', ()=>{
    let wrapper = shallow(<Sidebar />)
    console.log(wrapper);
  })
})