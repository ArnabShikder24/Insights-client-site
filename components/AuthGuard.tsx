// components/AuthGuard.tsx
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

    if (!token) {
      // No token: clear any existing data and redirect to login
      localStorage.removeItem('authToken');
      localStorage.removeItem('userData');
      if (pathname !== '/auth/login') {
        router.replace('/auth/login');
      }
    } else {
      // Has token: prevent access to public routes
      if (PUBLIC_ROUTES.includes(pathname)) {
        router.replace('/');
      }
    }
  }, [pathname, router]);

  return <>{children}</>;
};

export default AuthGuard;
