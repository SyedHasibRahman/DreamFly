import React from 'react';
import {shallow} from 'enzyme';
import AddBlog from './AddBlog';


describe('Add Blog Component Test', ()=>{
  it('Object Check', ()=>{
    let wrapper = shallow(<AddBlog />)
    console.log(wrapper);
  })
})
