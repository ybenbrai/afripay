"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/home", label: "Payments and transfers" },
    { href: "/replenishment", label: "Replenishment" },
    { href: "/cards", label: "Cards" },
    { href: "/help", label: "Help" },
    { href: "/available", label: "Available in Morocco" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 border-b bg-background shadow-sm flex items-center justify-between h-16 md:px-40 px-6 z-50">
      {/* Left side: Logo */}
      <div className="flex items-center gap-2">
        <Link href="/">
          <Image
            src="/afripay-logo.png"
            alt="Afripay Logo"
            width={80}
            height={80}
            priority
          />
        </Link>
      </div>

      {/* Center: Links */}
      <div className="hidden md:flex gap-6 items-center">
        {links.map((link) => (
          <Button
            asChild
            variant="ghost"
            key={link.href}
            className={
              pathname === link.href
                ? "text-primary font-bold"
                : "text-foreground"
            }
          >
            <Link href={link.href}>{link.label}</Link>
          </Button>
        ))}
      </div>

      {/* Right: Search + Buttons */}
      <div className="hidden md:flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <Search className="w-5 h-5" />
        </Button>
        <Button variant="outline" asChild>
          <Link href="/create-wallet">Create a Wallet</Link>
        </Button>
        <Button className="btn-primary rounded-full" asChild>
          <Link href="/auth/login">Login</Link>
        </Button>
      </div>

      {/* Mobile Menu */}
      <div className="flex md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              ☰
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-6 flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg font-medium text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-6 flex flex-col gap-3">
              <Button asChild variant="outline">
                <Link href="/create-wallet">Create a Wallet</Link>
              </Button>
              <Button className="btn-primary rounded-full" asChild>
                <Link href="/auth/login">Login</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
