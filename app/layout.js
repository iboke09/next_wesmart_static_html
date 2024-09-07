import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
// import { Gabarito } from "next/font/google";
import Navbar from "./_component/Navbar/Navbar";
import { Lato } from "next/font/google";
// const gabarito = Gabarito({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-gabarito",
// });

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "900"],
  display: "swap",
  variable: "--lato-font",
});
export const metadata = {
  title: {
    template: "%s - Wesmart For Technology",
  },
  description:
    "We offer innovative SAP solutions, top-notch website and store designs with the fastest performance, and exceptional UI/UX services for user experience.",
  canonical: "https://wesmartt.com",

  openGraph: {
    title: "With WeSmart Innovate Beyond Limits",
    description:
      "We offer innovative SAP solutions, top-notch website and store designs with the fastest performance, and exceptional UI/UX services for user experience.",
    url: "https://wesmartt.com",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://wesmartt.com/images/opengraph-image.jpg",
        alt: "Sap and all web development services",
      },
    ],
    site_name: "Wesmart Company Site",
  },
  twitter: {
    card: "summary_large_image",
    title: "With WeSmart Innovate Beyond Limits",
    description:
      "We offer innovative SAP solutions, top-notch website and store designs with the fastest performance, and exceptional UI/UX services for user experience.",
    image: "https://wesmartt.com/opengraph-image.jpg",
  },
  additionalMetaTags: [
    {
      name: "keywords",
      content:
        "Sap Consultant, SEO, Web Development,UI/UX design, All web services, erp ,websites,graphic design,We offer innovative SAP solutions, top-notch website and store designs with the fastest performance, and exceptional UI/UX services for user experience.",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      name: "jsonld",
      content: `{
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Wesmart For Technology",
        "url": "https://wesmartt.com",
        "logo": "https://wesmartt.com/images/opengraph-image.jpg",
        "sameAs": [
          "https://www.facebook.com/wesmartt",
          "https://www.twitter.com/wesmartt"
        ]
      }`,
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="prefetch" href="/about" />
        <link rel="prefetch" href="/services" />
        <link rel="prefetch" href="/contact" />
        <link rel="prefetch" href="/" />
      </head>
      <body className={lato.variable}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}