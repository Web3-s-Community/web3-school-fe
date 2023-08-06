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
  const response = await axios.get(process.env.URL_CHALLENGE_DETAIL as string);
  const nextResponse = await axios.get(process.env.URL_NEXT_SLUG as string);
  const prevResponse = await axios.get(process.env.URL_PREV_SLUG as string);
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
