import en from '../../translations/en/translations.json';
import ro from '../../translations/ro/translations.json';
import { DEFAULT_LANG, type Lang } from './cookies';

const dict: Record<Lang, any> = { en, ro };

export function getT(lang?: Lang | string) {
  const key = (lang === 'ro' || lang === 'en') ? lang : DEFAULT_LANG;
  return dict[key as Lang];
}
