// patients.component.ts

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patients: any[];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.fetchPatients();
  }

  fetchPatients(): void {
    this.apiService.getPatients().subscribe((data: any[]) => {
      this.patients = data;
    });
  }
}
