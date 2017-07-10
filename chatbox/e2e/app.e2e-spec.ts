import { ChatboxPage } from './app.po';

describe('chatbox App', () => {
  let page: ChatboxPage;

  beforeEach(() => {
    page = new ChatboxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
