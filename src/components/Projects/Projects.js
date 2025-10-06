import { profile } from '../../data/profile';
import React from 'react';
import EachProject from './EachProject';
import './Projects.css';
const projects = [
  {
    title: 'FinBuddy – Smart Financial Assistant',
    description: 'AI-powered web app for spend analysis, anomaly detection, forecasting (Prophet), and loan simulation with OCR (LayoutLM).',
    techStack: ['Next.js', 'FastAPI', 'MongoDB', 'Docker', 'Azure Blob', 'Firebase', 'Prophet', 'scikit-learn'],
    repo: 'https://github.com/naresh6897',
    demo: '',
    image: '/assets/finbuddy.png'
  },
  {
    title: 'Weather App',
    description: 'Real-time weather and 5-day forecast with OpenWeather API and responsive UI.',
    techStack: ['React', 'JavaScript', 'OpenWeather API'],
    repo: 'https://github.com/naresh6897',
    demo: '',
    image: '/assets/weather.png'
  },
  {
    title: 'My Portfolio',
    description: 'Personal site built with React and GitHub Pages CI/CD, dark mode and interactive UI.',
    techStack: ['React', 'JavaScript', 'HTML', 'CSS', 'GitHub Actions'],
    repo: 'https://github.com/naresh6897',
    demo: '',
    image: '/assets/portfolio.png'
  },
  {
    title: 'Smart Plant Recognition',
    description: 'Identifies plants from photos and shows classification and description.',
    techStack: ['Angular', 'Django', 'Python', 'HTML/CSS'],
    repo: 'https://github.com/naresh6897',
    demo: '',
    image: '/assets/plant.png'
  },
  {
    title: 'Smart Waste Sorting (ML)',
    description: 'Compared ML models to classify waste as organic or recyclable (XGBoost, CNN best).',
    techStack: ['Python', 'scikit-learn', 'TensorFlow', 'XGBoost'],
    repo: 'https://github.com/naresh6897',
    demo: '',
    image: '/assets/waste.png'
  },
  {
    title: 'Railway Reservation Management System',
    description: 'Searches train availability with fares; designed for an end-to-end booking flow.',
    techStack: ['Python', 'MySQL'],
    repo: 'https://github.com/naresh6897',
    demo: '',
    image: '/assets/railway.png'
  }
];


const projectsData = [
  {
    title: 'My Portfolio Using React',
    description: 'Designed and developed a personal portfolio website to showcase projects, skills, and achievements. Built using ReactJS, Tailwind CSS, and hosted on GitHub Pages with a CI/CD pipeline for automated deployments. Integrated dark mode, responsive design, and interactive UI elements for an enhanced user experience.). ',
    techStack: ['HTML5', 'CSS3','JavaScript','ReactJS'],
    githubLink: 'https://{profile.socials.github}/Portfolio.git'
  },
  {
    title: 'My Weather App Using React',
    description: 'Developed a web application using ReactJS that retrieves the current weather data for the users current location or any location they search for, as well as the five-day weather forecast, including the locations minimum and maximum temperatures, humidity, and sky conditions (cloudy, clear, rainy, fog, and mist). ',
    techStack: ['HTML5', 'CSS3','JavaScript','ReactJS'],
    githubLink: 'https://{profile.socials.github}/weather.git'
  },
  {
    title: 'Smart Plant Recognition',
    description: 'Developed an app which detects the name of the plant, scientific name, along with the description of the plant from a photograph that student uploads. Used Angular framework (TypeScript/JS) and Django framework (Python) with HTML & CSS for Front End.',
    techStack: ['Python', 'Django', 'HTML5', 'CSS3', 'JavaScript', 'Angular', 'NodeJS'],
    githubLink: 'https://{profile.socials.github}/Phoenix.git'
  },
  {
    title: 'Suspicious Activity Detection',
    description: 'Used Machine Learning and Deep Learning Algorithms and techniques to convert video into frames and analyze the persons and their activities from the processed frame to detect which part of the videos contain the unusual activity which aid the faster judgement of the unusual activity being abnormal. y.',
    techStack: ['Deep Learning', 'Python', 'ML'],
    githubLink: ''
  },
  {
    title: 'Smart Waste Sorting: A Comparative Analysis of ML Algorithms',
    description: 'A Machine Learning project where waste is classified as organic or recyclable. Algorithms such as Logistic Regression, Decision Tree, K Nearest Neighbors (KNN), Naive Bayes, Random Forest, XGBoost, and Convolutional Neural Networks (CNN) are used to know which model performs better. As a result, XGBoost and CNN models outperform other algorithm models.',
    techStack: ['Logistic Regression', 'CNN Algorithm', 'KNN', ],
    githubLink: ''
  },
];

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <EachProject
            key={index}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
