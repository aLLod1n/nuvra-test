import { getLang } from '../src/lib/lang-server';
import Header from '../src/components/Header';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const lang = await getLang();

  return (
    <html lang={lang}>
      <body>
        <Header lang={lang} />
        <main style={{ padding: 24 }}>{children}</main>
      </body>
    </html>
  );
}

