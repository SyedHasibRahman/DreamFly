import React from 'react';
import {shallow} from 'enzyme';
import UpdateBlog from './UpdateBlog';


describe('Add Blog Component Test', ()=>{
  it('Object Check', ()=>{
    let wrapper = shallow(<UpdateBlog />)
    console.log(wrapper);
  })
})
