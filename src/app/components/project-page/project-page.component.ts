import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../hero/hero.component'; 
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [RouterLink, HeroComponent, CommonModule],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.scss',
})
export class ProjectPageComponent {
  private projectService = inject(ProjectService);
  projects = this.projectService.getProjects();
  
  showCopyMessage = false;

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  scroll(direction: 'left' | 'right') {
    const container = this.scrollContainer.nativeElement;
    const scrollAmount = 400;
    
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }

  handleEmailClick(event: MouseEvent) {
    const email = 'rishyanthvarma555@gmail.com';

    navigator.clipboard.writeText(email).then(() => {
      this.showCopyMessage = true;

      setTimeout(() => {
        this.showCopyMessage = false;
      }, 2500);
    });
  }
}