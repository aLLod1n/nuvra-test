import { cache } from 'react';
import { cookies } from 'next/headers';
import { LANG_COOKIE, DEFAULT_LANG, type Lang } from './cookies';
import { getT } from './i18n';

export const getLang = cache(async (): Promise<Lang> => {
  const cookieStore = await cookies();
  const langCookie = cookieStore.get(LANG_COOKIE);
  const lang =
    langCookie?.value === 'ro' || langCookie?.value === 'en'
      ? langCookie.value
      : DEFAULT_LANG;
  return lang as Lang;
});

export const getTranslations = cache(async () => {
  const lang = await getLang();
  return getT(lang);
});

