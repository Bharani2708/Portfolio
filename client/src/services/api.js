import axios from 'axios';
import { portfolioData } from '../data/portfolioData';

const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

export const fetchProjects = async () => {
  try {
    const res = await apiClient.get('/projects');
    if (res.data && res.data.success && Array.isArray(res.data.data) && res.data.data.length > 0) {
      return res.data.data;
    }
    return portfolioData.projects;
  } catch (err) {
    console.warn('Backend API unavailable, using built-in projects data:', err.message);
    return portfolioData.projects;
  }
};

export const fetchExperience = async () => {
  try {
    const res = await apiClient.get('/experience');
    if (res.data && res.data.success && Array.isArray(res.data.data) && res.data.data.length > 0) {
      return res.data.data;
    }
    return portfolioData.experience;
  } catch (err) {
    console.warn('Backend API unavailable, using built-in experience data:', err.message);
    return portfolioData.experience;
  }
};

export const submitContactForm = async (formData) => {
  try {
    const res = await apiClient.post('/contact', formData);
    return res.data;
  } catch (err) {
    const message = err.response?.data?.message || err.message || 'Failed to dispatch message';
    throw new Error(message);
  }
};

