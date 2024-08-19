import { Component } from '@angular/core';

interface Image {
  src: string;
  alt: string;
  title: string;
  shortDescription: string;
  description: string;
  bulletPoints: string[];
}

@Component({
  selector: 'app-image-display',
  templateUrl: './image-display.component.html',
  styleUrls: ['./image-display.component.scss']
})
export class ImageDisplayComponent {
  images: Image[] = [
    {
      src: 'assets/images/image1.png',
      alt: 'Image 1',
      title: 'Dashboard Login',
      shortDescription: 'Login to access monitoring data for your thermo-forming machines.',
      description: 'The dashboard login screen is the gateway to the condition monitoring system. It ensures that only authorized users can access the monitoring data and insights for their thermoforming machines.',
      bulletPoints: [
        'Secure login for authorized users',
        'Access critical monitoring data',
        'Ensure the safety and security of machine data'
      ]
    },
    {
      src: 'assets/images/image2.png',
      alt: 'Image 2',
      title: 'Empty Data View',
      shortDescription: 'Displays when no data is available for the selected time range.',
      description: 'This screen informs users when no data is available for the selected time range, allowing them to adjust the range to fetch relevant data.',
      bulletPoints: [
        'Informs users about unavailable data',
        'Encourages adjustment of time range',
        'Helps in refining data searches'
      ]
    },
    {
      src: 'assets/images/image3.png',
      alt: 'Image 3',
      title: 'Data Overview',
      shortDescription: 'Overview of collected data with key metrics.',
      description: 'The data overview screen provides users with a quick glance at the collected data, highlighting key metrics which shows all the calculated values like max, min and avg for analysis.',
      bulletPoints: [
        'Visual representation of data',
        'Focus on key performance metrics',
        'Helps in quick decision-making'
      ]
    },
    {
      src: 'assets/images/image4.png',
      alt: 'Image 4',
      title: 'Time Range Selection',
      shortDescription: 'Select a custom time range for detailed analysis.',
      description: 'This feature allows users to define a custom time range to drill down into specific periods for detailed analysis of machine performance.',
      bulletPoints: [
        'Customizable time range for analysis',
        'Helps in pinpointing issues within a specific period',
        'Improves accuracy of data analysis'
      ]
    },
    {
      src: 'assets/images/image5.png',
      alt: 'Image 5',
      title: 'Hover Detailed View',
      shortDescription: 'In-depth analysis of pressing force over time.',
      description: 'The detailed view with hover effect provides the pressing force values, enabling users to monitor performance trends over specific periods.',
      bulletPoints: [
        'Track pressing force trends',
        'Identify anomalies and deviations',
        'Supports preventive maintenance'
      ]
    },
    {
      src: 'assets/images/image6.png',
      alt: 'Image 6',
      title: 'Error Analysis',
      shortDescription: 'Analysis of errors related to pressing force.',
      description: 'This screen allows users to analyze errors  when the pressing force value exceeds the threshold level it alerts, helping them identify root causes and implement corrective measures.',
      bulletPoints: [
        'Identify and analyze errors',
        'Understand the root cause',
        'Implement corrective actions'
      ]
    },
    {
      src: 'assets/images/image7.png',
      alt: 'Image 7',
      title: 'Potential Improvement',
      shortDescription: 'Suggestions to optimize the pressing force process.',
      description: 'This section provide hints to the user for particular error in the pressing force process, helping to enhance efficiency and reduce the time to solve the problem.',
      bulletPoints: [
        'Optimize pressing force process',
        'Time effective',
        'Improve overall efficiency'
      ]
    },
  ];

  selectedImage: Image | null = null;

  openModal(image: Image) {
    this.selectedImage = image;
  }

  closeModal() {
    this.selectedImage = null;
  }
}
