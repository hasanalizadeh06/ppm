import React from 'react';
import '@/styles/auth.scss';
import AdminNav from '@/layouts/headers/AdminNav';

interface AuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
    return (
        <div className="auth-layout">
            <AdminNav />
            <main className="auth-content">
                {children}
            </main>
        </div>
    );
};

export default AuthLayout;