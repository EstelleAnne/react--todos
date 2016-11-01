import React, {Component, PropTypes} from 'react';
import App from '../../src/containers/About/index';
import { shallow, mount, render } from 'enzyme';

describe('App', ()=> {
  it('render correct', () => {
    const warpper =  render(<App />);
    expect(warpper.text()).toEqual("About Us");
  })
})