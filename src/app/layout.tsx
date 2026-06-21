import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Living Vino Vida | Tablas Gourmet",
  description: "Tablas de quesos y charcutería premium en Toluca, Metepec y Zinacantepec, Estado de México.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased text-white bg-black`}
      >
        {children}

        {/* Schema.org LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Living Vino Vida",
              image: "https://yourwebsite.com/logo.png",
              "@id": "https://yourwebsite.com",
              url: "https://yourwebsite.com",
              telephone: "+527222502404",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Toluca Centro",
                addressLocality: "Toluca",
                addressRegion: "MEX",
                postalCode: "50000",
                addressCountry: "MX"
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 19.2826,
                longitude: -99.6557
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                opens: "09:00",
                closes: "18:00"
              },
              priceRange: "$$"
            })
          }}
        />

        {/* Dummy GA / Pixel Scripts for readiness */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Google Analytics Placeholder
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');

              // Meta Pixel Placeholder
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'XXXXXXXXXXXXXXXX');
              fbq('track', 'PageView');
             `
          }}
        />
      </body>
    </html>
  );
}
