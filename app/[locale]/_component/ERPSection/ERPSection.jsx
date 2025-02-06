import { Link } from "../../../../i18n/routing";
import ErpPgoto from "../Images_component/ErpPgoto/ErpPgoto";
import ErpSectionIllustration_11zon from "../Images_component/ErpSectionIllustration_11zon/ErpSectionIllustration_11zon";
import { useTranslations } from "next-intl";
const ERPSection = () => {
  const t = useTranslations("ServicesPage");
  return (
    <div
      className="theAPP"
      style={{
        height: "100%",
        minHeight: "100%",
        transition: "0.7s",
        marginTop: "100px",
        textAlign: "center",
        marginBottom: "200px",
      }}
    >
      <h1 className="headerE">{t("erp_systemsnew")}</h1>
      <div className="container ERP">
        <div className="maskERP" id="maskERPP">
          <div className="icermask" >
            <div className="boxERP">
              <h2 className="mainERPtitle">{t("erp_systems")}</h2>
              <p className="">
              {t("erp_systemsero")}
              </p>
            </div>
            <Link href={"/contact"}>
              <button className="ERPcontactBtn">
                <span style={{ position: "relative", zIndex: "100" }}>
                  {t("contact_1")}
                </span>
              </button>
            </Link>
          </div>
          <div className="icermask">
            <ErpPgoto />
            <div className="boxERP">
              <h2 className="mainERPtitle">{t("skada_systems")}</h2>
              <p>
              {t("services3")}
              </p>
            </div>
            <ErpSectionIllustration_11zon />
          </div>
        </div>
        {/* <div className="custom-buttons-container">
          <div className="custom-button">Scada Systems</div>
          <div className="custom-button">Fiori Systems</div>
          <div className="custom-button">ODO Systems</div>
          <div className="custom-button">ODO Systems</div>
          <div className="custom-button">PP Systems</div>
          <div className="custom-button">Scada Systems</div>
          <div className="custom-button">Fiori Systems</div>
          <div className="custom-button">ODO Systems</div>
          <div className="custom-button">PP Systems</div>
        </div> */}
      </div>
    </div>
  );
};

export default ERPSection;
