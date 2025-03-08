import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Rathod Sai Kiran | Full Stack Developer',
  description: 'Portfolio of Rathod Sai Kiran, a full stack web developer specializing in React, Node.js, and modern web technologies.',
  keywords: 'web developer, full stack, react, node.js, javascript, typescript, portfolio, Rathod Sai Kiran',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script id="dark-mode-script" strategy="beforeInteractive">
          {`
            (function() {
              // Check if dark mode is enabled
              if (localStorage.theme === 'dark' || 
                  (!('theme' in localStorage) && 
                   window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            })()
          `}
        </Script>
      </head>
      <body className={`${inter.className} bg-light dark:bg-dark text-dark dark:text-light transition-colors duration-300`}>
        {children}
      </body>
    </html>
  );
} 