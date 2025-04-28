"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

interface HeroSectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  imageSrc?: string;
}

export default function HeroSection({
  title = "Afripay operates across Africa",
  description = "Recharge your wallet and pay for games, services, and more!",
  buttonText = "Go to Wallet",
  buttonHref = "/wallet",
  imageSrc = "/Hero_section.png",
}: HeroSectionProps) {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between gap-2 py-4 px-14">
      <div className="flex flex-col gap-4 max-w-md">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
        <Button
          asChild
          className="bg-primary text-primary-foreground hover:opacity-90 w-fit"
        >
          <a href={buttonHref}>{buttonText}</a>
        </Button>
      </div>
      <div>
        <Image
          src={imageSrc}
          alt="Hero Image"
          width={400}
          height={300}
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
