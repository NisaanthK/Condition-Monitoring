import { Component } from '@angular/core';

interface Image {
  src: string;
  alt: string;
  caption: string;
}

@Component({
  selector: 'app-image-display',
  templateUrl: './image-display.component.html',
  styleUrls: ['./image-display.component.scss']
})
export class ImageDisplayComponent {
  images: Image[] = [
    { src: 'assets/images/image1.png', alt: 'Image 1', caption: 'This is image 1 description' },
    { src: 'assets/images/image2.png', alt: 'Image 2', caption: 'This is image 2 description' },
    { src: 'assets/images/image3.png', alt: 'Image 3', caption: 'This is image 3 description' },
    { src: 'assets/images/image4.png', alt: 'Image 4', caption: 'This is image 4 description' },
    { src: 'assets/images/image5.png', alt: 'Image 5', caption: 'This is image 5 description' },
    { src: 'assets/images/image6.png', alt: 'Image 6', caption: 'This is image 6 description' },
    { src: 'assets/images/image7.png', alt: 'Image 7', caption: 'This is image 7 description' },
  ];

  selectedImage: Image | null = null;

  openModal(image: Image) {
    this.selectedImage = image;
  }

  closeModal() {
    this.selectedImage = null;
  }
}
