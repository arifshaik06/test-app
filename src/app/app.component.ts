import { ChangeDetectorRef, Component } from '@angular/core';

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
  panelOpenState = false;
  result = false;

  constructor(private cdr: ChangeDetectorRef) {}

  // Start the migration process
  startProcess() {
    this.showPopup = true;
    this.progress = 0;
    this.offcanvasVisible = true;
    this.panelOpenState = true;

    this.intervalId = setInterval(() => {
      if (this.progress < 100) {
        this.progress += 5; // Update progress
      } else {
        clearInterval(this.intervalId);
        this.showPopup = false;
        this.result = true;
        this.cdr.detectChanges();
        this.showToaster();
      }
    }, 500); // Adjust the speed as needed
    if(this.progress == 100){
      this.panelOpenState = false;
    }
  }

  
  // Toggle the visibility of the offcanvas
  togglePopup() {
    this.offcanvasVisible = !this.offcanvasVisible;
  }

    // Function to show the toaster
  showToaster(): void {
    const toaster = document.getElementById('successToaster');
    
    if (toaster) {
      toaster.classList.add('show');

      // Automatically hide after 3 seconds
      setTimeout(() => {
        toaster.classList.remove('show');
      }, 3000);
    }
  }

  // Function to manually close the toaster
  closeToaster(): void {
    const toaster = document.getElementById('successToaster');
    
    if (toaster) {
      toaster.classList.remove('show');
    }
  }

}
