import React from 'react';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

interface AuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = async ({ children }) => {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    if (!accessToken) {
        redirect("/auth/login");
    }

    return (
        <div>
            {children}
        </div>
    );
};

export default AuthLayout;