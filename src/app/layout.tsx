import Link from 'next/link'
import StyledComponentsRegistry from './lib/registry'
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Test Mj',
  description: 'by mj'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
    </html>
  );
}
