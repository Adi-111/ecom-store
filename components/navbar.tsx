import Link from "next/link";
import Image from "next/image";


import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-category";
import logoImage from "@/public/icon.png"


const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="bg-[#d9b18e] border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <Image src={logoImage} alt="alt" width={24} height={24} />
            <p className="font-bold text-xl">Attire Arena</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
