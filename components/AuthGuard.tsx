'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface AuthGuardProps {
  children: React.ReactNode;
}

const PUBLIC_ROUTES = ['/auth/login', '/auth/register'];

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const token = localStorage.getItem('authToken');

    // If user is not logged in and trying to access a private route
    if (!token && !PUBLIC_ROUTES.includes(pathname)) {
      localStorage.removeItem('authToken');
      localStorage.removeItem('userData');
      router.replace('/auth/login');
    }

    // If user is logged in and trying to access login/register, redirect to home
    if (token && PUBLIC_ROUTES.includes(pathname)) {
      router.replace('/');
    }
  }, [pathname, router]);

  return <>{children}</>;
};

export default AuthGuard;
