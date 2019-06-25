import { ConstantsModule } from './constants.module';

describe('ConstantsModule', () => {
  let constantsModule: ConstantsModule;

  beforeEach(() => {
    constantsModule = new ConstantsModule();
  });

  it('should create an instance', () => {
    expect(constantsModule).toBeTruthy();
  });
});
