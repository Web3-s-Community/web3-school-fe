import ChallengeDetailLayout, {
  IChallengeDetail,
} from "@/components/pages/challengeDetail";
import styles from "./styles.module.css";
import axios from "axios";
import Footer from "./Footer";
import { BASE_API } from "@/constants";

interface Props {
  params: { id: string };
}

const ChallengeDetails: React.FC<Props> = async ({ params: { id } }) => {
  const response = await axios.get(`${BASE_API}/challenge.json`);
  const nextResponse = await axios.get(`${BASE_API}/next.json`);
  const prevResponse = await axios.get(`${BASE_API}/pre.json`);
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
