import { Component, OnInit } from "@angular/core";
import { Guest } from '@groomly/platform';
import { GuestHttpService } from './guest-area/service';

@Component({
  selector: "groomly-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  guests: Guest[] = [];

  newGuest: Guest = {
    name: ''
  };

  constructor(private guestService: GuestHttpService) {}

  ngOnInit(): void {
    this.guestService.getAll().subscribe((guests: Guest[]) => {
      this.guests = guests;
    });
  }

  create() {
    if (!this.newGuest.name) {
      alert('Title & Description are required...');
      return;
    }
    this.guestService.create(this.newGuest).subscribe((guest: Guest) => {
      this.guests.push(guest);
      this.newGuest = {
        name: ''
      }
    })
  }

  deleteGuest(id?: string) {
    if (!id) {
      return;
    }
    if (window.confirm('Are you sure? This action cannot be undone...')) {
      this.guestService.delete(id).subscribe((success: boolean) => {
        if (success) {
          this.guests = this.guests.filter((guest: Guest) => guest.id !== id);
        } else {
          alert('Oops... Something wrong happened...');
        }
      });
    }
  }
}
