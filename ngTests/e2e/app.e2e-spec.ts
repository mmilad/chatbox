import { NgTestsPage } from './app.po';

describe('ng-tests App', () => {
  let page: NgTestsPage;

  beforeEach(() => {
    page = new NgTestsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
