import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-app';
  showPopup = false;
  offcanvasVisible = true;
  progress = 0;
  intervalId: any;

  // Start the migration process
  startProcess() {
    this.showPopup = true;
    this.progress = 0;
    this.offcanvasVisible = true;

    this.intervalId = setInterval(() => {
      if (this.progress < 100) {
        this.progress += 5; // Update progress
      } else {
        clearInterval(this.intervalId);
        this.showPopup = false;
        alert('Migration process has been completed');
      }
    }, 500); // Adjust the speed as needed
  }

  // Toggle the visibility of the offcanvas
  togglePopup() {
    this.offcanvasVisible = !this.offcanvasVisible;
  }
}
