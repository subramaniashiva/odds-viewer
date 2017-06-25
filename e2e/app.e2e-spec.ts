import { OddsViewerPage } from './app.po';

describe('odds-viewer App', function() {
  let page: OddsViewerPage;

  beforeEach(() => {
    page = new OddsViewerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('UEFA Champions League Bet Comparison - 2017');
  });
});
