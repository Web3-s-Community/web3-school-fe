import { PropsWithChildren } from "react";
interface Props {
  test: string;
}

const Test: React.FC<PropsWithChildren<Props>> = ({ test }) => {
  return (
    <>
      <div className="h-full overflow-y-scroll px-3 py-4">
        <div className="code h-full rounded-lg">
          <pre>
            <code dangerouslySetInnerHTML={{ __html: test }}></code>
          </pre>
        </div>
      </div>
    </>
  );
};

export default Test;
