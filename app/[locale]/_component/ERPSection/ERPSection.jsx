import ErpPgoto from "../Images_component/ErpPgoto/ErpPgoto";
import ErpSectionIllustration_11zon from "../Images_component/ErpSectionIllustration_11zon/ErpSectionIllustration_11zon";
import { useTranslations } from "next-intl";
const ERPSection = () => {
  const t = useTranslations("ServicesPage");
  return (
    <div
      className="theAPP"
      style={{
        height: "100vh",  
        transition: "0.7s",
        marginTop: "100px",
        textAlign: "center",
        marginBottom: "200px",  
      }}
    >
      <h1 className="headerE">{t("erp_systems")}</h1>
      <div className="container ERP">
        <div className="maskERP">
          <div className="icermask">
            <div className="boxERP">
              <h2 className="mainERPtitle">{t("sap_systems")}</h2>
              <p className="">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
                perferendis cumque sequi quia quidem blanditiis consectetur.
                Doloribus officiis, ipsam velit sapiente sint qui maxime vitae
                impedit laboriosam, obcaecati recusandae. Enim.
              </p>
            </div>
            <button className="ERPcontactBtn">
              <span style={{ position: "relative", zIndex: "100" }}>
                {t("contact_1")}
              </span>
            </button>
          </div>
          <div className="icermask">
            <ErpPgoto />
            <div className="boxERP">
              <h2 className="mainERPtitle">{t("skada_systems")}</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores dolore cumque, odio deserunt saepe et ex dolor
                maiores ipsum perferendis alias praesentium totam, veritatis
                error, ut ratione temporibus? Cupiditate, explicabo.
              </p>
            </div>
            <ErpSectionIllustration_11zon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ERPSection;
