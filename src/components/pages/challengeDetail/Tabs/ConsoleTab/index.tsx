import { PropsWithChildren, useEffect, useState } from "react";
import TabWrapper from "../../TabLayout/TabWrapper";
import TabHeader from "../../TabLayout/TabHeader";
import styles from "./styles.module.css";
import { socket } from "@/socket";
import { useSocketProvider } from "@/hooks/useSocketProvider";
import Loading from "./Loading";
import Convert from "ansi-to-html";
interface Props {}

const ConsoleTab: React.FC<PropsWithChildren<Props>> = ({}) => {
  const { isLoading, setIsLoading } = useSocketProvider();
  const [errorMsg, setErrorMsg] = useState("");
  const [errorType, setErrorType] = useState("");
  const [succeedMsg, setSucceedMsg] = useState([]);
  const [succeedType, setSucceedType] = useState("");

  useEffect(() => {
    socket.on("format", onFormat);
    socket.on("compile", onCompile);
    socket.on("run", onRun);

    return () => {
      socket.off("format", onFormat);
      socket.off("compile", onCompile);
      socket.off("run", onRun);
    };
  }, []);

  const onGetError = (info: any) => {
    let err = info.errors.map((error: any) => error.message).join("");
    setErrorMsg(err);
  };

  const onGetSucceed = (info: any) => {
    setSucceedMsg(info);
  };

  const onFormat = (data: any[]) => {
    const response = data[1];
    if (response.jobId !== localStorage.getItem("jobId")) return;
    setIsLoading(false);
    reset();
    if (response.status === "failed") {
      setErrorType("format");
      onGetError(response.error);
    } else if (response.status === "passed") {
      onGetSucceed("nice");
      setSucceedType("format");
    }
  };

  const onCompile = (data: any[]) => {
    const response = data[1];
    if (response.jobId !== localStorage.getItem("jobId")) return;
    setIsLoading(false);
    reset();
    if (response.status === "failed") {
      setErrorType("compile");
      onGetError(response.error);
    } else if (response.status === "passed") {
      onGetSucceed("nice");
      setSucceedType("compile");
    }
  };

  const onRun = (data: any[]) => {
    const response = data[1];
    if (response.jobId !== localStorage.getItem("jobId")) return;
    setIsLoading(false);
    reset();
    if (response.status === "failed") {
      setErrorType("compile");
      onGetError(response.error);
    } else if (response.status === "passed") {
      onGetSucceed(response.output);
      setSucceedType("run");
    }
  };

  const reset = () => {
    setErrorMsg("");
    setErrorType("");
    setSucceedMsg([]);
    setSucceedType("");
  };

  useEffect(() => {
    if (isLoading) {
      reset();
    }
  }, [isLoading]);

  const getBorderColor = () => {
    if (!isLoading) {
      if (errorType) return "3px solid #f97583";
      if (succeedType) return "3px solid #85e89d";
    }
    return "none";
  };

  return (
    <>
      <TabWrapper style={{ height: "100%" }}>
        <TabHeader style={{ height: "20px" }}></TabHeader>
        <div
          className={`rounded-b-lg bg-[color:var(--black)] dark:bg-black ${styles["Logs_component"]}`}
          style={{
            border: getBorderColor(),
          }}
        >
          {isLoading && <Loading />}
          {!isLoading && errorType === "format" && (
            <div className={styles.Logs_line + " " + styles.Logs_errorBg}>
              <div className={styles.Logs_error}>Error 💀</div>
            </div>
          )}
          {!isLoading && succeedType === "format" && (
            <div className={styles.Logs_line}>
              <div className={styles.Logs_passed}>Formatted 📝</div>
            </div>
          )}
          {!isLoading && errorType === "compile" && (
            <>
              <div className={styles.Logs_line + " " + styles.Logs_errorBg}>
                <div className={styles.Logs_error}>Failed to compile 💀</div>
              </div>
              <div className={styles.Logs_line + " " + styles.Logs_errorBg}>
                <div>{errorMsg}</div>
              </div>
            </>
          )}
          {!isLoading && succeedType === "compile" && (
            <div className={styles.Logs_line}>
              <div className={styles.Logs_passed}>Compiled 🔥</div>
            </div>
          )}
          {!isLoading && succeedType === "run" && (
            <>
              {succeedMsg.map((msg, index) => (
                <div key={index} className={styles.Logs_line}>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: new Convert().toHtml(msg),
                    }}
                  ></div>
                </div>
              ))}

              <button className="btn btn-success btn-block btn-md mt-4">
                Next challenge
              </button>
            </>
          )}
        </div>
      </TabWrapper>
    </>
  );
};

export default ConsoleTab;
