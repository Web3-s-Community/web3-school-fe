import { PropsWithChildren } from "react";

interface IOption {
  value: string;
  displayName: string;
}

interface Props {
  options: IOption[];
  value: string;
  onChange: (value: string) => void;
}

const Select: React.FC<PropsWithChildren<Props>> = ({
  options,
  onChange,
  value,
}) => {
  return (
    <>
      <select
        className="select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map(({ displayName, value }, index) => (
          <option key={index} value={value}>
            {displayName}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
