import { OpenHousePage } from './app.po';

describe('open-house App', () => {
  let page: OpenHousePage;

  beforeEach(() => {
    page = new OpenHousePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
