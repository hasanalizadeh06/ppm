"use client";
import React, { useState } from "react";
import axios from "axios";
import { getCookie } from "cookies-next";

interface ServiceFormData {
  title: string;
  description: string;
  profilePhoto: File | null;
  photo: File | null;
}

const CreateService: React.FC = () => {
  const [formData, setFormData] = useState<ServiceFormData>({
    title: "",
    description: "",
    profilePhoto: null,
    photo: null,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleInputChange = (field: keyof ServiceFormData, value: string) => {
    if (field === "title" || field === "description") {
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }));
    }
  };

  const handleFileChange = (
    field: "profilePhoto" | "photo",
    file: File | null
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: file,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    // Basic validation
    if (formData.title.trim().length < 3) {
      setMessage("Service title must be at least 3 characters long.");
      setLoading(false);
      return;
    }

    if (formData.description.trim().length < 10) {
      setMessage("Service description must be at least 10 characters long.");
      setLoading(false);
      return;
    }

    try {
      const formDataToSend = new FormData();

      // Add text fields
      formDataToSend.append("title", formData.title.trim());
      formDataToSend.append("description", formData.description.trim());

      // Add files
      if (formData.profilePhoto) {
        formDataToSend.append("profilePhoto", formData.profilePhoto);
      }
      if (formData.photo) {
        formDataToSend.append("photo", formData.photo);
      }

      const accessToken = getCookie("accessToken");
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/services`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      setMessage("Service created successfully!");

      // Reset form
      setFormData({
        title: "",
        description: "",
        profilePhoto: null,
        photo: null,
      });

      // Reset file inputs
      const fileInputs = document.querySelectorAll(
        'input[type="file"]'
      ) as NodeListOf<HTMLInputElement>;
      fileInputs.forEach((input) => (input.value = ""));
    } catch (error) {
      console.error("Error creating service:", error);
      setMessage("Error creating service. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create-service-container">
      <h1 className="page-title">Create New Service</h1>

      {message && (
        <div
          className={`message ${
            message.includes("Error") ? "error" : "success"
          }`}
        >
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="service-form">
        {/* Service Details Section */}
        <div className="form-section">
          <h3>Service Details</h3>
          <div className="service-info-inputs">
            <div className="input-group">
              <label>Service Title *</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
                placeholder="Enter service title"
                required
                minLength={3}
              />
              <small className="help-text">Minimum 3 characters</small>
            </div>
            <div className="input-group full-width">
              <label>Service Description *</label>
              <textarea
                value={formData.description}
                onChange={(e) =>
                  handleInputChange("description", e.target.value)
                }
                placeholder="Enter detailed service description"
                rows={6}
                required
                minLength={10}
              />
              <small className="help-text">
                Minimum 10 characters. Describe what this service offers.
              </small>
            </div>
          </div>
        </div>

        {/* Image Upload Section */}
        <div className="form-section">
          <h3>Service Images</h3>
          <div className="image-uploads">
            <div className="input-group">
              <label>Profile Photo *</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  handleFileChange("profilePhoto", e.target.files?.[0] || null)
                }
                required
              />
              <small className="help-text">
                Main service image - Recommended size: 800x600px
              </small>
            </div>
            <div className="input-group">
              <label>Additional Photo</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  handleFileChange("photo", e.target.files?.[0] || null)
                }
              />
              <small className="help-text">
                Optional secondary image - Recommended size: 800x600px
              </small>
            </div>
          </div>
        </div>

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? "Creating Service..." : "Create Service"}
        </button>
      </form>
    </div>
  );
};

export default CreateService;
