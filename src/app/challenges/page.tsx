import styles from "./styles.module.css";
import ChallengeCount from "@/components/pages/challenges/ChallengeCount";
import FilterBar from "@/components/pages/challenges/FilterBar";
import ChallengeList from "@/components/pages/challenges/ChallengeList";
import Footer from "@/components/pages/challenges/Footer";
import axios from "axios";
import { IChallengeItem } from "@/components/pages/challenges/ChallengeList/ChallengeItem";

const ChallengePage: React.FC = async ({}) => {
  const response = await axios.get(process.env.URL_CHALLENGE_LIST as string);
  const data: IChallengeItem[] = response.data;
  const completedCount = data.filter((e) => e.code?.status === "passed").length;

  return (
    <>
      <div className={styles.PageLayout_main}>
        <div className="flex flex-col px-5 pb-10 pt-10">
          <ChallengeCount completed={completedCount} totalCount={data.length} />
          <FilterBar />
          <ChallengeList list={data} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ChallengePage;
