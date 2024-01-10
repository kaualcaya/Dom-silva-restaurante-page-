import Image from "next/image"
import Link from "next/link"
import { NAV_LINKS } from "@/constants"
import Button from "./Button"


const Navbar = () => {
  return (
    /*link*/
    <nav className=" flexBetween max-container padding-container relative z-30 py-5">

      <Link href="/">
        <Image src="./Logo.svg" alt="logo" width={74} height={29} />
      </Link>


      <ul className=" hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href}
            key={link.key}
            className=" Regular-16 text-brown-20  flexCenter cursor-pointer hover:text-[#941b0c] ">
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden ">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_login"
        />
      </div>

          <Image
          src="menu.svg"
          alt="emnu"
          width={32}
          height={32}
          className=" inline-block cursor-pointer"
          />

    </nav>
  )
}

export default Navbar
