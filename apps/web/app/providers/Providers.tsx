'use client';

import { CrossmintAuthProvider, CrossmintProvider } from '@crossmint/client-sdk-react-ui';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CrossmintProvider apiKey={process.env.NEXT_PUBLIC_CROSSMINT_API_KEY ?? ''}>
      <CrossmintAuthProvider
        loginMethods={['email', 'google', 'apple', 'facebook', 'twitter']}
      >
        {children}
      </CrossmintAuthProvider>
    </CrossmintProvider>
  );
}
