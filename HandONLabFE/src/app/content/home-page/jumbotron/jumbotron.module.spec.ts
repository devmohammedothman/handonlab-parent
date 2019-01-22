import { JumbotronModule } from './jumbotron.module';

describe('JumbotronModule', () => {
  let jumbotronModule: JumbotronModule;

  beforeEach(() => {
    jumbotronModule = new JumbotronModule();
  });

  it('should create an instance', () => {
    expect(jumbotronModule).toBeTruthy();
  });
});
