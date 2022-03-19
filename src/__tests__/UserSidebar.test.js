import React from 'react';
import {shallow} from 'enzyme';
import UserSidebar from '../components/Dashboard/Sidebar/UserSidebar';


describe('User Sidebar Component Test', ()=>{
  it('Object Check', ()=>{
    let wrapper = shallow(<UserSidebar />)
    console.log(wrapper);
  })
})
