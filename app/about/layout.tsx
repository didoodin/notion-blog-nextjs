import { ReactNode } from 'react';
import Link from 'next/link';
import { User, Code2, Briefcase, Award, Layout, Palette, Gauge, Accessibility } from 'lucide-react';

interface AboutLayoutProps {
  children: ReactNode;
}

export default function AboutLayout({ children }: AboutLayoutProps) {
  return (
    <div className="container py-8">
      <div className="flex gap-8">
        {/* 좌측 사이드바 */}
        <aside className="w-64 shrink-0">
          <nav className="sticky top-8 space-y-6">
            <div className="space-y-2">
              <h2 className="text-muted-foreground mb-4 text-lg font-semibold">개발자 프로필</h2>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/about"
                    className="hover:bg-accent hover:text-accent-foreground flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors"
                  >
                    <User className="h-4 w-4" />
                    소개
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about/skills"
                    className="hover:bg-accent hover:text-accent-foreground flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors"
                  >
                    <Code2 className="h-4 w-4" />
                    기술 스택
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about/projects"
                    className="hover:bg-accent hover:text-accent-foreground flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors"
                  >
                    <Briefcase className="h-4 w-4" />
                    프로젝트
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about/experience"
                    className="hover:bg-accent hover:text-accent-foreground flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors"
                  >
                    <Award className="h-4 w-4" />
                    경력
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h2 className="text-muted-foreground mb-4 text-lg font-semibold">기술 카테고리</h2>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/about/frontend"
                    className="hover:bg-accent hover:text-accent-foreground flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors"
                  >
                    <Layout className="h-4 w-4" />
                    프론트엔드
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about/ui-ux"
                    className="hover:bg-accent hover:text-accent-foreground flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors"
                  >
                    <Palette className="h-4 w-4" />
                    UI/UX
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about/performance"
                    className="hover:bg-accent hover:text-accent-foreground flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors"
                  >
                    <Gauge className="h-4 w-4" />
                    성능 최적화
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about/accessibility"
                    className="hover:bg-accent hover:text-accent-foreground flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors"
                  >
                    <Accessibility className="h-4 w-4" />
                    접근성
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </aside>

        {/* 우측 메인 콘텐츠 */}
        <main className="bg-card flex-1 rounded-lg border p-6 shadow-sm">{children}</main>
      </div>
    </div>
  );
}
