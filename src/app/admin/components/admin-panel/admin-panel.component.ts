import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/shared/services/boooking/booking.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  bookings: any[] = [];
  filteredBookings: any[] = [];
  busIds: string[] = [];
  selectedBusId: string = '';

  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    this.loadBookings();
    this.loadBusIds();
  }

  loadBookings(): void {
    this.bookings = this.bookingService.getAllBookings();
  }

  loadBusIds(): void {
    this.busIds = Array.from(new Set(this.bookings.map(booking => booking.busId)))
      .sort((a, b) => +a - +b);
  }

  onBusIdChange(): void {
    this.filteredBookings = this.bookings.filter(booking => booking.busId === this.selectedBusId);
  }

}
