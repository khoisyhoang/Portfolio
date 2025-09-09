import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail, FiChevronDown } from "react-icons/fi";
import { HiOutlineShare } from "react-icons/hi";
import ThemeChanger from "./ThemeChanger";

const socials = [
  {
    title: "LinkedIn",
    href: "https://linkedin.com/in/khoisyhoang",
    icon: FaLinkedin,
  },
  { title: "Github", href: "https://github.com/khoisyhoang", icon: FaGithub },
  { title: "Email", href: "mailto:khoisyhoang@gmail.com", icon: FiMail },
];

export default function Social() {
  return (
    <>
      <div className={`hidden lg:flex`}>
        <ul
          className={`flex flex-row justify-between items-center lg:gap-5 gap-3`}
        >
          {socials.map((social) => (
            <Link
              key={social.title}
              href={social.href}
              target="_blank"
              className={` flex flex-row align-center justify-center items-center decoration-none  hover:text-cyan-500 `}
            >
              <social.icon className={`mr-[5px] lg:text-[18px] text-[14px]`} />
              <small className="lg:text-sm text-[10px]">{social.title}</small>
            </Link>
          ))}

          <ThemeChanger />
        </ul>
      </div>
      <div className="lg:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2 md:px-3 px-1 md:py-2 py-1 rounded-lg bg-background/80 backdrop-blur-sm border border-border/50 hover:bg-accent hover:text-accent-foreground transition-all duration-200 outline-none focus:outline-none ">
            <HiOutlineShare className="w-4 h-4" />
            <span className="text-xs font-medium">Contact</span>
            <FiChevronDown className="w-3 h-3 transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </DropdownMenuTrigger>
          <DropdownMenuContent 
            className="w-56 p-2 bg-background/95 backdrop-blur-md border border-border/50 shadow-xl rounded-xl animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95"
            sideOffset={8}
            align="end"
          >
            <div className="px-2 py-1.5 text-sm font-medium text-muted-foreground">
              Let's connect
            </div>
            <DropdownMenuSeparator className="my-1 bg-border/50" />
            {socials.map((social) => (
              <DropdownMenuItem 
                key={social.title}
                className="p-0 focus:bg-accent/50 rounded-lg transition-colors duration-150"
                asChild
              >
                <Link
                  href={social.href}
                  target="_blank"
                  className="flex items-center gap-3 px-3 py-2.5 w-full text-sm hover:bg-accent/30 rounded-lg transition-all duration-150 group"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/20 group-hover:bg-accent/40 transition-colors duration-150">
                    <social.icon className="w-4 h-4 text-foreground/80 group-hover:text-foreground transition-colors duration-150" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium text-foreground group-hover:text-foreground transition-colors duration-150">
                      {social.title}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {social.title === 'LinkedIn' && 'Professional profile'}
                      {social.title === 'Github' && 'Code repositories'}
                      {social.title === 'Email' && 'Send me a message'}
                    </span>
                  </div>
                </Link>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator className="my-2 bg-border/50" />
            <div className="px-2 py-1">
              <ThemeChanger />
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}
