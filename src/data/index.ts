import { ShoppingCart, Building2, Car, Eye, Pill } from 'lucide-react';

export interface Collaborator {
  id: number;
  name: string;
  imagePath: string;
  email: string;
  profession: string;
  phone: string;
  github?: string;
  linkedin?: string;
  portfolio?: string;
}

export interface Client {
  id: string;
  name: string;
  icon: any;
  description: string;
  category: string;
}

// Import team images
import jimmyImage from '../assets/images/team/jimmy.jpeg';
import rafaelImage from '../assets/images/team/rafael.jpeg';
import victorImage from '../assets/images/team/victor.jpg';
import michaelImage from '../assets/images/team/michael.jpeg';
import paulImage from '../assets/images/team/paul.jpeg';

export const collaborators: Collaborator[] = [
  {
    id: 1,
    name: 'Jimmy Realpe',
    imagePath: jimmyImage,
    email: 'jimmyarg87@gmail.com',
    profession: 'Frontend developer',
    phone: '+573125035306',
    github: 'https://github.com/Jimmy287',
    linkedin: 'https://www.linkedin.com/in/jimmyrealpe',
    portfolio: 'https://jimmy-realpe.web.app'
  },
  {
    id: 2,
    name: 'Michael Pardo',
    imagePath: michaelImage,
    email: 'pardo.burbano@gmail.com',
    profession: 'Fullstack developer',
    phone: '+573219115240',
    github: 'https://github.com/MaikPardo',
    linkedin: 'https://www.linkedin.com/in/michael-pardo-burbano-910031186',
    portfolio: 'https://michaelpardo.github.io/portfolio'
  },
  {
    id: 3,
    name: 'Paul Realpe',
    imagePath: paulImage,
    email: 'co.devpaul@gmail.com',
    profession: 'Fullstack developer',
    phone: '+573107254077',
    github: 'https://github.com/paulmrg-461',
    linkedin: 'https://www.linkedin.com/in/paul-realpe-631b17a6',
    portfolio: 'https://devpaul.pro'
  },
  {
    id: 4,
    name: 'Rafael Belalcázar',
    imagePath: rafaelImage,
    email: 'rafabeldev@gmail.com',
    profession: 'Data scientist',
    phone: '+573214153856',
    github: 'https://github.com/rafabelalcazar',
    linkedin: 'https://www.linkedin.com/in/rafael-alejandro-belalc%C3%A1zar-burbano-b41595145?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    portfolio: 'https://rafabelalcazar.github.io/portfolio/'
  },
  {
    id: 5,
    name: 'Víctor Pinto',
    imagePath: victorImage,
    email: 'victorp2304.pro@gmail.com',
    profession: 'Fullstack developer',
    phone: '+573182345621',
    github: 'https://github.com/victorp2304',
    linkedin: 'https://www.linkedin.com/in/victor-pinto-a91254234',
    portfolio: 'https://victorp2304.github.io/portfolio/'
  }
];

export const clients: Client[] = [
  {
    id: '1',
    name: 'Megahogar',
    icon: ShoppingCart,
    description: 'E-commerce platform for home and furniture retail',
    category: 'Retail'
  },
  {
    id: '2',
    name: 'G&H',
    icon: Building2,
    description: 'Corporate management and business solutions',
    category: 'Business Management'
  },
  {
    id: '3',
    name: 'CDA',
    icon: Car,
    description: 'Automotive diagnostic and management system',
    category: 'Automotive'
  },
  {
    id: '4',
    name: 'Grupo Vista',
    icon: Eye,
    description: 'Professional consulting firm with lawyers, engineers, business administrators, and accountants',
    category: 'Consulting'
  },
  {
    id: '5',
    name: 'Jirehfarma',
    icon: Pill,
    description: 'Pharmaceutical management and inventory system',
    category: 'Healthcare'
  },
  {
    id: '6',
    name: 'Central Aluminios',
    icon: Building2,
    description: 'Industrial aluminum processing and management',
    category: 'Manufacturing'
  }
];

export const services = [
  {
    id: 1,
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed to meet your specific business needs and requirements.',
    features: ['Custom Architecture', 'Scalable Solutions', 'Modern Technologies']
  },
  {
    id: 2,
    title: 'Web Applications',
    description: 'Modern, responsive web applications built with cutting-edge technologies and best practices.',
    features: ['Responsive Design', 'Progressive Web Apps', 'SEO Optimized']
  },
  {
    id: 3,
    title: 'Mobile Applications',
    description: 'Native and cross-platform mobile applications for iOS and Android devices.',
    features: ['Cross-Platform', 'Native Performance', 'App Store Ready']
  },
  {
    id: 4,
    title: 'Automation Systems',
    description: 'Intelligent automation solutions to streamline your business processes and increase efficiency.',
    features: ['Process Automation', 'Workflow Optimization', 'Integration Ready']
  },
  {
    id: 5,
    title: 'Artificial Intelligence',
    description: 'AI-powered solutions including machine learning, data analysis, and intelligent decision making.',
    features: ['Machine Learning', 'Data Analytics', 'Predictive Models']
  },
  {
    id: 6,
    title: 'Chatbots',
    description: 'Intelligent conversational interfaces to enhance customer service and user engagement.',
    features: ['Natural Language Processing', '24/7 Availability', 'Multi-Platform']
  },
  {
    id: 7,
    title: 'CRM Systems',
    description: 'Customer relationship management systems to optimize your sales and customer interactions.',
    features: ['Lead Management', 'Sales Pipeline', 'Customer Analytics']
  },
  {
    id: 8,
    title: 'Billing & Invoicing',
    description: 'Comprehensive billing and invoicing solutions for efficient financial management.',
    features: ['Automated Billing', 'Payment Integration', 'Financial Reports']
  }
];