import ChallengeDetailLayout, {
  IChallengeDetail,
} from "@/components/pages/challengeDetail";
import styles from "./styles.module.css";
import axios from "axios";
import Footer from "./Footer";

interface Props {
  params: { id: string };
}

const ChallengeDetails: React.FC<Props> = async ({ params: { id } }) => {
  const response = await axios.get(
    "https://congcu.org/web3-school/challenge.json?fbclid=IwAR1kVv5qGRKBXXSqZp1atmTJ-yIGzGHWXMHSJH1ln0PWbTG1Sc-YMbQHFcQ"
  );
  const data: IChallengeDetail = response.data;

  return (
    <>
      <div className={styles._slug__content}>
        <ChallengeDetailLayout data={data} />
      </div>
      <Footer />
    </>
  );
};

export default ChallengeDetails;
