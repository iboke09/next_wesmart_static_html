import Image from "next/image";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import LastProject2 from '../Images_component/LastProject2/LastProject2'
import LastProject1 from '../Images_component/LastProject1/LastProject1'
import { useTranslations } from "next-intl";
import { Link } from "../../../../i18n/routing";
const LastProject = () => {
   const t = useTranslations('HomePage');
  return (
    <>
      <div
        className="lastProject"
        style={{
          width: "100vw",
          position: "relative",
          height: "85vh",
          marginTop: "100px",
          marginBottom: "70px",
          textAlign: "center",
        }}
      >
        <div className="container last">
          <h1>{t('our_last')}</h1>
          <h2>{t('our_last1')}</h2>
          <div className="mask-last">
            <div className="textli">
              <h3>{t('experience_title3')}</h3>
              <h3>{t('sap_s')}</h3>
              <p >
                {t('our_last2')}
              </p>
              <Link href="https://www.saadplast.com/en/index.html" target="_blank" className="buttonlast">
                {t('our_last3')}
                <div className="iconlast">
                  <MdArrowOutward />
                </div>
              </Link>
            </div>
          </div>
            <div className="fotolu">
                <LastProject1/>
                <LastProject2/>
            </div>
        </div>
      </div>
    </>
  );
};

export default LastProject;
