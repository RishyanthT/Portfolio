import { Injectable, signal } from '@angular/core';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
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
      description: 'A full-stack football analytics tool for scouting and comparing players across Europe’s top 5 leagues.',
      tags: ['Angular', 'FastAPI', 'Python', 'Pandas'],
      link: 'https://github.com/RishyanthT/FutScout',
      
      // These match your public/assets/projects folder
      imageUrl: 'assets/projects/futscout-portfolio.png', 
      detailUrl: 'assets/projects/futscout2-portfolio.png', 

      challenge: 'Visualizing multi-dimensional sports data (percentiles, positional activity, and raw stats) in a way that is intuitive for a scout to compare two distinct playstyles side-by-side.',
      challengeDeepDive: '"The difficulty wasn’t just fetching the data—it was normalizing metrics across different leagues and positions to ensure a 64% attacking zone for a La Liga winger meant the same as a 64% for a Premier League forward."',
      solution: 'I developed a custom Pitch Component in Angular that dynamically shades zones based on percentage data, paired with a Radar Chart implementation that handles normalization logic on the FastAPI backend.',
      features: [
        'Dynamic Player Comparison Engine',
        'Custom Pitch Heatmap implementation',
        'Radar Chart visualization for 10+ performance metrics',
        'Automated Data Normalization Pipeline'
      ]
    },
  ]);

  getProjectById(id: string) {
    return this.projects().find((p) => p.id === id);
  }

  getProjects() {
    return this.projects();
  }
}