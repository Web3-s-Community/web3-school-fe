import { PropsWithChildren } from "react";
import styles from "./styles.module.css";
interface Props {
  videos: {
    url: string;
    title: string | null;
  }[];
  currentTab: string;
}

const Video: React.FC<PropsWithChildren<Props>> = ({ videos, currentTab }) => {
  return (
    <>
      {videos.map((video, index) => (
        <div
          style={{
            display: currentTab === "Video" ? "block" : "none",
          }}
          className="h-full overflow-y-scroll px-3 py-4"
          key={index}
        >
          <div className={styles["Videos_video"]}>
            <iframe
              width="100%"
              style={{ aspectRatio: "16 / 9" }}
              src={video.url}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      ))}
    </>
  );
};

export default Video;
