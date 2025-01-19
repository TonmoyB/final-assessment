import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private readonly BOOKINGS_KEY = 'bus_bookings';
  constructor() { }

  getAllBookings(): any[] {
    const bookings = localStorage.getItem(this.BOOKINGS_KEY);
    return bookings ? JSON.parse(bookings) : [];
  }

  getBusData(busId: string) {


    const buses = JSON.parse(localStorage.getItem('bus_info') || '[]');

    const bus = buses.find((b: { id: string }) => b.id === busId);
    return of(bus);
  }



  getSeatData(busId: string, seatId: string) {
    const busSeats = JSON.parse(localStorage.getItem('bus_seats_info') || '{}');
    const seats = busSeats[busId];
    const seat = seats ? seats.find((s: { id: string }) => s.id === seatId) : null;
    return of(seat);
  }
}
