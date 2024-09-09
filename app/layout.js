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
        url: "https://res.cloudinary.com/detcvepoj/image/upload/v1725698812/vza8nsez27dvm8i2m7hq.jpg",
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
    image:
      "https://res.cloudinary.com/detcvepoj/image/upload/v1725698812/vza8nsez27dvm8i2m7hq.jpg",
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
        "logo": "https://res.cloudinary.com/detcvepoj/image/upload/v1725698812/vza8nsez27dvm8i2m7hq.jpg",
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
