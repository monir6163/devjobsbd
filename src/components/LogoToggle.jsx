import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
const Logo = "/images/devjobsbd-logo.png";
const WhiteScreen = "/images/devjobsbd-logo-black.png";

const LogoToggle = () => {
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <Link
        className="flex items-center text-xl font-bold tracking-wider text-gray-900 dark:text-gray-100"
        href="/"
      >
        <Image
          src={`${theme === "dark" ? Logo : WhiteScreen}`}
          alt="devjobsbd"
          width={120}
          height={48}
        />
        <Badge className="ml-1 -mt-8 border-red-700" variant="outline">
          Beta
        </Badge>
      </Link>
    );
  }

  return (
    <Link
      className="flex items-center text-xl font-bold tracking-wider text-gray-900 dark:text-gray-100"
      href="/"
    >
      {theme === "dark" && (
        <Image src={Logo} alt="devjobsbd" width={120} height={48} />
      )}
      {theme === "light" && (
        <Image src={WhiteScreen} alt="devjobsbd" width={120} height={48} />
      )}
      <Badge className="ml-1 -mt-8 border-red-700" variant="outline">
        Beta
      </Badge>
    </Link>
  );
};

export default LogoToggle;
