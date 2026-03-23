import { Component, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectService, Project } from '../../services/project.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  @Input() currentProjectId?: string;
  projectService = inject(ProjectService);

  get nextProject(): Project | undefined {
    const all = this.projectService.getProjects();
    if (all.length < 2) return undefined;

    const currentIndex = all.findIndex((p) => p.id === this.currentProjectId);
    const nextIndex = (currentIndex + 1) % all.length;
    return all[nextIndex];
  }
}
