import React, { createContext, useContext, useState, useEffect } from 'react';
import { portfolioData as initialPortfolioData } from '../data/portfolioData';

const PortfolioContext = createContext(null);

const STORAGE_KEY_DATA = 'bd_portfolio_custom_data';
const STORAGE_KEY_AUTH = 'bd_admin_token';
const STORAGE_KEY_PASS = 'bd_admin_password_hash';
const STORAGE_KEY_MESSAGES = 'bd_admin_contact_messages';

// Simple fast SHA-256 equivalent hash using browser Web Crypto API
async function hashPassword(plainText) {
  const encoder = new TextEncoder();
  const data = encoder.encode(plainText);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

// Default password
const DEFAULT_PASS = 'admin@bharani';

export const PortfolioProvider = ({ children }) => {
  // 1. Data state (starts with initial portfolioData, overrides with localStorage)
  const [data, setData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_DATA);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...initialPortfolioData,
          ...parsed,
          // ensure arrays are intact
          projects: parsed.projects || initialPortfolioData.projects,
          education: parsed.education || initialPortfolioData.education,
          experience: parsed.experience || initialPortfolioData.experience,
          skills: parsed.skills || initialPortfolioData.skills,
        };
      }
    } catch (e) {
      console.warn('Failed to parse saved portfolio data', e);
    }
    return initialPortfolioData;
  });

  // 2. Admin Auth state
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem(STORAGE_KEY_AUTH) === 'true';
  });

  // 3. Contact messages received
  const [messages, setMessages] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_MESSAGES);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Save data to localStorage whenever updated
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_DATA, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving portfolio data to localStorage', e);
    }
  }, [data]);

  // Save messages to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_MESSAGES, JSON.stringify(messages));
    } catch (e) {
      console.error('Error saving messages', e);
    }
  }, [messages]);

  // Admin Login
  const login = async (passwordInput) => {
    try {
      // Direct match for default password
      if (passwordInput === DEFAULT_PASS) {
        sessionStorage.setItem(STORAGE_KEY_AUTH, 'true');
        setIsAuthenticated(true);
        return { success: true };
      }

      const customHash = localStorage.getItem(STORAGE_KEY_PASS);
      const inputHash = await hashPassword(passwordInput);

      if (customHash && inputHash === customHash) {
        sessionStorage.setItem(STORAGE_KEY_AUTH, 'true');
        setIsAuthenticated(true);
        return { success: true };
      }

      return { success: false, message: 'Invalid Admin Clearance Code / Password' };
    } catch (err) {
      return { success: false, message: err.message };
    }
  };

  // Admin Logout
  const logout = () => {
    sessionStorage.removeItem(STORAGE_KEY_AUTH);
    setIsAuthenticated(false);
  };

  // Change Admin Password
  const changePassword = async (oldPassword, newPassword) => {
    const loginCheck = await login(oldPassword);
    if (!loginCheck.success) {
      return { success: false, message: 'Current password verification failed' };
    }
    if (!newPassword || newPassword.length < 4) {
      return { success: false, message: 'New password must be at least 4 characters' };
    }
    const newHash = await hashPassword(newPassword);
    localStorage.setItem(STORAGE_KEY_PASS, newHash);
    return { success: true, message: 'Admin password updated successfully' };
  };

  // ================= DATA CRUD ACTIONS =================

  // Projects CRUD
  const addProject = (project) => {
    const newProj = {
      ...project,
      id: project.id || `proj-${Date.now()}`,
      slug: project.slug || project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    };
    setData((prev) => ({
      ...prev,
      projects: [newProj, ...prev.projects],
    }));
    return newProj;
  };

  const updateProject = (updatedProject) => {
    setData((prev) => ({
      ...prev,
      projects: prev.projects.map((p) => (p.id === updatedProject.id ? updatedProject : p)),
    }));
  };

  const deleteProject = (projectId) => {
    setData((prev) => ({
      ...prev,
      projects: prev.projects.filter((p) => p.id !== projectId),
    }));
  };

  // Education CRUD
  const updateEducation = (educationList) => {
    setData((prev) => ({
      ...prev,
      education: educationList,
    }));
  };

  const addEducation = (item) => {
    const newItem = { ...item, id: item.id || `edu-${Date.now()}` };
    setData((prev) => ({
      ...prev,
      education: [newItem, ...prev.education],
    }));
  };

  const deleteEducation = (id) => {
    setData((prev) => ({
      ...prev,
      education: prev.education.filter((e) => e.id !== id),
    }));
  };

  // Experience CRUD
  const updateExperience = (experienceList) => {
    setData((prev) => ({
      ...prev,
      experience: experienceList,
    }));
  };

  const addExperience = (item) => {
    const newItem = { ...item, id: item.id || `exp-${Date.now()}` };
    setData((prev) => ({
      ...prev,
      experience: [newItem, ...prev.experience],
    }));
  };

  const deleteExperience = (id) => {
    setData((prev) => ({
      ...prev,
      experience: prev.experience.filter((e) => e.id !== id),
    }));
  };

  // Skills CRUD
  const updateSkills = (newSkills) => {
    setData((prev) => ({
      ...prev,
      skills: newSkills,
    }));
  };

  // Personal Info update
  const updatePersonal = (personalInfo) => {
    setData((prev) => ({
      ...prev,
      personal: {
        ...prev.personal,
        ...personalInfo,
      },
    }));
  };

  // Store received contact messages
  const recordMessage = (msg) => {
    const entry = {
      ...msg,
      id: `msg-${Date.now()}`,
      receivedAt: new Date().toISOString(),
      read: false,
    };
    setMessages((prev) => [entry, ...prev]);
  };

  const deleteMessage = (id) => {
    setMessages((prev) => prev.filter((m) => m.id !== id));
  };

  // Reset to initial defaults
  const resetToDefaults = () => {
    localStorage.removeItem(STORAGE_KEY_DATA);
    setData(initialPortfolioData);
  };

  return (
    <PortfolioContext.Provider
      value={{
        data,
        personal: data.personal,
        projects: data.projects,
        experience: data.experience,
        skills: data.skills,
        education: data.education,
        isAuthenticated,
        login,
        logout,
        changePassword,
        addProject,
        updateProject,
        deleteProject,
        updateEducation,
        addEducation,
        deleteEducation,
        updateExperience,
        addExperience,
        deleteExperience,
        updateSkills,
        updatePersonal,
        resetToDefaults,
        messages,
        recordMessage,
        deleteMessage,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};

