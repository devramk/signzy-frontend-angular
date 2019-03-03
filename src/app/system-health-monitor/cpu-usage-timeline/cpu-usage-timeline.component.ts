import { Component, OnInit } from '@angular/core';
import {SystemMonitorService} from '../../shared/server/services/system-monitor.service';

@Component({
  selector: 'app-cpu-usage-timeline',
  templateUrl: './cpu-usage-timeline.component.html',
  styleUrls: ['./cpu-usage-timeline.component.css'],
  providers: [SystemMonitorService]
})
export class CpuUsageTimelineComponent implements OnInit {
  cpuUsageTime: any;
  results: any[];
  showLegend = true;
  showXAxis = true;
  showYAxis = true;
  xAxisLabel = 'Date';
  yAxisLabel = 'Total Billing';
  colorScheme: any = {
    name: 'cool',
    selectable: true,
    group: 'Ordinal',
    domain: [
      '#a8385d', '#7aa3e5', '#a27ea8', '#aae3f5', '#adcded', '#a95963', '#8796c0', '#7ed3ed', '#50abcc', '#ad6886'
    ]
  };
  schemeType: string = 'ordinal';

  constructor(private monitorService: SystemMonitorService) {
    this.results = new Array();
  }

  ngOnInit() {
    this.getCpuUsageTimeLine();
    setInterval(() => {
      this.getCpuUsageTimeLine();
    }, 60000);
  }

  getCpuUsageTimeLine() {
    this.results = [];
    this.monitorService.getCpuUsageByTime(this.cpuUsageTime).subscribe(
      cpuUsage => {
        this.cpuUsageTime = cpuUsage;
        console.log(this.cpuUsageTime);
        let usageResults: any = {
          name: 'CPU Usage'
        };
        let usageList: any[] = new Array();
        this.cpuUsageTime.cpuUsageList.forEach(usage => {
          usageList.push({
            name: usage.time,
            value: usage.cpuUsagePercent
          });
        });
        usageResults['series'] = usageList
        this.results.push(usageResults);
      },
      error => {
        console.log(error);
        alert('Something went wrong');
      }
    );
  }

}
