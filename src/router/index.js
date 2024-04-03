import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView';
import AboutView from '../views/AboutView.vue';
import ResumeView from '../views/ResumeView.vue';
import ProjectView from '../views/ProjectView.vue';
import TestimonialsView from '../views/TestimonialsView.vue';
import ContactView from '../views/ContactView.vue';

const routes = [
  { path: '/', redirect: '/home' }, 
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/resume', name: 'resume', component: ResumeView },
  { path: '/project', name: 'project', component: ProjectView },
  { path: '/testimonials', name: 'testimonials', component: TestimonialsView },
  { path: '/contact', name: 'contact', component: ContactView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
