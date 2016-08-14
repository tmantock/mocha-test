import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment-box';

describe('CommentBox', () => {
  it('has the class comment-box', () => {
    const component = renderComponent(CommentBox);
    expect(component).to.have.class('comment-box');
  });

  it('has text area', () => {
    const component = renderComponent(CommentBox);
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    const component = renderComponent(CommentBox);
    expect(component.find('button')).to.exist;
  });

  // it('', () => {
  //   expect
  // });
});
