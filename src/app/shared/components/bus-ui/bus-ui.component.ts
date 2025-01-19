import { Component, OnInit } from '@angular/core';
import { Bus } from 'src/app/models/bus.interface';
import { BusService } from '../../services/bus/bus.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bus-ui',
  templateUrl: './bus-ui.component.html',
  styleUrls: ['./bus-ui.component.css']
})
export class BusUiComponent implements OnInit {

  buses: Bus[] = [];

  constructor(private busService: BusService, private router: Router) { }

  ngOnInit(): void {
    this.buses = this.busService.getAllBuses();
  }

  selectBus(bus: Bus) {
    this.router.navigate(['/seat-ui', bus.id]);
  }

}
