"use client";
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { getCookie } from "cookies-next";

interface BlogFormData {
  title: {
    az: string;
    ru: string;
    en: string;
  };
  description: {
    az: string;
    ru: string;
    en: string;
  };
  content: {
    az: string;
    ru: string;
    en: string;
  };
  coverImage: File | null;
  image: File | null;
  videos: File | null;
}

const CreateBlog: React.FC = () => {
  const accessToken = getCookie("accessToken");
  const [formData, setFormData] = useState<BlogFormData>({
    title: { az: '', ru: '', en: '' },
    description: { az: '', ru: '', en: '' },
    content: { az: '', ru: '', en: '' },
    coverImage: null,
    image: null,
    videos: null
  });
  
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleInputChange = (field: keyof BlogFormData, lang: string, value: string) => {
    if (field === 'title' || field === 'description' || field === 'content') {
      setFormData(prev => ({
        ...prev,
        [field]: {
          ...prev[field],
          [lang]: value
        }
      }));
    }
  };

  const handleFileChange = (field: 'coverImage' | 'image' | 'videos', file: File | null) => {
    setFormData(prev => ({
      ...prev,
      [field]: file
    }));
  };

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
        const formDataToSend = new FormData();
        
        formDataToSend.append('title', JSON.stringify(formData.title));
        formDataToSend.append('description', JSON.stringify(formData.description));
        formDataToSend.append('content', JSON.stringify(formData.content));
        
        if (formData.coverImage) {
            formDataToSend.append('coverImage', formData.coverImage);
        }
        if (formData.image) {
            formDataToSend.append('image', formData.image);
        }
        if (formData.videos) {
            formDataToSend.append('videos', formData.videos);
        }

        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`, formDataToSend, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${accessToken}`,
            },
        });
        console.log('Blog created successfully:', response);

        setMessage('Blog created successfully!');
        toast.success('Blog created successfully!');
        
        setFormData({
            title: { az: '', ru: '', en: '' },
            description: { az: '', ru: '', en: '' },
            content: { az: '', ru: '', en: '' },
            coverImage: null,
            image: null,
            videos: null
        });

        const fileInputs = document.querySelectorAll('input[type="file"]') as NodeListOf<HTMLInputElement>;
        fileInputs.forEach(input => input.value = '');

    } catch (error) {
        console.error('Error creating blog:', error);
        setMessage('Error creating blog. Please try again.');
        toast.error('Error creating blog. Please try again.');
    } finally {
        setLoading(false);
    }
};

  return (
    <div className="create-blog-container">
      <h1 className="page-title">Create New Blog</h1>
      
      {message && (
        <div className={`message ${message.includes('Error') ? 'error' : 'success'}`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="blog-form">
        {/* Title Section */}
        <div className="form-section">
          <h3>Title</h3>
          <div className="language-inputs">
            <div className="input-group">
              <label>Azerbaijani</label>
              <input
                type="text"
                value={formData.title.az}
                onChange={(e) => handleInputChange('title', 'az', e.target.value)}
                placeholder="Enter title in Azerbaijani"
                required
              />
            </div>
            <div className="input-group">
              <label>Russian</label>
              <input
                type="text"
                value={formData.title.ru}
                onChange={(e) => handleInputChange('title', 'ru', e.target.value)}
                placeholder="Enter title in Russian"
                required
              />
            </div>
            <div className="input-group">
              <label>English</label>
              <input
                type="text"
                value={formData.title.en}
                onChange={(e) => handleInputChange('title', 'en', e.target.value)}
                placeholder="Enter title in English"
                required
              />
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="form-section">
          <h3>Description</h3>
          <div className="language-inputs">
            <div className="input-group">
              <label>Azerbaijani</label>
              <textarea
                value={formData.description.az}
                onChange={(e) => handleInputChange('description', 'az', e.target.value)}
                placeholder="Enter description in Azerbaijani"
                rows={3}
                required
              />
            </div>
            <div className="input-group">
              <label>Russian</label>
              <textarea
                value={formData.description.ru}
                onChange={(e) => handleInputChange('description', 'ru', e.target.value)}
                placeholder="Enter description in Russian"
                rows={3}
                required
              />
            </div>
            <div className="input-group">
              <label>English</label>
              <textarea
                value={formData.description.en}
                onChange={(e) => handleInputChange('description', 'en', e.target.value)}
                placeholder="Enter description in English"
                rows={3}
                required
              />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="form-section">
          <h3>Content</h3>
          <div className="language-inputs">
            <div className="input-group">
              <label>Azerbaijani</label>
              <textarea
                value={formData.content.az}
                onChange={(e) => handleInputChange('content', 'az', e.target.value)}
                placeholder="Enter content in Azerbaijani"
                rows={8}
                required
              />
            </div>
            <div className="input-group">
              <label>Russian</label>
              <textarea
                value={formData.content.ru}
                onChange={(e) => handleInputChange('content', 'ru', e.target.value)}
                placeholder="Enter content in Russian"
                rows={8}
                required
              />
            </div>
            <div className="input-group">
              <label>English</label>
              <textarea
                value={formData.content.en}
                onChange={(e) => handleInputChange('content', 'en', e.target.value)}
                placeholder="Enter content in English"
                rows={8}
                required
              />
            </div>
          </div>
        </div>

        {/* File Upload Section */}
        <div className="form-section">
          <h3>Media Files</h3>
          <div className="file-uploads">
            <div className="input-group">
              <label>Cover Image</label>
              <input
                type="file"
                required
                accept="image/*"
                onChange={(e) => handleFileChange('coverImage', e.target.files?.[0] || null)}
              />
            </div>
            <div className="input-group">
              <label>Additional Image</label>
              <input
                type="file"
                required
                accept="image/*"
                onChange={(e) => handleFileChange('image', e.target.files?.[0] || null)}
              />
            </div>
            <div className="input-group">
              <label>Videos</label>
              <input
                type="file"
                accept="video/*"
                required
                onChange={(e) => handleFileChange('videos', e.target.files?.[0] || null)}
              />
            </div>
          </div>
        </div>

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? 'Creating...' : 'Create Blog'}
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;