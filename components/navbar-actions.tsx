"use client";

import { ShoppingBag, User2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import { BsWhatsapp } from "react-icons/bs";




const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button onClick={() => window.open('https://wa.link/by2spi', '_blank')} className="flex items-center rounded-full bg-black px-4 py-2">
        <BsWhatsapp
          size={20}
          color="white"
        />
      </Button>
      <Button onClick={() => router.push('/user')} className="flex items-center rounded-full bg-black px-4 py-2">
        <User2Icon
          size={20}
          color="white"
        />
      </Button>

      <Button onClick={() => router.push('/cart')} className="flex items-center rounded-full bg-black px-4 py-2">
        <ShoppingBag
          size={20}
          color="white"
        />
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
}

export default NavbarActions;