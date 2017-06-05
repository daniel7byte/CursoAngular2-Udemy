import { HolaMundoPage } from './app.po';

describe('hola-mundo App', () => {
  let page: HolaMundoPage;

  beforeEach(() => {
    page = new HolaMundoPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
