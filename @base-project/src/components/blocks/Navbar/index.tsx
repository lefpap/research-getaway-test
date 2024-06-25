import {
  AcademicCapIcon,
  MoonIcon,
  MagnifyingGlassIcon,
  RssIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { cn } from "@/lib/utils";
import { NavbarProvider, useNavbarContext } from "./context";

interface NavbarProps {
  navLinks: {
    title: string;
    href: string;
  }[];
  lang?: string;
}

function Navbar({ navLinks, lang = "en" }: NavbarProps) {
  return (
    <NavbarProvider navLinks={navLinks} lang={lang}>
      <header className="py-5 border-b border-b-input">
        <NavbarDesktop className="hidden md:flex" />
        <NavbarMobile className="md:hidden" />
      </header>
    </NavbarProvider>
  );
}

function NavbarDesktop({ className }: { className?: string }) {
  const { navLinks, lang } = useNavbarContext();

  return (
    <div className={cn("container flex", className)}>
      <div className="flex items-center justify-start gap-5">
        <a href="/" className="mr-5">
          <AcademicCapIcon className="size-8" />
        </a>
        <nav className="flex items-center justify-start gap-1">
          {navLinks.map((link) => (
            <Button variant={"ghost"} asChild key={link.href}>
              <a href={link.href}>{link.title}</a>
            </Button>
          ))}
        </nav>
      </div>
      <div className="ml-auto flex items-center justify-end gap-0.5">
        <Button variant={"outline"} size={"icon"} className="rounded-full">
          <MagnifyingGlassIcon className="size-5" />
        </Button>
        <Button variant={"outline"} size={"icon"} className="rounded-full">
          <MoonIcon className="size-5" />
        </Button>
        <Button variant={"outline"} size={"icon"} className="rounded-full">
          <RssIcon className="size-5" />
        </Button>
        <Button variant={"outline"} size={"icon"} className="rounded-full">
          <svg className="size-5">
            <use href={`/icons/flags.svg#${lang}`}></use>
          </svg>
        </Button>
      </div>
    </div>
  );
}

function NavbarMobile({ className }: { className?: string }) {
  return (
    <div className={cn("container flex", className)}>
      <div className="flex items-center justify-start gap-5">
        <a href="/" className="mr-5">
          <AcademicCapIcon className="size-8" />
        </a>
      </div>
      <div className="ml-auto flex items-center justify-end gap-0.5">
        <NavbarDrawer />
      </div>
    </div>
  );
}

function NavbarDrawer() {
  const { navLinks } = useNavbarContext();

  return (
    <Drawer direction="right">
      <DrawerTrigger>
        <Button variant={"outline"} size={"icon"} className="rounded-full">
          <Bars3Icon className="size-5" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <Button
            asChild
            variant={"outline"}
            size={"icon"}
            className="rounded-full"
          >
            <DrawerClose>
              <XMarkIcon className="size-8" />
            </DrawerClose>
          </Button>
        </DrawerHeader>
        <DrawerFooter>Footer</DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export { Navbar };
