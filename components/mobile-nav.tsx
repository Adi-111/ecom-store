"use client";
import { useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { Category } from "@/types";


interface MainNavProps {
    data: Category[];
}

const triggerClassName = "flex justify-center items-center ";
const iconClassName = "text-[32px] text-accent";

const MobileNav: React.FC<MainNavProps> = ({
    data
}) => {
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const routes = Array.isArray(data) ? data.map((route) => ({
        href: `/category/${route.id}`,
        label: route.name,
        active: pathname === `/category/${route.id}`,
    })) : [];

    if (!mounted) {
        return (
            <div className={triggerClassName} aria-hidden>
                <CiMenuFries className={iconClassName} />
            </div>
        );
    }

    return (
        <>
            <Sheet>
                <SheetTrigger className={triggerClassName}>
                    <CiMenuFries className={iconClassName} />
                </SheetTrigger>
                <SheetContent className="flex flex-col bg-slate-400">
                    <div className="mt-32 mb-40 text-center text-2xl">
                        <Link href="/">
                            <h1 className="text-4xl " >Attire-Arena <span className="text-accent">.</span> </h1>
                        </Link>
                    </div>
                    <nav className="flex flex-col justify-center items-center gap-8">
                        {routes.map((link, index) => {
                            return <Link href={link.href} key={index} className={`${link.href === pathname && "text-accent border-b-2"} text-xl capitalize hover:text-accent transition-all `}>
                                {link.label}
                            </Link>
                        })}
                    </nav>
                </SheetContent>
            </Sheet>
        </>
    );
}

export default MobileNav;
