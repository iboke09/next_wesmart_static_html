// "use client";
import Hero from "./_component/Hero/Hero";
import Spliden from "./_component/Spliden/Spliden";
import Landing from "./_component/Landing/Landing";
import Footer from "./_component/Footer/Footer";
import Our from "./_component/Our/Our";
import Skills from "./_component/Skills/Skills";
import Main from "./_component/Main/Main";
import Incaz from "./_component/Incaz/Incaz.jsx";
import { useTranslations } from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import LastProject from "./_component/LastProject/LastProject";
import Parallex from './_component/Parallex/Parallex'
import CompareDemo from "./_component/CompareDemo/CompareDemo";
import GridGlobe from "./_component/GridGlobe/GridGlobe";

export default function Home({params}) {
  const locale = params?.locale || "en";
  setRequestLocale(locale);
  const t = useTranslations('HomePage');
  return (
    <>
      <title>{t('meta_title')}</title>
      <Landing>
        {/* <Navbar /> */}
        <Main />
      </Landing>
      {/* <Cta/> */}
      <Hero />
      {/* <Our /> */}
      <Skills />
      <Incaz />
      <LastProject/>
      <Parallex/>
      <CompareDemo/>
      {/* <GridGlobe/> */}
      <Spliden />
      <Footer />
      {/* <Tacarob/> */}
    </>
  );
}
