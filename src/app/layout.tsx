import type {Metadata} from 'next';
import './globals.css';
import './ImageGallery.css';
import './Intro.css';
import './Timeline.css';
import { Toaster } from "@/components/ui/toaster";
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'SRISHTI 2.6',
  description: 'SRISHTI 2.6',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <Head>
        <link rel="stylesheet" href="/KSFE_files/main.min.css" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
