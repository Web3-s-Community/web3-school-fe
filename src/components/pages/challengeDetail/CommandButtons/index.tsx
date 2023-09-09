import { PropsWithChildren, useEffect, useState } from "react";
import axios from "axios";
import { useSocketProvider } from "@/hooks/useSocketProvider";
import { BASE_API2 } from "@/constants";
interface Props {
  code: string;
}

const CommandButtons: React.FC<PropsWithChildren<Props>> = ({ code }) => {
  const { setIsLoading, isLoading } = useSocketProvider();

  const [isRunTask, setIsRunTask] = useState(false);
  const [succeedMsg, setSucceedMsg] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [errorType, setErrorType] = useState("");
  const [succeedType, setSucceedType] = useState("");


  useEffect(() => {
    if (!isLoading) setIsRunTask(false);
  }, [isLoading]);

  const format = async () => {
    setIsLoading(true);
    const response = await axios.post(`${BASE_API2}/format`, {
      language: localStorage.getItem("language"),
      task: "format",
      code,
    });
    localStorage.setItem("jobId", response.data.job.id);
  };

  const compile = async () => {
    setIsLoading(true);
    const response = await axios.post(`${BASE_API2}/compile`, {
      language: localStorage.getItem("language"),
      task: "compile",
      code,
    });
    localStorage.setItem("jobId", response.data.job.id);
  };

  const run = async () => {
    setIsRunTask(true);
    setIsLoading(true);
    const response = await axios.post(`http://localhost:8080/api/v1/execute-code`, {
      "code": code,
      "uuid": "user1",
      "code_id": "sol-001"
    });

    setIsRunTask(false);
    setIsLoading(false);

    console.log(response);

    if (response.data.status === "failed") {
      console.log('RUn here');
      setErrorType("compile");
      setErrorMsg(response.data.output);
    } else { // @ts-ignore
      if (response.status === "passed") {
            // @ts-ignore
        setSucceedMsg("compiled");
            setSucceedType(response.data.output.split('\n'));
          }
    }

  };

  return (
    <>
      <div className="fixed bottom-10 right-2 z-50 flex w-fit flex-row items-center space-x-2 px-4 py-3">
        <button
          onClick={format}
          className="btn btn-light btn-xs ml-auto flex h-[30px] flex-row items-center"
          disabled={isLoading}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            width="18"
            height="18"
            className="mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
            ></path>
          </svg>
          Format
        </button>
        <button
          onClick={compile}
          className="btn btn-light btn-xs ml-auto flex h-[30px] flex-row items-center"
          disabled={isLoading}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            width="18"
            height="18"
            className="mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
            ></path>
          </svg>
          Compile
        </button>
        <button
          onClick={run}
          className="btn btn-success btn-xs flex h-[30px] w-[72px] flex-row items-center"
          disabled={isLoading}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            width="18"
            height="18"
            className="mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
            ></path>
          </svg>
          Run
        </button>
      </div>
    </>
  );
};

export default CommandButtons;
