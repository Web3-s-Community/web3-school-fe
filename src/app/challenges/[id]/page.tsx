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
    "https://congcu.org/web3-school/challenge.json"
  );
  const nextResponse = await axios.get(
    "https://congcu.org/web3-school/next.json"
  );
  const prevResponse = await axios.get(
    "https://congcu.org/web3-school/pre.json"
  );
  const data: IChallengeDetail = response.data;
  const nextSlug = nextResponse.data.pageProps.data.challenge.slug;
  const prevSlug = prevResponse.data.pageProps.data.challenge.slug;
  return (
    <>
      <div className={styles._slug__content}>
        <ChallengeDetailLayout data={{ ...data, prevSlug, nextSlug }} />
      </div>
      <Footer />
    </>
  );
};

export default ChallengeDetails;
