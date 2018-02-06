import { TcjxmgrPage } from './app.po';

describe('tcjxmgr App', () => {
  let page: TcjxmgrPage;

  beforeEach(() => {
    page = new TcjxmgrPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
