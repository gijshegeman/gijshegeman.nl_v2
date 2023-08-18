import "../styles/globals.css";

import Script from 'next/script'
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const dev = process.env.NODE_ENV !== 'production'

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (<>
    {!dev && (
      <>
        <Script src={`"https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}"`} />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
 
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
        </Script>
      </>
    )}
    <AnimatePresence
      mode="wait"
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  </>);
}

export default MyApp;
