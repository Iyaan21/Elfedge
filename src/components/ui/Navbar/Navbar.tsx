"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import DesktopMenu from "./DesktopMenu";
import MobMenu from "./MobMenu";
import { NAVIGATION_MENUS } from "./constants";
import { throttle } from "lodash";
import { cn } from "@/lib/utils";
import DarkModeToggle from "../DarkModeToggle";
import { Button } from "../button";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setIsScrolled(window.scrollY > 20);

      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }, 100);

    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkIfMobile();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkIfMobile);
    };
  }, [lastScrollY]);

  return (
    <motion.header
      className={cn(
        "fixed left-0 top-0 z-50 w-full bg-transparent py-2 transition-all duration-300 ease-in-out",
        "border-b border-border/5",
        isScrolled ? "shadow-lg bg-background" : "bg-transparent border-border"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
      }}
    >
      <div className="container">
        <div className="flex h-16 items-center justify-between max-w-full">
          <Logo />

          <DesktopNavigation />

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-4">
              <DarkModeToggle />

              <Button
                variant="primary"
                size={"lg"}
                className="hidden sm:flex sm:size-sm md:size-md lg:size-lg"
                rightIcon={<FiArrowUpRight className="size-6" />}
              >
                Let&apos;s Talk
              </Button>

              <Button
                variant="primary"
                size={"xs"}
                className="flex sm:hidden"
                rightIcon={<FiArrowUpRight className="size-4" />}
              >
                Let&apos;s Talk
              </Button>
            </div>
            {isMobile && <MobMenu Menus={NAVIGATION_MENUS} />}
          </div>
        </div>
      </div>
    </motion.header>
  );
}

const Logo = () => (
  <Link
    href="/"
    className="text-2xl xl:text-3xl font-bold whitespace-nowrap text-primary font-rajdhani w-full h-auto max-w-[140px] sm:max-w-[180px] xl:max-w-[180px]"
  >
    <Image
      src="/images/logo-whitebg.png"
      alt="Elfedge"
      width={180}
      height={180}
      className="w-full h-full dark:hidden"
    />
    <Image
         src="/images/logo-whitebg.png"
      alt="Elfedge"
      width={180}
      height={180}
      className="w-full h-full dark:block hidden"
    />
  </Link>
);

const DesktopNavigation = () => (
  <nav className="hidden lg:flex items-center gap-2">
    <ul className="flex items-center gap-2 text-base">
      {NAVIGATION_MENUS.map((menu) => (
        <DesktopMenu key={menu.name} menu={menu} />
      ))}
    </ul>
  </nav>
);
