import { BinarioIpPage } from './app.po';

describe('binario-ip App', function() {
  let page: BinarioIpPage;

  beforeEach(() => {
    page = new BinarioIpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
