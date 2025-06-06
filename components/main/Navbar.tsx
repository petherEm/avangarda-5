"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Gift, GiftIcon, Instagram, Menu, Phone } from "lucide-react";
import { usePathname } from "next/navigation";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LanguageSwitcher } from "@/components/language-swticher";

// Add this to your tailwind.config.js if you haven't already
// screens: { 'xs': '480px', ...defaultTheme.screens }

interface MenuItemType {
  nameKey: string;
  href: string;
}

const MenuListing: MenuItemType[] = [
  { nameKey: "hotel", href: "/hotel" },
  { nameKey: "offers", href: "/pakiety" },
  { nameKey: "business", href: "/biznes" },
  { nameKey: "events", href: "/przyjecia" },
  { nameKey: "dining", href: "/restauracja" },
  { nameKey: "spa", href: "/spa" },
  { nameKey: "entertainment", href: "/rozrywka" },
  { nameKey: "kids", href: "/dzieci" },
];

interface NavbarProps {
  lang: string;
  dict: {
    nav: {
      [key: string]: string;
    };
  };
}

export function Navbar({ lang, dict }: NavbarProps) {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);
  const navRef = React.useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (event: React.MouseEvent) => {
    if (navRef.current?.contains(event.target as Node)) {
      setIsHovered(true);
    }
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleTouchStart = () => {
    setIsHovered(true);
  };
  const handleTouchEnd = () => {
    setIsHovered(false);
  };

  const isActive = (href: string) => {
    const localizedHref = `/${lang}${href}`;
    return (
      pathname === localizedHref || pathname.startsWith(`${localizedHref}/`)
    );
  };

  const getLocalizedHref = (path: string) => `/${lang}${path}`;

  const MobileMenuContent = () => (
    <>
      <SheetHeader>
        <SheetTitle>
          <Image
            src="/avangarda-logo-sm-3.png"
            alt="Hotel Avangarda"
            width={110}
            height={88}
            className="h-auto w-[110px]"
            quality={100}
            priority
          />
        </SheetTitle>
      </SheetHeader>
      <div className="mt-6 flex flex-col gap-4">
        <nav className="flex flex-col space-y-3 text-white">
          {MenuListing.map((item) => (
            <Link
              key={item.nameKey}
              href={getLocalizedHref(item.href)}
              className={`text-sm font-alata font-medium transition-colors ${
                isActive(item.href) ? "text-avangarda" : "hover:text-avangarda"
              }`}
              onClick={() => setIsSheetOpen(false)}
            >
              {dict.nav[item.nameKey]}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col gap-3">
          <Button
            variant="ghost"
            size="sm"
            className="w-full font-alata justify-start gap-2 text-white"
            onClick={() => setIsSheetOpen(false)}
          >
            <Phone className="h-4 w-4 text-white" />
            {dict.nav.phone}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="w-full font-alata justify-start gap-2 text-white"
            onClick={() => setIsSheetOpen(false)}
          >
            <Gift className="h-4 w-4 text-white" />
            Kup Voucher
          </Button>
          <Button
            className="bg-avangarda text-white hover:bg-avangarda/90"
            onClick={() => setIsSheetOpen(false)}
          >
            {dict.nav.book}
          </Button>
          <div className="flex justify-center">
            <LanguageSwitcher />
          </div>
          <div className="flex justify-center gap-4 mt-2">
            <Link
              href="https://facebook.com"
              className="text-white hover:text-avangarda"
              aria-label="Visit our Facebook page"
              onClick={() => setIsSheetOpen(false)}
            >
              <Facebook className="h-5 w-5" />
            </Link>
            <Link
              href="https://facebook.com"
              className="text-white hover:text-avangarda"
              aria-label="Visit our Instagram page"
              onClick={() => setIsSheetOpen(false)}
            >
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <Container
      ref={navRef}
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isScrolled || isHovered ? "bg-primary" : "bg-transparent pt-2 sm:pt-4"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top bar */}
      <div
        className={`flex items-center transition-all duration-500 ${
          isScrolled ? "h-16 justify-between" : "justify-end gap-4 py-2"
        }`}
      >
        {/* Logo when scrolled */}
        {isScrolled && (
          <Link href={getLocalizedHref("/")} className="flex-shrink-0">
            <Image
              src="/avangarda-logo-sm-3.png"
              alt="Hotel Avangarda"
              width={110}
              height={88}
              className="h-auto w-[90px] transition-opacity duration-500 sm:w-[110px]"
              quality={100}
              priority
            />
          </Link>
        )}

        {/* Center navigation for desktop when scrolled */}
        {isScrolled && (
          <nav className="hidden xl:flex items-center justify-center gap-3 xl:gap-6 flex-1">
            {MenuListing.map((item) => (
              <Link
                key={item.nameKey}
                href={getLocalizedHref(item.href)}
                className={`whitespace-nowrap text-sm font-alata font-medium transition-colors tracking-wide ${
                  isActive(item.href)
                    ? "text-avangarda"
                    : "text-white hover:text-avangarda"
                }`}
              >
                {dict.nav[item.nameKey]}
              </Link>
            ))}
          </nav>
        )}

        {/* Right side items */}
        <div
          className={`flex items-center ${isScrolled ? "gap-2 sm:gap-4" : "gap-4"}`}
        >
          {/* Social media icons - visible in both states */}
          <Link
            href="https://facebook.com"
            className="text-white hover:text-avangarda"
            aria-label="Visit our Facebook page"
          >
            <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
          </Link>
          <Link
            href="https://facebook.com"
            className="text-white hover:text-avangarda"
            aria-label="Visit our Instagram page"
          >
            <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
          </Link>

          <LanguageSwitcher />

          <Button
            size="sm"
            className="bg-avangarda font-alata px-2 text-xs text-white hover:bg-avangarda/90 sm:px-4 sm:text-sm"
          >
            <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
            {!isScrolled && (
              <span className="ml-1 sm:ml-2">{dict.nav.phone}</span>
            )}
          </Button>

          {/* Kup Voucher button - only visible on desktop */}
          <Button
            size="sm"
            className="bg-avangarda font-alata px-2 text-xs text-white hover:bg-avangarda/90 sm:px-4 sm:text-sm flex"
          >
            <GiftIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
            Kup Voucher
          </Button>

          {/* Mobile menu button */}
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button
                variant="link"
                size="icon"
                className="xl:hidden text-white"
                asChild
              >
                <Menu className="h-8 w-8" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] bg-[#404042] border-l border-avangarda/20 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right data-[state=open]:duration-300 data-[state=closed]:duration-200"
            >
              <MobileMenuContent />
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Main navbar - only shown when not scrolled */}
      {!isScrolled && (
        <div className="relative">
          <div className="h-[120px] flex-col items-center justify-center sm:h-40">
            {/* Logo */}
            <Link
              href={getLocalizedHref("/")}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <Image
                src="/avangarda-logo-lg-2.png"
                alt="Hotel Avangarda"
                width={200}
                height={160}
                className="h-auto w-[150px] transition-opacity duration-500 sm:w-[200px] md:w-[250px]"
                priority
              />
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden w-full xl:flex absolute -bottom-10 left-0 flex-row justify-center gap-2 xl:gap-6 overflow-x-auto">
              {MenuListing.map((item) => (
                <Link
                  key={item.nameKey}
                  href={getLocalizedHref(item.href)}
                  className={`whitespace-nowrap text-sm font-alata font-medium transition-colors tracking-wide ${
                    isActive(item.href)
                      ? "text-avangarda"
                      : "text-white hover:text-avangarda"
                  }`}
                >
                  {dict.nav[item.nameKey]}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </Container>
  );
}
