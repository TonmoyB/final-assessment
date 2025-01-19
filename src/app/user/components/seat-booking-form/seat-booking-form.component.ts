import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Bus } from 'src/app/models/bus.interface';
import { Seat } from 'src/app/models/seat.interface';

@Component({
  selector: 'app-seat-booking-form',
  templateUrl: './seat-booking-form.component.html',
  styleUrls: ['./seat-booking-form.component.css']
})
export class SeatBookingFormComponent implements OnInit {

  @Input() selectedSeat!: Seat;
  @Input() currentBus!: Bus;
  @Output() bookingComplete = new EventEmitter<void>();

  bookingForm: FormGroup;
  destinations: string[] = [];
  seatId: string = '';
  busId: string = '';

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router) {
    this.bookingForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      busNumber: [{ value: '', disabled: true }],
      seatNo: [{ value: '', disabled: true }],
      destination: ['', Validators.required],
      time: [{ value: '', disabled: true }]
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.busId = params['busId'];
      this.seatId = params['seatId'];

      const navigationState = history.state;
      if (navigationState.selectedSeat && navigationState.currentBus) {
        this.selectedSeat = navigationState.selectedSeat;
        this.currentBus = navigationState.currentBus;

        if (this.currentBus && this.currentBus.route) {
          const [origin, destination] = this.currentBus.route.split(' - ');
          this.destinations = [destination];
        } else {
          console.error('Bus route not found!');
          this.destinations = [];
        }

        this.bookingForm.patchValue({
          busNumber: this.currentBus.busNumber,
          seatNo: this.selectedSeat.id,
          time: this.currentBus.departureTime
        });
      } else {
        console.error('Selected seat or current bus data is missing!');
      }
    });
  }


  onSubmit() {
    if (this.bookingForm.valid) {
      const formValue = this.bookingForm.getRawValue();
      const booking = {
        id: Date.now().toString(),
        name: formValue.name,
        busId: this.currentBus.id,
        busNumber: formValue.busNumber,
        seatNo: formValue.seatNo,
        destination: formValue.destination,
        time: formValue.time,
        bookingDate: new Date().toISOString()
      };

      const bookings = JSON.parse(localStorage.getItem('bus_bookings') || '[]');
      bookings.push(booking);
      localStorage.setItem('bus_bookings', JSON.stringify(bookings));

      this.updateSeatStatus(this.busId, this.seatId, true);

      this.bookingComplete.emit();
      this.router.navigate([`/seat-ui/${this.busId}`]);
    }
  }

  onCancel() {
    this.updateSeatStatus(this.busId, this.seatId, false);

    this.bookingComplete.emit();
    this.router.navigate([`/seat-ui/${this.busId}`]);
  }

  private updateSeatStatus(busId: string, seatId: string, isBooked: boolean) {
    const busSeats = JSON.parse(localStorage.getItem('bus_seats_info') || '{}');
    const seats = busSeats[busId];

    if (seats) {
      const seat = seats.find((s: { id: string; }) => s.id === seatId);
      if (seat) {
        seat.isBooked = isBooked;
        localStorage.setItem('bus_seats_info', JSON.stringify(busSeats));
      }
    }
  }
}
