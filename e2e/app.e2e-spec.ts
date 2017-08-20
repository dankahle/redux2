import { Redux2Page } from './app.po';

describe('redux2 App', () => {
  let page: Redux2Page;

  beforeEach(() => {
    page = new Redux2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
