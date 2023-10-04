import { PropsWithChildren } from "react";
import Navbar from "../Navbar/navbar";
import Head from "next/head";

export type Container_Properties = PropsWithChildren<{
  title: string,
  image?: string,

}>;

export type ContainerProperties = PropsWithChildren<{
  title:string,
  image?:string,
  className?:string
}>;

export default function Container({children,title,image,className}:ContainerProperties){
  return(
    <>
      <Head>
        <title>{title}</title>
      </Head>
        <Navbar/>
        <div className="container">
          {children}
        </div>
    </>
  )
}

/*
 type NavItem = {
  href: string;
  text: string;
  external: boolean;
  active: boolean;
};

const navItems: NavItem[] = [
  {
    href: "/?shallow=true",
    text: "Home",
    external: false,
    active: true
  },
  {
    href: "/about",
    text: "About",
    external: false,
    active: true
  },
  {
    href: "/blog",
    text: "Blog",
    external: false,
    active: true
  },
  {
    href: "/archive",
    text: "Archive",
    external: false,
    active: true
  },
  {
    href: "/mirror",
    text: "My Mirrors",
    external: false,
    active: true
  }
];
*/
