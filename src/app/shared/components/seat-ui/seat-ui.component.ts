import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Seat } from 'src/app/models/seat.interface';
import { SeatService } from '../../services/seat/seat.service';
import { log } from 'console';

@Component({
  selector: 'app-seat-ui',
  templateUrl: './seat-ui.component.html',
  styleUrls: ['./seat-ui.component.css']
})
export class SeatUiComponent implements OnInit {

  seats: Seat[] = [];
  busId: string = "";

  constructor(private router: Router,
    private seatService: SeatService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.busId = params['busId'];
      console.log(this.busId);
      
      if (this.busId) {
        this.loadSeats();
      }
    });
  }

  loadSeats() {
    if (this.busId) {
      this.seats = this.seatService.getSeatsByBusId(this.busId);
    }
  }

  onSeatClick(seat: Seat) {
    if (seat.isBooked) {
      alert(`Seat ${seat.id} is already booked!`);
    } else {
      this.seatService.updateSeatStatus(seat.id, this.busId!, true);
      this.router.navigate(['/seat-booking', seat.id, this.busId]);
    }
  }
}
