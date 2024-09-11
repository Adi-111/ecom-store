"use client"
import Button from "@/components/ui/button";
import { BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center text-center text-xs text-gray-600 py-6 bg-gray-100">
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-4">

        {/* Email Section */}
        <div className="flex items-center gap-2">
          <Button
            onClick={() => window.location.href = 'mailto:Arrirearena21@gmail.com'}
            className="flex items-center rounded-full bg-black px-4 py-2"
          >
            <MdEmail size={16} color="white" />
          </Button>
          <span className="text-black font-medium">attirearena21@gmail.com</span>
        </div>

        {/* WhatsApp Section */}
        <div className="flex items-center gap-2">
          <Button
            onClick={() => window.open('https://wa.link/by2spi', '_blank')}
            className="flex items-center rounded-full bg-green-500 px-4 py-2"
          >
            <BsWhatsapp size={16} color="white" />
          </Button>
          <span className="text-black font-medium">99586 64547</span>
        </div>

      </div>

      <div className="text-gray-500">
        &copy; 2023 <span className="font-bold text-gray-700">AttireArena</span>. All rights reserved.
      </div>
    </footer>
  )
};

export default Footer;
