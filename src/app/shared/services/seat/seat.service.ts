import { Injectable } from '@angular/core';
import { Seat } from 'src/app/models/seat.interface';

@Injectable({
  providedIn: 'root'
})
export class SeatService {
  private readonly SEAT_INFO_KEY = 'bus_seats_info';

  constructor() {
    this.initializeBusSeats();
  }
  private createDefaultSeats(): Seat[] {
    return [
      { id: 'A1', isBooked: false }, { id: 'A2', isBooked: false }, { id: 'A3', isBooked: false },
      { id: 'B1', isBooked: false }, { id: 'B2', isBooked: false }, { id: 'B3', isBooked: false },
      { id: 'C1', isBooked: false }, { id: 'C2', isBooked: false }, { id: 'C3', isBooked: false },
      { id: 'D1', isBooked: false }, { id: 'D2', isBooked: false }, { id: 'D3', isBooked: false },
      { id: 'E1', isBooked: false }, { id: 'E2', isBooked: false }, { id: 'E3', isBooked: false },
    ];
  }

  private initializeBusSeats() {
    if (!localStorage.getItem(this.SEAT_INFO_KEY)) {
      const busSeats = {
        '1': this.createDefaultSeats(),
        '2': this.createDefaultSeats(),
        '3': this.createDefaultSeats(),
      };
      localStorage.setItem(this.SEAT_INFO_KEY, JSON.stringify(busSeats));
    }
  }

  getSeatsByBusId(busId: string): Seat[] {
    const busSeats = JSON.parse(localStorage.getItem(this.SEAT_INFO_KEY) || '{}');
    return busSeats[busId] || [];
  }

  updateSeatStatus(seatId: string, busId: string, isBooked: boolean): void {
    const busSeats = JSON.parse(localStorage.getItem(this.SEAT_INFO_KEY) || '{}');
    const seats = busSeats[busId];

    if (seats) {
      const seat = seats.find((s: { id: string; }) => s.id === seatId);
      if (seat) {
        seat.isBooked = isBooked;
        localStorage.setItem(this.SEAT_INFO_KEY, JSON.stringify(busSeats));
      }
    }
  }

  isSeatBooked(seatId: string, busId: string): boolean {
    const seats = this.getSeatsByBusId(busId);
    const seat = seats.find(s => s.id === seatId);
    return seat ? seat.isBooked : false;
  }
}
