import { Injectable, signal } from '@angular/core';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  liveDemo?: string;
  challenge: string;
  challengeDeepDive?: string;
  solution: string;
  features?: string[];
  imageUrl?: string;
  detailUrl?: string;
}

@Injectable({ providedIn: 'root' })
export class ProjectService {
  private projects = signal<Project[]>([
    {
      id: 'futscout',
      title: 'FutScout',
      description:
        "A full-stack football analytics tool for scouting and comparing players across Europe's top 5 leagues.",
      tags: ['Angular', 'FastAPI', 'Python', 'Pandas'],
      link: 'https://github.com/RishyanthT/FutScout',
      imageUrl: 'assets/projects/futscout-portfolio.webp',
      detailUrl: 'assets/projects/futscout2-portfolio.webp',

      challenge:
        'Visualizing multi-dimensional sports data (percentiles, positional activity, and raw stats) in a way that is intuitive for a scout to compare two distinct playstyles side-by-side.',
      challengeDeepDive:
        '"The difficulty wasn\'t just fetching the data—it was normalizing metrics across different leagues and positions to ensure a 64% attacking zone for a La Liga winger meant the same as a 64% for a Premier League forward."',
      solution:
        'I developed a custom Pitch Component in Angular that dynamically shades zones based on percentage data, paired with a Radar Chart implementation that handles normalization logic on the FastAPI backend.',
      features: [
        'Dynamic Player Comparison Engine',
        'Custom Pitch Heatmap implementation',
        'Radar Chart visualization for 10+ performance metrics',
        'Automated Data Normalization Pipeline',
      ],
    },
    {
      id: 'task-manager',
      title: 'Task Manager',
      description:
        'A full-cycle CRUD application designed to manage team productivity and task delegation.',
      tags: ['Angular', 'TypeScript', 'Firebase'],
      link: 'https://github.com/RishyanthT/TaskManagerDeployed',
      liveDemo: 'https://ng-deployment-final.web.app/',
      imageUrl: 'assets/projects/taskm-portfolio.webp',
      detailUrl: 'assets/projects/taskm2-portfolio.webp',
      challenge:
        'The primary goal was to master Angular essentials: Component architecture, Services for state management, and the complexities of deploying a production-ready build.',
      challengeDeepDive:
        'One of the biggest hurdles was managing the state between different user views without causing unnecessary re-renders, which led me to implement a centralized TaskService.',
      solution:
        'Implemented a reactive UI using Angular Material. I focused heavily on the deployment pipeline, ensuring the environment configurations were correctly handled for Firebase Hosting.',
      features: [
        'Real-time Task Assignment',
        'User-Relative Data Mapping',
        'Production-ready Firebase Deployment',
        'Angular Material UI Integration',
      ],
    },
  ]);

  getProjectById(id: string) {
    return this.projects().find((p) => p.id === id);
  }

  getProjects() {
    return this.projects();
  }
}
