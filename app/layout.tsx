import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
<<<<<<< HEAD
import '@/app/globals.css';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
=======
import './globals.css';
>>>>>>> 8c157eb9b616b8085218ea0e34c063dfe1678fc8

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Notion Blog',
  description: 'Notion API를 활용한 블로그',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
<<<<<<< HEAD
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
=======
      <body className={inter.className}>{children}</body>
>>>>>>> 8c157eb9b616b8085218ea0e34c063dfe1678fc8
    </html>
  );
}
