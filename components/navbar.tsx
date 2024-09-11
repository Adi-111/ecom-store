import Link from "next/link";
import Image from "next/image";


import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-category";
import logoImage from "@/public/icon.png"
import MobileNav from "./mobile-nav";


const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="bg-[#d9b18e] border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <Image src={logoImage} alt="alt" width={24} height={24} />
            <p className="font-bold text-xlv ">Attire Arena</p>
          </Link>
          <div className="hidden xl:flex items-center gap-8"><MainNav data={categories} /></div>
          <NavbarActions />

          <div className="xl:hidden ml-2"><MobileNav data={categories} /></div>


        </div>
      </Container>
    </div>
  );
};

export default Navbar;
