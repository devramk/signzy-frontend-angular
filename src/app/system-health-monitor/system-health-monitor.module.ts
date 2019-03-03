import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {systemHealthMonitorRouting} from './system-health-monitor.router';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {ReactiveFormsModule} from '@angular/forms';
import {NbCardModule, NbRouteTabsetModule, NbTabsetModule} from '@nebular/theme';
import { CurrentRamcpuUsageComponent } from './current-ramcpu-usage/current-ramcpu-usage.component';
import { RamUsageTimelineComponent } from './ram-usage-timeline/ram-usage-timeline.component';
import { CpuUsageTimelineComponent } from './cpu-usage-timeline/cpu-usage-timeline.component';

@NgModule({
  declarations: [HomeComponent, CurrentRamcpuUsageComponent, RamUsageTimelineComponent, CpuUsageTimelineComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbRouteTabsetModule,
    NbTabsetModule,
    NbCardModule,
    NgxChartsModule,
    systemHealthMonitorRouting
  ]
})
export class SystemHealthMonitorModule { }
