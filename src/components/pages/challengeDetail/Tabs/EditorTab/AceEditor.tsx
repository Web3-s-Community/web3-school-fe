"use client";
import { PropsWithChildren } from "react";
import CodeEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/ext-language_tools";
interface Props {
  value: string;
  onChange: (value: string) => void;
}

const AceEditor: React.FC<PropsWithChildren<Props>> = ({ value, onChange }) => {
  return (
    <>
      <CodeEditor
        value={value}
        onChange={onChange}
        mode="javascript"
        fontSize={14}
        setOptions={{ useWorker: false }}
      />
    </>
  );
};

export default AceEditor;
