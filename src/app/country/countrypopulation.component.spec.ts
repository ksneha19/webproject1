import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrypopulationComponent } from './countrypopulation.component';

describe('CountrypopulationComponent', () => {
  let component: CountrypopulationComponent;
  let fixture: ComponentFixture<CountrypopulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountrypopulationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountrypopulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
