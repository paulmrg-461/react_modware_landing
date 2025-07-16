import { ShoppingCart, Building2, Car, Eye, Pill } from 'lucide-react';

export interface Collaborator {
  id: number;
  name: string;
  imagePath: string;
  email: string;
  profession: string;
  phone: string;
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
import paulImage from '../assets/images/team/paul.jpg';

export const collaborators: Collaborator[] = [
  {
    id: 1,
    name: 'Jimmy Realpe',
    imagePath: jimmyImage,
    email: 'jimmyarg87@gmail.com',
    profession: 'Frontend developer',
    phone: '+573125035306'
  },
  {
    id: 2,
    name: 'Rafael Belalcázar',
    imagePath: rafaelImage,
    email: 'rafabeldev@gmail.com',
    profession: 'Data scientist',
    phone: '+573214153856'
  },
  {
    id: 3,
    name: 'Víctor Pinto',
    imagePath: victorImage,
    email: 'victorp2304.pro@gmail.com',
    profession: 'Fullstack developer',
    phone: '+573182345621'
  },
  {
    id: 4,
    name: 'Michael Pardo',
    imagePath: michaelImage,
    email: 'pardo.burbano@gmail.com',
    profession: 'Backend developer',
    phone: '+573219115240'
  },
  {
    id: 5,
    name: 'Paul Realpe',
    imagePath: paulImage,
    email: 'co.devpaul@gmail.com',
    profession: 'Fullstack developer',
    phone: '+573043162313'
  }
];

export const clients: Client[] = [
  {
    id: '1',
    name: 'Megahogar',
    icon: ShoppingCart,
    description: 'E-commerce platform for home and furniture retail',
    category: 'Retail & E-commerce'
  },
  {
    id: '2',
    name: 'GH',
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
    name: 'Vista',
    icon: Eye,
    description: 'Visual analytics and monitoring platform',
    category: 'Analytics'
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