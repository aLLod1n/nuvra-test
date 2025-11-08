import { getTranslations } from '../../src/lib/lang-server';

export default async function HomePage() {
  const t = await getTranslations();

  return (
    <>
      <h1>{t.home.title}</h1>
      <p>{t.home.body}</p>
    </>
  );
}

