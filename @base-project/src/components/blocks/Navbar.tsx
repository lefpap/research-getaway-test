import {
  AcademicCapIcon,
  MoonIcon,
  MagnifyingGlassIcon,
  RssIcon,
} from "@heroicons/react/24/outline";

import { Button } from "@/components/ui/button";

interface NavMenuProps {
  navLinks: {
    title: string;
    href: string;
  }[];
}

interface NavbarProps extends NavMenuProps {
  lang?: string;
}

function Navbar({ navLinks, lang = "en" }: NavbarProps) {
  return (
    <header className="py-5 border-b border-b-input">
      <div className="container flex">
        <div className="flex items-center justify-start gap-5">
          <a href="/" className="mr-5">
            <AcademicCapIcon className="size-8" />
          </a>
          <NavMenu navLinks={navLinks} />
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
    </header>
  );
}

function NavMenu({ navLinks }: NavMenuProps) {
  return (
    <nav className="flex items-center justify-start gap-1">
      {navLinks.map((link) => (
        <Button variant={"ghost"} asChild key={link.href}>
          <a href={link.href}>{link.title}</a>
        </Button>
      ))}
    </nav>
  );
}

export { Navbar };
