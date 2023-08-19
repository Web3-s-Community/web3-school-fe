import Link from "next/link";
import { PropsWithChildren } from "react";
interface Props {}

const Footer: React.FC<PropsWithChildren<Props>> = ({}) => {
  return (
    <>
      <footer className="flex flex-col items-center pt-2">
        <div className="space-around flex flex-row space-x-4">
          <Link href="/contact">contact</Link>
          <Link href="/privacy">privacy</Link>
          <Link href="/terms">terms</Link>
        </div>
        <div className="p-2 text-center">
          <span className="pr-2">© 2023 Copyright</span>
          <Link href="https://web3school.fun">
            Web3School.fun
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
