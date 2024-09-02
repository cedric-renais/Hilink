import Nav from '@/components/Nav';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hilink | Campings & Aventures',
  description: "Votre compagnon de campings et d'aventures",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <header>
          <Nav />
        </header>
        <main className="relative overflow-hidden">{children}</main>
      </body>
    </html>
  );
}
