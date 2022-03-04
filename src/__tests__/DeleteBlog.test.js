import React from 'react';
import {shallow} from 'enzyme';
import DeleteBlog from '../components/Dashboard/Admin/Blog/DeleteBlog/DeleteBlog';

describe('Delete Blog Component Test', ()=>{
  it('Object Check', ()=>{
    let wrapper = shallow(<DeleteBlog />)
    console.log(wrapper);
  })
})
