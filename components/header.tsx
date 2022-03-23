import Link from "next/link";
import DarkModeButton from "./darkMode-button";
const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/">
        <a className="hover:underline">Blog</a>
      </Link>
      <DarkModeButton></DarkModeButton>
    </h2>
  );
};

export default Header;
