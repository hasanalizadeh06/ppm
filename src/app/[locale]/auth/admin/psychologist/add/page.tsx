"use client";
import React, { useState } from 'react';
import axios from 'axios';
import { getCookie } from 'cookies-next';

interface PsychologistFormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  coverImage: File | null;
  image: File | null;
}

const CreatePsychologist: React.FC = () => {
  const [formData, setFormData] = useState<PsychologistFormData>({
    fullName: '',
    email: '',
    phoneNumber: '',
    coverImage: null,
    image: null
  });
  
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleInputChange = (field: keyof PsychologistFormData, value: string) => {
    if (field === 'fullName' || field === 'email' || field === 'phoneNumber') {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const handleFileChange = (field: 'coverImage' | 'image', file: File | null) => {
    setFormData(prev => ({
      ...prev,
      [field]: file
    }));
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phone: string) => {
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    // Validation
    if (!validateEmail(formData.email)) {
      setMessage('Please enter a valid email address.');
      setLoading(false);
      return;
    }

    if (!validatePhoneNumber(formData.phoneNumber)) {
      setMessage('Please enter a valid phone number.');
      setLoading(false);
      return;
    }

    try {
      const formDataToSend = new FormData();
      
      // Add text fields
      formDataToSend.append('fullName', formData.fullName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phoneNumber', formData.phoneNumber);
      
      // Add files
      if (formData.coverImage) {
        formDataToSend.append('coverImage', formData.coverImage);
      }
      if (formData.image) {
        formDataToSend.append('image', formData.image);
      }
      const accessToken = getCookie("accessToken");
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/psychologists`,
        formDataToSend,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      setMessage('Psychologist profile created successfully!');
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        coverImage: null,
        image: null
      });

      // Reset file inputs
      const fileInputs = document.querySelectorAll('input[type="file"]') as NodeListOf<HTMLInputElement>;
      fileInputs.forEach(input => input.value = '');

    } catch (error) {
      console.error('Error creating psychologist profile:', error);
      setMessage('Error creating psychologist profile. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create-psychologist-container">
      <h1 className="page-title">Create Psychologist Profile</h1>
      
      {message && (
        <div className={`message ${message.includes('Error') ? 'error' : 'success'}`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="psychologist-form">
        {/* Personal Information Section */}
        <div className="form-section">
          <h3>Personal Information</h3>
          <div className="personal-info-inputs">
            <div className="input-group">
              <label>Full Name *</label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                placeholder="Enter full name"
                required
              />
            </div>
            <div className="input-group">
              <label>Email Address *</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="Enter email address"
                required
              />
            </div>
            <div className="input-group">
              <label>Phone Number *</label>
              <input
                type="tel"
                value={formData.phoneNumber}
                onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                placeholder="Enter phone number"
                required
              />
            </div>
          </div>
        </div>

        {/* Image Upload Section */}
        <div className="form-section">
          <h3>Profile Images</h3>
          <div className="image-uploads">
            <div className="input-group">
              <label>Cover Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange('coverImage', e.target.files?.[0] || null)}
              />
              <small className="help-text">Recommended size: 1200x400px</small>
            </div>
            <div className="input-group">
              <label>Profile Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange('image', e.target.files?.[0] || null)}
              />
              <small className="help-text">Recommended size: 400x400px</small>
            </div>
          </div>
        </div>

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? 'Creating Profile...' : 'Create Psychologist Profile'}
        </button>
      </form>
    </div>
  );
};

export default CreatePsychologist;