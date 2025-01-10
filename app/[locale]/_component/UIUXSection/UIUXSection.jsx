import UiUx from "../Images_component/UiUx/UiUx";
import WebSectionIllustration_11zon from "../Images_component/WebSectionIllustration_11zon/WebSectionIllustration_11zon";
import { useTranslations } from "next-intl";
export default function UIUXSection() {
  const t = useTranslations("ServicesPage");
  return (
    <>
      <div
        className="theAPP"
        style={{
          height: "100vh",
          backgroundColor: "var(--main-alt-color1)",
          transition: "0.7s",
          textAlign: "center",
          marginBottom: "285px",
        }}
      >
        <h1 className="headerUI">{t('software')}</h1>
        <div className="container UI">
          <div className="maskUI I">
            <div className="icermaskUI">
              <UiUx/>
              <div className="boxUI">
                <h2 className="mainUItitle">{t('ui_d')}</h2>
                <p>
                  {t('software_des1')}
                </p>
              </div>
              <WebSectionIllustration_11zon/>
            </div>
            <div className="icermaskUI">
              <div className="boxUI">
                <h2 className="mainUItitle">Web Development</h2>
                <p className="">
                {t('software_des2')}
                </p>
              </div>
              <button className="UIcontactBtn">
                <span style={{ position: "relative", zIndex: "100" }}>
                  {t('contact_1')}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
