import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourPleaHasBeenSubmittedComponent } from './your-plea-has-been-submitted.component';

describe('YourPleaHasBeenSubmittedComponent', () => {
  let component: YourPleaHasBeenSubmittedComponent;
  let fixture: ComponentFixture<YourPleaHasBeenSubmittedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourPleaHasBeenSubmittedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourPleaHasBeenSubmittedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
