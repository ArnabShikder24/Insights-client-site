'use client';
import App from '@/App';
import store from '@/store';
import { Provider } from 'react-redux';
import React, { ReactNode, Suspense } from 'react';
import { appWithI18Next } from 'ni18n';
import { ni18nConfig } from 'ni18n.config.ts';
import Loading from '@/components/layouts/loading';
import AuthGuard from '../AuthGuard';

interface IProps {
    children?: ReactNode;
}

const ProviderComponent = ({ children }: IProps) => {
    return (
        <Provider store={store}>
            <Suspense fallback={<Loading />}>
                <AuthGuard>
                    <App>{children}</App>
                </AuthGuard>
            </Suspense>
        </Provider>
    );
};

export default ProviderComponent;
// todo
// export default appWithI18Next(ProviderComponent, ni18nConfig);
