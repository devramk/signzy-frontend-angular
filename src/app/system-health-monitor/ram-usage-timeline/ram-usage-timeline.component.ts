import { Component, OnInit } from '@angular/core';
import {SystemMonitorService} from '../../shared/server/services/system-monitor.service';

@Component({
  selector: 'app-ram-usage-timeline',
  templateUrl: './ram-usage-timeline.component.html',
  styleUrls: ['./ram-usage-timeline.component.css']
})
export class RamUsageTimelineComponent implements OnInit {
  memoryUsageTime: any;
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
    this.monitorService.getMemoryUsageByTime(this.memoryUsageTime).subscribe(
      memoryUsage => {
        this.memoryUsageTime = memoryUsage;
        console.log(this.memoryUsageTime);
        let usageResults: any = {
          name: 'Memory Usage'
        };
        let usageList: any[] = new Array();
        this.memoryUsageTime.ramUsageList.forEach(usage => {
          usageList.push({
            name: usage.time,
            value: usage.ramUsagePercent
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
