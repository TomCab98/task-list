import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  title: string = 'About me!';
  texts = [
    {
      title: 'Welcome to TaskList!',
      description:
        'TaskList is a simple yet powerful application designed to help you manage your daily tasks efficiently. This project is part of my personal portfolio, showcasing my skills as a developer and my passion for creating user-friendly and functional web applications.',
    },
    {
      title: 'What can I do in TaskList?',
      description: [
        'Add new tasks to a customizable list.',
        'Edit and delete tasks as needed.',
        'Mark tasks as completed to track progress.',
      ],
    },
    {
      title: 'Current Features',
      description: [
        'Task Management: Add, edit, and delete tasks.',
        'Responsive Design: Works seamlessly on desktop and mobile devices.',
      ],
    },
    {
      title: 'Upcoming Features',
      description: [
        'Organize tasks into categories or priorities.',
        'Drag-and-Drop Functionality: Reorder tasks effortlessly.',
        'Dark Mode: A sleek interface for nighttime use.',
        'Notifications: Reminders for pending tasks.',
        'Data Persistence: Save tasks to a database or cloud storage for future access.',
      ],
    },
    {
      title: 'About Me',
      description:
        'Hi! My name is Tomás, and I’m a passionate software developer specializing in backend. I’m currently studying Information Systems Engineering and have over two years of professional experience as a backend developer, with occasional work in frontend, QA, and deployment.',
    },
    {
      title: 'What I Do',
      description:
        'I create scalable, efficient, and user-friendly software solutions. My expertise includes: Backend Development: Using frameworks like NestJS and Spring Boot. Frontend Development: Crafting responsive interfaces with Angular and TypeScript. Deployment: Setting up CI/CD pipelines and deploying applications on AWS.',
    },
    {
      title: 'Find Me Online',
      description: [
        'https://www.linkedin.com/in/tomascabanillas/',
        'https://github.com/TomCab98',
      ],
    },
  ];

  isString(value: string | string[]): boolean {
    return typeof value === 'string';
  }

  isLink(value: string): boolean {
    return value.includes('https');
  }
}
