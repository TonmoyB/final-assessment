import { Injectable } from '@angular/core';
import { Bus } from 'src/app/models/bus.interface';

@Injectable({
  providedIn: 'root'
})

export class BusService {
  private readonly BUS_INFO_KEY = 'bus_info';

  constructor() { this.initializeBusData(); }

  private initializeBusData() {
    if (!localStorage.getItem(this.BUS_INFO_KEY)) {
      const bus_info = [
        {
          id: '1',
          busNumber: 'BUS-S096',
          route: 'Gulistan - Dhamrai',
          departureTime: '8:00 AM'
        },
        {
          id: '2',
          busNumber: 'BUS-S097',
          route: 'Azimpur - Gazipur',
          departureTime: '9:00 AM'
        },
        {
          id: '3',
          busNumber: 'BUS-S098',
          route: 'Paturia - Gulistan',
          departureTime: '6:00 PM'
        }
      ];
      localStorage.setItem(this.BUS_INFO_KEY, JSON.stringify(bus_info));
    }
  }

  getAllBuses(): Bus[] {
    const buses = localStorage.getItem(this.BUS_INFO_KEY);
    return buses ? JSON.parse(buses) : [];
  }

  getBusById(id: string): Bus | null {
    const buses = this.getAllBuses();
    return buses.find(bus => bus.id === id) || null;
  }

}
