import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SystemMonitorService {
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
  }

  getCurrentRamAndCpuUsage() {
    return this.http.get<any>('http://localhost:4000/monitor/get/usage/cpuMemory', {headers: this.headers});
  }

  getCpuUsageByTime(reqObj: any) {
    return this.http.post<any>('http://localhost:4000/monitor/get/usage/cpu/time',reqObj, {headers: this.headers});
  }

  getMemoryUsageByTime(reqObj: any) {
    return this.http.post<any>('http://localhost:4000/monitor/get/usage/memory/time', reqObj, {headers: this.headers});
  }
}
