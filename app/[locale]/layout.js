import { Inter } from "next/font/google";
import "./globals.css";
import { Raleway } from "next/font/google";
// import { Gabarito } from "next/font/google";
import Navbar from "./_component/Navbar/Navbar";
import { Lato } from "next/font/google";
import { Roboto } from "next/font/google";
// import { NextIntlProvider } from 'next-intl';
import { useLocale } from "next-intl";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "../../i18n/routing";
import { setRequestLocale } from "next-intl/server";
// import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import translations from "./translate.json";
import YokPage from "../YokPage";
import ScrollHandle from "./_component/ScrollHandle/ScrollHandle";
// export async function generateStaticParams() {
//   return [{ locale: "en" }, { locale: "ar" }];
// }

export function generateStaticParams() {
  const pages = ["about", "services", "contact"];
  const params = routing.locales.flatMap((locale) =>
    pages.map((page) => ({ locale, slug: page }))
  );
  return params;
}
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
  variable: "--inter-font",
});
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--raleway-font",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "900"],
  display: "swap",
  variable: "--lato-font",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "900"],
  display: "swap",
  variable: "--roboto-font",
});
// export const metadata = {
//   title: {
//     template: "%s - Wesmart For Technology",
//   },
//   description:
//     "We offer innovative SAP solutions, top-notch website and store designs with the fastest performance, and exceptional UI/UX services for user experience.",
//   canonical: "https://wesmartt.com",

//   openGraph: {
//     title: "With WeSmart Innovate Beyond Limits",
//     description:
//       "We offer innovative SAP solutions, top-notch website and store designs with the fastest performance, and exceptional UI/UX services for user experience.",
//     url: "https://wesmartt.com",
//     locale: "en_US",
//     type: "website",
//     images: [
//       {
//         url: "https://res.cloudinary.com/detcvepoj/image/upload/v1725698812/vza8nsez27dvm8i2m7hq.jpg",
//         alt: "Sap and all web development services",
//       },
//     ],
//     site_name: "Wesmart Company Site",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "With WeSmart Innovate Beyond Limits",
//     description:
//       "We offer innovative SAP solutions, top-notch website and store designs with the fastest performance, and exceptional UI/UX services for user experience.",
//     image:
//       "https://res.cloudinary.com/detcvepoj/image/upload/v1725698812/vza8nsez27dvm8i2m7hq.jpg",
//   },
//   additionalMetaTags: [
//     {
//       name: "keywords",
//       content:
//         "Sap Consultant, SEO, Web Development,UI/UX design, All web services, erp ,websites,graphic design,We offer innovative SAP solutions, top-notch website and store designs with the fastest performance, and exceptional UI/UX services for user experience.",
//     },
//     {
//       name: "robots",
//       content: "index, follow",
//     },
//     {
//       name: "jsonld",
//       content: {
//         "@context": "https://schema.org",
//         "@type": "Organization",
//         "name": "Wesmart For Technology",
//         "url": "https://wesmartt.com",
//         "logo": "https://res.cloudinary.com/detcvepoj/image/upload/v1725698812/vza8nsez27dvm8i2m7hq.jpg",
//         "sameAs": [
//           "https://www.facebook.com/wesmartt",
//           "https://www.twitter.com/wesmartt"
//         ]
//       },
//     },
//   ],
// };
export async function generateMetadata({ params }) {
  const locale = params?.locale || "en";
  // جلب الترجمة للغة المطلوبة
  const t = translations[locale]?.metadata || translations.en.metadata;

  return {
    metadataBase: new URL("https://wesmartt.com"),
    title: t.title,
    description: t.description,
    openGraph: {
      title: t.title,
      description: t.description,
      locale: locale === "tr" ? "tr" : "en",
      url: `https://wesmartt.com/${locale}`,
      type: "website",
      images: [
        {
          url: "https://res.cloudinary.com/detcvepoj/image/upload/v1725698812/vza8nsez27dvm8i2m7hq.jpg",
          alt: t.ogAlt,
        },
      ],
      site_name: t.siteName,
    },
    twitter: {
      card: "summary_large_image",
      title: t.title,
      description: t.description,
      image:
        "https://res.cloudinary.com/detcvepoj/image/upload/v1725698812/vza8nsez27dvm8i2m7hq.jpg",
    },
    additionalMetaTags: [
      {
        name: "keywords",
        content: t.keywords,
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
}
export default async function RootLayout({ children, params }) {
  const { locale } = params;

  if (!["en", "tr", "ar"].includes(locale)) {
    return <YokPage />;
  }
  setRequestLocale(locale);
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="../../favicon.png" />
        <link rel="prefetch" href="/en/about" />
        <link rel="prefetch" href="/en/services" />
        <link rel="prefetch" href="/en/contact" />
        <link rel="prefetch" href="/en/" />

        <link rel="prefetch" href="/tr/about" />
        <link rel="prefetch" href="/tr/services" />
        <link rel="prefetch" href="/tr/contact" />
        <link rel="prefetch" href="/tr/" />
        <link rel="alternate" hrefLang="en" href="https://wesmartt.com/en/" />
        <link rel="alternate" hrefLang="tr" href="https://wesmartt.com/tr/" />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://wesmartt.com/"
        />
      </head>
      <ScrollHandle>
        <body
          className={`${lato.variable} ${raleway.variable} ${inter.variable} ${roboto.variable}`}
        >
          <NextIntlClientProvider messages={messages}>
            <Navbar />
            {/* <SmoothScroll> */}
            {children}
            {/* </SmoothScroll> */}
          </NextIntlClientProvider>
        </body>
      </ScrollHandle>
    </html>
  );
}
