import jsdom from 'jsdom';
import jquery from 'jquery';
import TestUtils from 'react-addons-test-utils';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';
import { expect } from 'chai';
//Set up testing environment to run like a browser in the command line
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
const $ = jquery(global.window);
// Build 'renderComponent' helper that should render a given React ComponentClass
function renderComponent(ComponentClass) {
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers)}>
      <ComponentClass />
    </Provider>
  );

  return $(ReactDOM.findDOMNode(componentInstance)); //produces the HTML
}
//Build helper for simulating events

//Set-up Chai-jQuery
export { renderComponent, expect };
