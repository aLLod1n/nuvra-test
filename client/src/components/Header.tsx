'use client';

import Link from 'next/link';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { LANG_COOKIE, type Lang } from '../lib/cookies';
import { getT } from '../lib/i18n';

export default function Header({ lang }: { lang: Lang }) {
  const router = useRouter();
  const t = getT(lang);

  const setLang = (l: Lang) => {
    Cookies.set(LANG_COOKIE, l, { expires: 365, sameSite: 'Lax' });
    router.refresh();
  };

  return (
    <header style={{ display: 'flex', gap: 16, padding: 12, borderBottom: '1px solid #ddd' }}>
      <nav style={{ display: 'flex', gap: 12 }}>
        <Link href="/home">{t.nav.home}</Link>
        <Link href="/about">{t.nav.about}</Link>
      </nav>
      <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
        <button onClick={() => setLang('en')} aria-pressed={lang === 'en'}>
          {t.nav.en}
        </button>
        <button onClick={() => setLang('ro')} aria-pressed={lang === 'ro'}>
          {t.nav.ro}
        </button>
      </div>
    </header>
  );
}
