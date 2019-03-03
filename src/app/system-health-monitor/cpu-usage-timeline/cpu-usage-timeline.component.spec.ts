import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpuUsageTimelineComponent } from './cpu-usage-timeline.component';

describe('CpuUsageTimelineComponent', () => {
  let component: CpuUsageTimelineComponent;
  let fixture: ComponentFixture<CpuUsageTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpuUsageTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpuUsageTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
