import Image from "next/image";
import petsoftLogo from "../../public/logo.svg";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image src={petsoftLogo} alt="PetSoft Logo" />
    </Link>
  );
}
