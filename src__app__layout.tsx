import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Garuda Tournament System',
  description: 'Platform manajemen kompetisi sepak bola usia dini',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body>{children}</body></html>;
}
