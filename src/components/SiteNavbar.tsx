import Image from 'next/image';
import Link from 'next/link';

type SiteNavbarProps = {
  showActions?: boolean;
};

export default function SiteNavbar({ showActions = true }: SiteNavbarProps) {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <div className="flex items-center gap-3">
          <Link href="/" aria-label="Home">
            <Image
              src="/duela.png"
              alt="DuelaCred Logo"
              width={250}
              height={250}
              className="h-24 w-auto drop-shadow-xl"
              priority
            />
          </Link>
        </div>
        <div className="hidden items-center gap-8 text-sm font-semibold text-[#333333] md:flex">
          <a href="/#how-it-works" className="transition hover:text-[#1E5BB8]">
            How It Works
          </a>
          <a href="/#contact" className="transition hover:text-[#1E5BB8]">
            Contact
          </a>
        </div>
        {showActions ? (
          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/start-investing"
              className="rounded-lg px-4 py-2 text-sm font-semibold text-white transition hover:shadow-lg"
              style={{ background: 'linear-gradient(90deg, #F4B400 0%, #F29900 100%)' }}
            >
              Start Investing
            </Link>
            <Link
              href="/apply-for-funding"
              className="rounded-lg px-4 py-2 text-sm font-semibold text-white transition hover:shadow-lg"
              style={{ background: 'linear-gradient(90deg, #111235 0%, #0d214d 100%)' }}
            >
              Apply for Funding
            </Link>
          </div>
        ) : (
          <div className="hidden w-[260px] md:block" aria-hidden="true" />
        )}
      </div>
    </nav>
  );
}
