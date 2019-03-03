import { Component, OnInit } from '@angular/core';
import {SystemMonitorService} from '../../shared/server/services/system-monitor.service';

@Component({
  selector: 'app-current-ramcpu-usage',
  templateUrl: './current-ramcpu-usage.component.html',
  styleUrls: ['./current-ramcpu-usage.component.css'],
  providers: [SystemMonitorService]
})
export class CurrentRamcpuUsageComponent implements OnInit {
  currentUsageDetails: any;
  gaugeSize: number = 250;
  gaugeThick: number = 10;
  gaugeType: string = 'arch';
  gaugeLabelCpu: string = 'CPU';
  gaugeLabelRam: string = 'RAM';
  gaugeAppendText: string = '%';

  constructor(private systemMonitorService: SystemMonitorService) { }

  ngOnInit() {
    this.getCurrentSystemUsage();
    setInterval(() => {
      this.getCurrentSystemUsage();
    }, 5000);
  }

  getCurrentSystemUsage() {
    this.systemMonitorService.getCurrentRamAndCpuUsage().subscribe(
      currentUsage => {
        this.currentUsageDetails = currentUsage;
        console.log(this.currentUsageDetails);
      },
      error => {
        console.log(error);
        alert("Something went wrong");
      }
    );
  }

}
