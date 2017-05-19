import { PocGaborPage } from './app.po';

describe('poc-gabor App', () => {
  let page: PocGaborPage;

  beforeEach(() => {
    page = new PocGaborPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
