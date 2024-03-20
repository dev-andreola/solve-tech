import Image from "next/image";

import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image
        src={"/images/logo/logo-1.svg"}
        width={50}
        height={50}
        alt="logo"
      />
    </Link>
  );
};

export default Logo;
