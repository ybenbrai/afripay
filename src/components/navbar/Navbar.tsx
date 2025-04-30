"use client";

import { useState } from "react";
import AuthButtons from "@/components/navbar/AuthButtons";
import { NAV_LINKS } from "@/lib/constants/navLinks";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import RegisterLoginModal from "@/components/auth/RegisterLoginModal";

export default function Navbar() {
  const pathname = usePathname();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalStep, setModalStep] = useState<"login" | "register">("login");

  const openModal = (step: "login" | "register") => {
    setModalStep(step);
    setModalOpen(true);
  };

  return (
    <>
      <RegisterLoginModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        initialStep={modalStep}
      />

      <nav className="fixed top-0 left-0 right-0 border-b bg-background shadow-sm flex items-center justify-between h-16 md:px-40 px-6 z-50">
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

        <div className="hidden md:flex gap-6 items-center">
          {NAV_LINKS.map((link) => (
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

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Search className="w-5 h-5" />
          </Button>
          <AuthButtons onOpen={openModal} />
        </div>

        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                ☰
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-6 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium text-foreground"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-6 flex flex-col gap-3">
                <AuthButtons onOpen={openModal} />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </>
  );
}
