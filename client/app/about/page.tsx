import { getTranslations } from '../../src/lib/lang-server';

export default async function About() {
  const t = await getTranslations();

  return (
    <>
      <h1>{t.about.title}</h1>
      <p>{t.about.body}</p>
    </>
  );
}

