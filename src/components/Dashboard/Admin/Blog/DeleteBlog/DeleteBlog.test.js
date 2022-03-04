import React from 'react';
import {shallow} from 'enzyme';
import DeleteBlog from './DeleteBlog';

describe('Delete Blog Component Test', ()=>{
  it('Object Check', ()=>{
    let wrapper = shallow(<DeleteBlog />)
    console.log(wrapper);
  })
})
