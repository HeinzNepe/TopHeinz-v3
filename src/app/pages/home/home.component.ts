import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    // Function to calculate the amount of years since a given date
    // Author: Soni
    yearsSince(year: number, month: number, day: number)
    {
        // Store the current date in today object
        const today = new Date();

        const date = new Date(year,month,day)

        // Find the time difference and store it in a Date() object
        const difference = new Date(today.getTime() - date.getTime());

        // Get the amount of years and subtract 1970
        // The Date() object will originate from epoch (January 1st, 1970), so we need to subtract 1970 years to get the definite time difference
        return difference.getFullYear() - 1970;
    }


}
