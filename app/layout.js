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
    default: "Wesmart For Technology",
    template: "%s - Wesmart For Technology",
    
  },
  description:
    "We offer innovative SAP solutions, top-notch website and store designs with the fastest performance, and exceptional UI/UX services for user experience.",
  canonical: "https://wesmartt.com",

  openGraph: {
    title: "Wesmart For Technology",
    description:
      "We offer innovative SAP solutions, top-notch website and store designs with the fastest performance, and exceptional UI/UX services for user experience.",
    url: "https://wesmartt.com",
    images: [
      {
        url: "./TheFinalOfDesigns-02.png",
        alt: "Sap and all web development services",
      },
    ],
    site_name: "Wesmart Company Site",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wesmart For Technology",
    description:
      "We offer innovative SAP solutions, top-notch website and store designs with the fastest performance, and exceptional UI/UX services for user experience.",
    image: "./TheFinalOfDesigns-02.png",
  },
  additionalMetaTags: [
    {
      name: "keywords",
      content:
        "Sap Consultant, SEO, Web Development,UI/UX design, All web services, sap , erp ,websites,graphic design,We offer innovative SAP solutions, top-notch website and store designs with the fastest performance, and exceptional UI/UX services for user experience.",
    },
  ],
  // structuredData: {
  //   '@context': 'https://schema.org',
  //   '@type': 'Organization',
  //   name: 'Wesmart For Technology',
  //   url: 'https://wesmartt.com',
  //   logo: 'https://www.mywebsite.com/logo.png',
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon/favicon.ico" />
      </head>
      {/* <link rel="icon" type="icon" href="./favicon.png"/> */}
      <body className={lato.variable}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
