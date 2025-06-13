import React from 'react';
import '@/styles/auth.scss';
import AdminNav from '@/layouts/headers/AdminNav';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface AuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = async ({ children }) => {
    return (
        <div className="auth-layout">
            <AdminNav />
            <main className="auth-content">
                {children}
            </main>
            <ToastContainer />
        </div>
    );
};

export default AuthLayout;