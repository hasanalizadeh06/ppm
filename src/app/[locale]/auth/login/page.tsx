"use client";
import axios from 'axios';
import { getCookie, setCookie } from 'cookies-next';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    useEffect(() => {
        const accessToken = getCookie("accessToken");
        if (accessToken) {
          router.push("/auth/admin/dashboard");  
        }
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, { email, password });
            if (res.data.success === true) {
                setCookie("accessToken", res.data.data.jwt);
                router.push("/auth/admin/dashboard");  
            }
        } catch (err) {
            console.error(err);
            setError("Giriş uğursuz oldu. İstifadəçi adı və ya şifrə yanlışdır.");
        }
    };

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <h2 className="login-title">Admin Login</h2>
            <label className="login-label">
                Username
                <input
                    className="login-input"
                    type="text"
                    name="username"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </label>
            <label className="login-label">
                Password
                <input
                    className="login-input"
                    type="password"
                    name="password"
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </label>
            {error && <div className="login-error">{error}</div>}
            <button className="login-button" type="submit">Login</button>
        </form>
    );
};

export default Page;