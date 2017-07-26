import { InterviewAngularPage } from './app.po';

describe('interview-angular App', () => {
  let page: InterviewAngularPage;

  beforeEach(() => {
    page = new InterviewAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
