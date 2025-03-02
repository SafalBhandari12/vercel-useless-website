import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bored Web - Discover Quirky Digital Experiences",
  description:
    "Explore curated web experiments that spark a smile and distract you from the ordinary. Embrace the wonderfully useless!",
  openGraph: {
    title: "Bored Web - Discover Quirky Digital Experiences",
    description:
      "Explore curated web experiments that spark a smile and distract you from the ordinary. Embrace the wonderfully useless!",
    url: "https://feeling-bored.vercel.app",
    siteName: "Bored Web",
    images: [
      {
        url: "https://feeling-bored.vercel.app/og-image.jpg", // Replace with your actual OG image if available
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bored Web - Discover Quirky Digital Experiences",
    description:
      "Explore curated web experiments that spark a smile and distract you from the ordinary. Embrace the wonderfully useless!",
    images: ["https://feeling-bored.vercel.app/twitter-image.jpg"], // Replace with your actual Twitter image if available
  },
  alternates: {
    canonical: "https://feeling-bored.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        {/* Google Site Verification Meta Tag */}
        <meta
          name='google-site-verification'
          content='Or5IbHvuU7e_OAFFJYG3iQW-6DjERpgsApcCokH5DNw'
        />
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}`}
          crossOrigin='anonymous'
          strategy='afterInteractive'
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Bored Web",
              url: "https://feeling-bored.vercel.app",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://feeling-bored.vercel.app/?s={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
