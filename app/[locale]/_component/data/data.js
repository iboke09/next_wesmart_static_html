import {
  FcCircuit,
  FcFaq,
  FcBullish,
  FcShipped,
  FcEnteringHeavenAlive,
  FcInternal,
  FcAnswers,
  FcNeutralTrading,
} from "react-icons/fc";
import { useTranslations } from "next-intl";

const Data = () => {
  const t = useTranslations("HomePage");
  const data = [
    {
      id: 1,
      img: <FcEnteringHeavenAlive />,
      name: t("experience_title"),
      text: t("experience_des"),
    },
    {
      id: 2,
      img: <FcInternal />,
      name: t("experience_title1"),
      text: t("experience_des1"),
    },
    {
      id: 3,
      img: <FcAnswers />,
      name: t("experience_title2"),
      text: t("experience_des2"),
    },
    {
      id: 4,
      img: <FcNeutralTrading />,
      name: t("experience_title3"),
      text: t("experience_des3"),
    },
  ];
  return data;
};
export default Data;
