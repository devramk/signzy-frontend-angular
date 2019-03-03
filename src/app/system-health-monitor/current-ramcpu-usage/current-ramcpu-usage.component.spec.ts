import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentRamcpuUsageComponent } from './current-ramcpu-usage.component';

describe('CurrentRamcpuUsageComponent', () => {
  let component: CurrentRamcpuUsageComponent;
  let fixture: ComponentFixture<CurrentRamcpuUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentRamcpuUsageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentRamcpuUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
