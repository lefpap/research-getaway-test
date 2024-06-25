import { createContext, useContext } from "react";
import type { ReactNode } from "react";

interface NavbarContextProps {
  navLinks: {
    title: string;
    href: string;
  }[];
  lang: string;
}

const NavbarContext = createContext<NavbarContextProps | undefined>(undefined);

export const useNavbarContext = (): NavbarContextProps => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error("useNavbarContext must be used within a NavbarProvider");
  }
  return context;
};

interface NavbarProviderProps {
  children: ReactNode;
  navLinks: NavbarContextProps["navLinks"];
  lang: string;
}

export const NavbarProvider = ({
  children,
  navLinks,
  lang,
}: NavbarProviderProps) => {
  const value = { navLinks, lang };
  return (
    <NavbarContext.Provider value={value}>{children}</NavbarContext.Provider>
  );
};
