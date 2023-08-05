import { PropsWithChildren } from "react";
interface Props {}

const Footer: React.FC<PropsWithChildren<Props>> = ({}) => {
  return (
    <>
      <div className="flex h-[var(--footer-height)] flex-row items-center justify-end bg-[color:var(--black)] px-6">
        <a
          className="flex flex-row items-center text-gray-400 transition duration-200 ease-in-out hover:text-white"
          href="https://forms.gle/TTn6vBEMr1n1gz1p7"
          target="__blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            width="18"
            height="18"
            className=""
          >
            <path d="M4.978.855a.5.5 0 1 0-.956.29l.41 1.352A4.985 4.985 0 0 0 3 6h10a4.985 4.985 0 0 0-1.432-3.503l.41-1.352a.5.5 0 1 0-.956-.29l-.291.956A4.978 4.978 0 0 0 8 1a4.979 4.979 0 0 0-2.731.811l-.29-.956z"></path>
            <path d="M13 6v1H8.5v8.975A5 5 0 0 0 13 11h.5a.5.5 0 0 1 .5.5v.5a.5.5 0 1 0 1 0v-.5a1.5 1.5 0 0 0-1.5-1.5H13V9h1.5a.5.5 0 0 0 0-1H13V7h.5A1.5 1.5 0 0 0 15 5.5V5a.5.5 0 0 0-1 0v.5a.5.5 0 0 1-.5.5H13zm-5.5 9.975V7H3V6h-.5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 0-1 0v.5A1.5 1.5 0 0 0 2.5 7H3v1H1.5a.5.5 0 0 0 0 1H3v1h-.5A1.5 1.5 0 0 0 1 11.5v.5a.5.5 0 1 0 1 0v-.5a.5.5 0 0 1 .5-.5H3a5 5 0 0 0 4.5 4.975z"></path>
          </svg>
          <span className="ml-2">Bug report</span>
        </a>
      </div>
    </>
  );
};

export default Footer;
