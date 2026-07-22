import type { Metadata } from "next";
import { Open_Sans, Roboto, Work_Sans } from "next/font/google";
import Script from "next/script";
import StyledComponentsRegistry from "@/lib/registry";
import { GlobalStyle } from "./layout.styles";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Forester Revestimientos",
  description: "Forester Revestimientos, todo para tus pisos. Pisos Melamínicos, Madera Maciza, Pisos vinílicos, Revestimientos, Deck, Zócalos y más.",
  keywords: ["Pisos Melamínicos", "Madera Maciza", "Pisos vinílicos", "Revestimientos", "Deck", "Zócalos"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-scroll-behavior="smooth">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-G0MWVC7XNC`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-G0MWVC7XNC');
            `,
          }}
        />

        {/* Facebook Pixel Code */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window,document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1234678734855874'); 
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body className={`${openSans.variable} ${roboto.variable} ${workSans.variable}`}>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MB43CRC4" height="0" width="0" style={{display:"none", visibility:"hidden"}}></iframe>
          </noscript>
          <noscript>
            <img height="1" width="1" style={{display:"none"}} src="https://www.facebook.com/tr?id=1234678734855874&ev=PageView&noscript=1"/>
          </noscript>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
