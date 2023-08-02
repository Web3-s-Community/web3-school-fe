"use client";

import { PropsWithChildren } from "react";
import styles from "./styles.module.css";
import ChallengeCount from "@/components/pages/challenges/ChallengeCount";
import FilterBar from "@/components/pages/challenges/FilterBar";
import ChallengeList from "@/components/pages/challenges/ChallengeList";
import Footer from "@/components/pages/challenges/Footer";
interface Props {}

const ChallengePage: React.FC<PropsWithChildren<Props>> = ({}) => {
  return (
    <>
      <div className={styles.PageLayout_main}>
        <div className="flex flex-col px-5 pb-10 pt-10">
          <ChallengeCount />
          <FilterBar />
          <ChallengeList />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ChallengePage;
