import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RamUsageTimelineComponent } from './ram-usage-timeline.component';

describe('RamUsageTimelineComponent', () => {
  let component: RamUsageTimelineComponent;
  let fixture: ComponentFixture<RamUsageTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RamUsageTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RamUsageTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
