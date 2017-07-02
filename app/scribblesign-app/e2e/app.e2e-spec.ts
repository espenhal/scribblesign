import { ScribblesignAppPage } from './app.po';

describe('scribblesign-app App', () => {
  let page: ScribblesignAppPage;

  beforeEach(() => {
    page = new ScribblesignAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
