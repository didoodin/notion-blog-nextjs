import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Notion Blog',
  description: 'Notion API를 활용한 블로그',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          {/* Header 영역 */}
          <Header />
          {/* Main 영역 */}
          <main className="flex-1">{children}</main>
          {/* Footer 영역 */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
