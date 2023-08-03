"use client";
import styles from "./styles.module.css";
import Footer from "./Footer";
import Split from "@uiw/react-split";
import SplitBar from "@/components/pages/challengeDetail/SplitBar";
import TabWrapper from "@/components/pages/challengeDetail/TabWrapper";

interface Props {
  params: { id: string };
}

const ChallengeDetails: React.FC<Props> = ({ params: { id } }) => {
  return (
    <>
      <div className={styles._slug__content}>
        <Split
          mode="horizontal"
          style={{ height: "100%", width: "100%" }}
          renderBar={(props) => <SplitBar {...props} mode="horizontal" />}
        >
          <div className="w-[30%]">
            <TabWrapper style={{ width: "100%" }}></TabWrapper>
          </div>
          <Split
            mode="vertical"
            className="w-[70%]"
            renderBar={(props) => <SplitBar {...props} mode="vertical" />}
          >
            {/* <TabWrapper style={{ height: "30%" }}></TabWrapper>
            <TabWrapper style={{ height: "70%" }}></TabWrapper> */}

            <div className="h-[30]">
              <TabWrapper style={{ height: "100%" }}></TabWrapper>
            </div>
            <div className="h-[70%]">
              <TabWrapper style={{ height: "100%" }}></TabWrapper>
            </div>
          </Split>
        </Split>
      </div>
      <Footer />
    </>
  );
};

export default ChallengeDetails;
