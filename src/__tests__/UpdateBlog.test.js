import React from 'react';
import {shallow} from 'enzyme';
import UpdateBlog from '../components/Dashboard/Admin/Blog/UpdateBlog/UpdateBlog';


describe('Update Blog Component Test', ()=>{
  it('Object Check', ()=>{
    let wrapper = shallow(<UpdateBlog />)
    console.log(wrapper);
  })
})
