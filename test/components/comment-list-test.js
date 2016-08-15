import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment-list';

describe('CommentList', () => {
  let component;

  beforeEach(() => {
    const props = { comments: ['hello', 'hello I am a comment', 'I am a new comment'] };
    component = renderComponent(CommentList, null, props);
  });

  it('shows an li for each comment', () => {
    expect(component.find('li').length).to.equal(3);
  });

  it('shows each comment that is provided', () => {
    expect(component).to.contain('hello');
    expect(component).to.contain('hello I am a comment');
    expect(component).to.contain('I am a new comment');
  });
});
