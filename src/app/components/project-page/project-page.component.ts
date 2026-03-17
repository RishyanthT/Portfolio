import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeroComponent } from '../hero/hero.component';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image?: string; // Optional: if you add screenshots later
}

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [NavbarComponent, HeroComponent],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.scss',
})
export class ProjectPageComponent {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLElement>;

  projects: Project[] = [
    {
      title: 'Portfolio Design',
      description: 'A sleek, minimalist portfolio using Angular 19 and SCSS.',
      tags: ['Angular', 'SCSS', 'TypeScript'],
      link: '#'
    },
    {
      title: 'E-commerce Platform',
      description: 'A full-featured shop with state management and Stripe integration.',
      tags: ['Angular', 'Firebase', 'RxJS'],
      link: '#'
    },
    {
      title: 'E-commerce Platform',
      description: 'A full-featured shop with state management and Stripe integration.',
      tags: ['Angular', 'Firebase', 'RxJS'],
      link: '#'
    },
    {
      title: 'E-commerce Platform',
      description: 'A full-featured shop with state management and Stripe integration.',
      tags: ['Angular', 'Firebase', 'RxJS'],
      link: '#'
    },
    // Add more objects here as needed!
  ];

  scroll(direction: 'left' | 'right'): void {
    const container = this.scrollContainer.nativeElement;
    const scrollDistance = 338; 
    container.scrollLeft += (direction === 'left' ? -scrollDistance : scrollDistance);
  }
}