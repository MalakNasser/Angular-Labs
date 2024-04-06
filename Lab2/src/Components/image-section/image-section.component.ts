import { Component } from '@angular/core';

@Component({
  selector: 'app-image-section',
  standalone: true,
  imports: [],
  templateUrl: './image-section.component.html',
  styleUrl: './image-section.component.css',
})
export class ImageSectionComponent {
  imgArray = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png'];
  currentIndex = 0;
  displayedImg = this.imgArray[this.currentIndex];
  intervalEvent: any;

  nextImage() {
    if (this.currentIndex < this.imgArray.length - 1) {
      this.imgArray[this.currentIndex++];
    }
    this.displayedImg = this.imgArray[this.currentIndex];
  }

  prevImage() {
    if (this.currentIndex > 0) {
      this.imgArray[this.currentIndex--];
    }
    this.displayedImg = this.imgArray[this.currentIndex];
  }

  startSlide() {
    this.intervalEvent = setInterval(() => {
      if (this.currentIndex === this.imgArray.length - 1) {
        this.currentIndex = -1;
      }
      this.nextImage();
    }, 2000);
  }

  stopSlide() {
    clearInterval(this.intervalEvent);
  }
}
