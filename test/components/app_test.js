import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

//Use 'describe' to group together similar tests
describe('App', () => {

  //Use 'it' to test a single attricute of a target
  it('shows the correct text', () => {

    //creat am instance of App
    const component = renderComponent(App);

    //use 'expect' to make an assertion about a target
    expect(component).to.contain('React simple starter');

  });

});
