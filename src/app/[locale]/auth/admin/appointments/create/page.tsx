"use client";
import React, { useState } from "react";
import axios from "axios";
import { getCookie } from "cookies-next";


interface AppointmentFormData {
    name: string;
    phone: string;
    email: string;
    reason: string;
    appointmentDate: string;
    startTime: string;
    endTime: string;
    psychologistId: number | "";
}

const CreateAppointment: React.FC = () => {
    const [formData, setFormData] = useState<AppointmentFormData>({
        name: "",
        phone: "",
        email: "",
        reason: "",
        appointmentDate: "",
        startTime: "",
        endTime: "",
        psychologistId: "",
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleInputChange = (
        field: keyof AppointmentFormData,
        value: string
    ) => {
        setFormData((prev) => ({
            ...prev,
            [field]:
                field === "psychologistId"
                    ? value === "" ? "" : Number(value)
                    : value,
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
        setMessage("");

        if (!validateEmail(formData.email)) {
            setMessage("Please enter a valid email address.");
            setLoading(false);
            return;
        }

        if (!validatePhoneNumber(formData.phone)) {
            setMessage("Please enter a valid phone number.");
            setLoading(false);
            return;
        }

        if (!formData.name || !formData.reason || !formData.appointmentDate || !formData.startTime || !formData.endTime || !formData.psychologistId) {
            setMessage("Please fill in all required fields.");
            setLoading(false);
            return;
        }

        try {
            const accessToken = getCookie("accessToken");            
            await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}/api/appointments`,
                {
                    ...formData,
                    psychologistId: Number(formData.psychologistId),
                },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );

            setMessage("Appointment created successfully!");

            setFormData({
                name: "",
                phone: "",
                email: "",
                reason: "",
                appointmentDate: "",
                startTime: "",
                endTime: "",
                psychologistId: "",
            });
        } catch (error) {
            console.error("Error creating appointment:", error);
            setMessage("Error creating appointment. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="create-appointment-container">
            <h1 className="page-title">Create Appointment</h1>

            {message && (
                <div className={`message ${message.includes("Error") ? "error" : "success"}`}>
                    {message}
                </div>
            )}

            <form onSubmit={handleSubmit} className="appointment-form">
                <div className="form-section">
                    <h3>Personal Information</h3>
                    <div className="personal-info-inputs">
                        <div className="input-group">
                            <label>Name *</label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => handleInputChange("name", e.target.value)}
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label>Email *</label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => handleInputChange("email", e.target.value)}
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label>Phone *</label>
                            <input
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => handleInputChange("phone", e.target.value)}
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>
                    </div>
                </div>

                <div className="form-section">
                    <h3>Appointment Details</h3>
                    <div className="appointment-info-inputs">
                        <div className="input-group">
                            <label>Reason *</label>
                            <textarea
                                value={formData.reason}
                                onChange={(e) => handleInputChange("reason", e.target.value)}
                                placeholder="Reason for appointment"
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label>Date *</label>
                            <input
                                type="date"
                                value={formData.appointmentDate}
                                onChange={(e) => handleInputChange("appointmentDate", e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label>Start Time *</label>
                            <input
                                type="time"
                                value={formData.startTime}
                                onChange={(e) => handleInputChange("startTime", e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label>End Time *</label>
                            <input
                                type="time"
                                value={formData.endTime}
                                onChange={(e) => handleInputChange("endTime", e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label>Psychologist ID *</label>
                            <input
                                type="number"
                                value={formData.psychologistId}
                                onChange={(e) => handleInputChange("psychologistId", e.target.value)}
                                placeholder="Enter psychologist ID"
                                required
                                min={1}
                            />
                        </div>
                    </div>
                </div>

                <button type="submit" className="submit-btn" disabled={loading}>
                    {loading ? "Creating Appointment..." : "Create Appointment"}
                </button>
            </form>
        </div>
    );
};

export default CreateAppointment;