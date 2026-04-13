import { Injectable, signal } from '@angular/core';

export interface ProjectFeature {
  name: string;
  detail: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string; // GitHub/Source
  liveDemo?: string;
  challenge: string;
  challengeDeepDive?: string;
  solution: string;
  features?: ProjectFeature[];
  imageUrl?: string;
  detailUrl?: string;
}

@Injectable({ providedIn: 'root' })
export class ProjectService {
  private projects = signal<Project[]>([
    {
      id: 'pickodex',
      title: 'Pickodex',
      description:
        'A full-stack multiplayer sports prediction platform featuring live lobbies, dynamic algorithmic scoring, and seamless real-time synchronization.',
      tags: [
        'Angular',
        'Spring Boot',
        'PostgreSQL',
        'Supabase',
        'RxJS',
        'Tailwind CSS',
      ],
      link: '', // Empty means the Source Code button will hide
      liveDemo: 'https://pickodex.netlify.app',
      imageUrl: 'assets/projects/pickodex-portfolio.webp',
      detailUrl: 'assets/projects/pickodex-detail.webp',
      challenge:
        'Architecting a seamless cross-origin communication pipeline between a decoupled frontend and backend, while engineering a math-heavy scoring system that processes dynamic group averages in real-time.',
      challengeDeepDive:
        '"The hardest part was engineering the \'Contrarian Bonus\' scoring system—calculating dynamic group averages on the fly—and ensuring the Angular frontend stayed perfectly synchronized with the Spring Boot backend across distinct Netlify and Render deployments without CORS failures or latency."',
      solution:
        'Developed a robust Java Spring Boot REST API backed by a Supabase PostgreSQL database for efficient data aggregation. On the client side, I leveraged Angular and RxJS to manage complex asynchronous lobby states, ensuring a fluid user experience.',
      features: [
        {
          name: 'Algorithmic Scoring Engine',
          detail:
            'Custom Java-based math logic that calculates dynamic "Against the Grain" underdog bonuses based on group consensus.',
        },
        {
          name: 'Cross-Origin Architecture',
          detail:
            'Engineered a seamless connection between an Angular frontend hosted on Netlify and a Spring Boot REST API deployed on Render.',
        },
        {
          name: 'Cloud Database Integration',
          detail:
            'Utilized PostgreSQL hosted via Supabase for robust, scalable data persistence across active multiplayer tournament rooms.',
        },
        {
          name: 'Live Multiplayer Lobbies',
          detail:
            'Real-time room creation, host controls (including kick functionality), and instant player synchronization.',
        },
        {
          name: 'Reactive State Management',
          detail:
            'Leveraged Angular and RxJS streams to ensure fluid, zero-latency UI updates as complex prediction data is processed.',
        },
      ],
    },
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
        'Visualizing multi-dimensional sports data (percentiles, positional activity, and raw stats) side-by-side.',
      challengeDeepDive:
        '"The difficulty was normalizing metrics across different leagues to ensure a 64% attacking zone in La Liga meant the same as in the Premier League."',
      solution:
        'Developed a custom Pitch Component in Angular for dynamic zone shading, paired with a Radar Chart implementation on the FastAPI backend.',
      features: [
        {
          name: 'Pitch Heatmap',
          detail:
            'Custom Angular SVG component that shades zones based on positional density.',
        },
        {
          name: 'Normalization Pipeline',
          detail:
            'Python/Pandas scripts that process raw stats into normalized percentiles.',
        },
        {
          name: 'Radar Visuals',
          detail:
            'D3.js integration for comparing player attributes across 10+ metrics.',
        },
      ],
    },
    {
      id: 'task-manager',
      title: 'Task Manager',
      description:
        'A full-cycle CRUD application designed for team productivity and task delegation.',
      tags: ['Angular', 'TypeScript', 'Firebase'],
      link: 'https://github.com/RishyanthT/TaskManagerDeployed',
      liveDemo: 'https://ng-deployment-final.web.app/',
      imageUrl: 'assets/projects/taskm-portfolio.webp',
      detailUrl: 'assets/projects/taskm2-portfolio.webp',
      challenge:
        'Managing state between different user views without causing unnecessary re-renders.',
      challengeDeepDive:
        'Implementing a centralized TaskService was the key to handling data flow and ensuring a single source of truth.',
      solution:
        'Implemented a reactive UI using Angular Material and a production-ready Firebase deployment pipeline.',
      features: [
        {
          name: 'Real-time Sync',
          detail:
            'Firebase Firestore integration for instant task updates across team members.',
        },
        {
          name: 'Role-Based Access',
          detail:
            'Secure routing and data mapping based on user authentication status.',
        },
        {
          name: 'Material UI',
          detail:
            'Highly accessible interface built using Angular Material components.',
        },
      ],
    },
    {
      id: 'raft-simulation',
      title: 'RAFT Tower Defense',
      description:
        'A real-time Pygame simulation of the RAFT consensus algorithm where nodes (towers) manage leadership transitions under active "enemy" pressure.',
      tags: ['Python', 'Pygame', 'Distributed Systems', 'Threading'],
      link: 'https://github.com/RishyanthT/RaftSimulation', // Update with your actual repo link
      liveDemo: '', // Since this is a local Python script, we leave this empty
      imageUrl: 'assets/projects/raft-portfolio.webp',
      detailUrl: 'assets/projects/raft-detail.webp',
      challenge:
        'Implementing the RAFT election logic (terms, heartbeats, and candidate states) in a multi-threaded environment where individual nodes can be "killed" by game entities.',
      challengeDeepDive:
        '"The core difficulty was synchronizing the term numbers and heartbeats across independent threads while the Pygame main loop handled real-time collisions and user input."',
      solution:
        'Each tower operates on its own thread to simulate independent network nodes. When the Leader (blue) is destroyed, a timeout triggers a Candidate state (yellow), and the node with the highest term is elected as the new Leader (blue).',
      features: [
        {
          name: 'Multi-threaded Nodes',
          detail:
            'Every tower runs an independent thread to simulate real-world distributed node behavior.',
        },
        {
          name: 'RAFT Election Logic',
          detail:
            'Fully implemented Term numbers, Candidate timeouts, and Leader heartbeats.',
        },
        {
          name: 'Interactive Simulation',
          detail:
            'A Pygame interface where users defend nodes from enemies to see the algorithm react in real-time.',
        },
        {
          name: 'Dynamic State Rendering',
          detail:
            'Visual color-coding (Blue: Leader, Yellow: Candidate, Red: Dead) to track consensus status.',
        },
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
