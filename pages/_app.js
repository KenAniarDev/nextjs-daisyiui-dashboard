import '../styles/globals.css';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useDarkMode } from 'usehooks-ts';

function MyApp({ Component, pageProps }) {
  const { isDarkMode } = useDarkMode();
  const [_document, set_document] = useState(null);

  useEffect(() => {
    if (!_document) {
      set_document(document);
    }
    if (_document) {
      if (isDarkMode) {
        _document.querySelector('html').setAttribute('data-theme', 'dark');
      } else {
        _document.querySelector('html').setAttribute('data-theme', 'light');
      }
    }
  }, [_document, isDarkMode]);
  return (
    <>
      <Head>
        <title>Custom Dashboard</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
