import { CourseCatalogModule } from './course-catalog.module';

describe('CourseCatalogModule', () => {
  let courseCatalogModule: CourseCatalogModule;

  beforeEach(() => {
    courseCatalogModule = new CourseCatalogModule();
  });

  it('should create an instance', () => {
    expect(courseCatalogModule).toBeTruthy();
  });
});
